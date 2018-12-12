var db = require('../config/db');
var express = require('express');
var router = express.Router();
//var app = express();
var distance = require('google-distance');
var geolib = require('geolib');
var extend = require('node.extend');
var geolocation = require('geolocation');
var NodeGeocoder = require('node-geocoder');
var socketio = require('socket.io');
var notificationService = require('../notifications/service');
var _ = require('lodash');
var paypalConfig = require('./../config/paypal');
var paypal = require('paypal-rest-sdk');
var async = require('async');

var options = {
	provider: 'google',
	// Optional depending on the providers 
	httpAdapter: 'https', // Default 
	apiKey: 'AIzaSyCJSBa-9qTRtEX3IVQ_eg7UCCGQPuFJxbc', // for Mapquest, OpenCage, Google Premier 
	formatter: null // 'gpx', 'string', ... 
};
var globalQueries = {
	rating: '(SELECT DISTINCT SUM(points) / COUNT(points) from rating WHERE rating.rated_to = users.id) rating',
	count_rating: '(SELECT DISTINCT COUNT(points) from rating WHERE rating.rated_to = users.id) total_rating'
};


var geocoder = NodeGeocoder(options);

var user_column = "users.id as user_id, users.name, users.lname, users.email, users.user_description, users.user_image, users.cover_image, users.date, users.location, users.telephone, users.avg_rate, users.track_tasks, users.cash_active, users.stripe_active, users.paypal_active";

router.get("/tasks", function (req, res) {
	var page = req.query.page;
	var page_limit = page * 10;
	db.query('SELECT task_post.*,' + user_column + ' from task_post JOIN users ON task_post.user_id = users.id WHERE task_post.awarded = 0 ORDER BY task_post.start_date DESC LIMIT ' + page_limit + ', 10', function (err, results, fields) {
		if (!err) {
			res.status(200).json(results);
		} else {
			res.status(400).end();
		}
	});
});

router.get("/get_tasks", function (req, res, next) {
	var s = req.query.s;
	var s_query = '';
	var city = req.query.city || "Victoria, BC, CA";
	var status = req.query.status;
	var status_query = '';
	var price_min = req.query.price_min;
	var price_max = req.query.price_max;
	var distance_min = req.query.distance_min;
	var distance_max = req.query.distance_max;
	var price_query = '';
	var posted = req.query.posted;
	var posted_query = '';
	var price = req.query.price;
	var page = req.query.page;
	var page_limit = page * 10;
	var task_result = [];

	if (s != '') {
		s_query = ' AND (task_post.task_title LIKE "%' + s + '%" OR task_post.task_description LIKE "%' + s + '%" OR users.name LIKE "%' + s + '%" )';
	}

	if (status == 'all') {
		//status_query = '';
		status_query = 'task_post.status = 0';
	} else if (status == 'open') {
		status_query = 'task_post.awarded = 0 AND task_post.status = 0';
	} else if (status == 'tasked') {
		status_query = 'task_post.awarded = 1 AND task_post.status = 0';
	} else if (status == 'expired') {
		status_query = 'task_post.status = 1';
	} else {
		status_query = 'task_post.awarded = 0 AND task_post.status = 0';
	}

	if (price_min != '' && price_max != '') {
		price_query = ' AND task_post.task_budget BETWEEN ' + price_min + ' AND ' + price_max;
	}

	if (posted == 'newest') {
		posted_query = ' ORDER BY task_post.task_date ASC ';
	} else if (posted == 'oldest') {
		posted_query = ' ORDER BY task_post.task_date DESC ';
	} else {
		posted_query = ' ORDER BY task_post.awarded ASC, task_post.start_date ASC';
	}

	geocoder.geocode(city)
		.then(function (geo_locate) {
			if (geo_locate[0].countryCode == 'CA') {
				db.query('SELECT task_post.*,' + user_column + ', (SELECT COUNT(*) FROM `chat` where chat.task_id = task_post.id ) AS ChatCounts, (SELECT COUNT(*) FROM `bidding` where bidding.task_id = task_post.id ) AS OfferCounts FROM task_post JOIN users ON task_post.user_id = users.id WHERE ' +
					status_query + s_query + price_query + posted_query + ' LIMIT ' + page_limit + ', 10',
					function (err, results, fields) {
						if (!err) {
							async.eachSeries(results, function (result, callback) {
								var finalModel = {
									rating: null
								};
								var distance = geolib.getDistance({
									latitude: result.latitude,
									longitude: result.longitude
								}, {
									latitude: geo_locate[0].latitude,
									longitude: geo_locate[0].longitude
								});

								distance = geolib.convertUnit('km', distance, 0);

								finalModel = extend(result, {
									distance: distance
								});

								db.query('SELECT *, users.id as id, ' + globalQueries.rating + ', ' + globalQueries.count_rating + ' FROM users where users.id = ?', result.user_id, function (err, results, fields) {
									if (!err) {
										finalModel.rating = results[0].rating;
									}
									task_result.push(finalModel);
									callback();
								});
							}, function (done) {
								//distance filter
								task_result = _.filter(task_result, function (result) {
									return result.distance >= distance_min && result.distance <= distance_max;
								});
								task_result = _.orderBy(task_result, ['distance']);
								res.status(200).send(task_result);
							});
						} else {
							res.status(400).end();
						}
					});
			} else {
				res.status(200).send(task_result);
			}
		})
		.catch(function (err) {
			res.status(500).end();
		});

});

router.get("/task/:id", function (req, res) {
	var id = parseInt(req.params.id);
	//var user_id =  parseInt(req.query.user_id);
	var user_id = req.decoded ? req.decoded.id : 0;
	var finalResult = {
		task: [],
		related: [],
		images: [],
		questions: [],
		bids: [],
		user_info: []
	};
	var city = req.query.city || "Victoria, BC, CA";
	geocoder.geocode(city)
		.then(function (geo_locate) {
			db.query('SELECT task_post.*,' + user_column + ' from task_post JOIN users ON task_post.user_id = users.id WHERE task_post.id = ' + id, function (err, results, fields) {
				if (!err) {

					var distance = geolib.getDistance({
						latitude: results[0].latitude,
						longitude: results[0].longitude
					}, {
						latitude: geo_locate[0].latitude,
						longitude: geo_locate[0].longitude
					});
					var destObject = extend(results[0], {
						distance: geolib.convertUnit('km', distance, 0)
					});
					destObject.tags = destObject.tags ? _.uniq(destObject.tags.split(',')) : [];
					finalResult.task = (destObject);

					db.query('SELECT task_post.*, ' + user_column + ' from task_post INNER JOIN users ON task_post.user_id = users.id where task_post.id != ? AND task_post.status = 0 order by rand() limit 5', id, function (err, results, fields) {
						if (!err) {

							if (results[0] != null)
								finalResult.related = (results);

							db.query('SELECT * from task_images WHERE task_id = ' + id, function (err, results, fields) {
								if (!err) {
									finalResult.images = (results);

									db.query('SELECT chat.*,' + user_column + ' from chat INNER JOIN users ON chat.from_id = users.id WHERE reply_to = 0 AND task_id = ' + id + ' ORDER BY chat.id DESC', function (err, results, fields) {
										if (!err) {
											finalResult.questions = (results);
											// fix the rating
											db.query('SELECT bidding.*,' + user_column + ', ' + globalQueries.rating + ', ' + globalQueries.count_rating + ' from bidding LEFT JOIN users ON bidding.user_id = users.id  WHERE bidding.task_id = ' + id + ' ORDER BY bidding.bid_id DESC', function (err, results, fields) {
												if (!err) {
													if (results[0] && results[0].bid_id != null)
														finalResult.bids = (results);

													db.query('SELECT ' + user_column + ', current_tasks.* from users RIGHT JOIN current_tasks ON current_tasks.awarded_to=users.id WHERE current_tasks.task_id = ' + id, function (err, results, fields) {
														if (!err) {
															finalResult.task_info = (results);

															db.query('SELECT *, users.id as id, users.*, ' + globalQueries.rating + ', ' + globalQueries.count_rating + ' FROM taskoli_dev.users where users.id = ?', finalResult.task.user_id, function (err, results, fields) {
																if (!err) {

																	finalResult.user_info = (results);
																	res.status(200).json(finalResult);

																} else {
																	res.status(400).end();
																}
															});
														} else {
															res.status(400).end();
														}
													});
												} else {
													res.status(400).end();
												}
											});
										} else {
											res.status(400).end();
										}
									});
								} else {
									res.status(400).end();
								}
							});
						} else {
							res.status(400).end();
						}
					});
				} else {
					res.status(400).end();
				}
			});
		}).catch(function (err) {
			//console.log(err);
			res.status(500).end();
		});
});

router.get("/getTask/:id", function (req, res, next) {
	var task_id = parseInt(req.params.id);

	var taskData = {};
	db.query('SELECT * from task_post WHERE task_post.id = ?', task_id, function (err, results, fields) {
		if (!err) {
			taskData = results[0];
			taskData.tags = taskData.tags ? _.uniq(taskData.tags.split(',')) : [];
		} else {
			res.status(400).end();
		}
	});

	db.query('SELECT * from task_images WHERE task_images.task_id = ?', task_id, function (error, images, columns) {
		if (!error) {
			taskData.images = images || [];
			res.status(200).json(taskData);
		}
	});
});

router.get("/user_tasks/:id", function (req, res) {
	var user_id = parseInt(req.params.id);
	var finalResult = {
		user_info: [],
		task_as_employer: [],
		task_as_tasker: []

	};

	db.query('SELECT *, users.id as id, ' + globalQueries.rating + ', ' + globalQueries.count_rating + ' FROM users where users.id = ?', user_id, function (err, results, fields) {
		if (!err) {
			finalResult.user_info = (results);
			db.query('SELECT task_post.*, rating.date as rating_date,  rating.feedback, rating.points, users.id as id, users.user_image, users.name as  name from rating INNER JOIN task_post ON task_post.id = rating.task_id INNER JOIN users ON users.id = rating.taskee_id WHERE task_post.user_id =' + user_id + ' AND task_post.completed = 1 AND rating.role = 1 ORDER BY rating.id DESC', function (err, results, fields) {
				if (!err) {
					finalResult.task_as_employer = (results);
					db.query('SELECT task_post.*, rating.date as rating_date, rating.feedback, rating.points, users.id as id, users.user_image, users.name as name from rating INNER JOIN task_post ON task_post.id = rating.task_id INNER JOIN users ON users.id = rating.tasker_id  WHERE task_post.tasker_id =' + user_id + ' AND task_post.completed = 1 AND rating.role = 2 ORDER BY rating.id DESC', function (err, results, fields) {
						if (!err) {
							finalResult.task_as_tasker = (results);
							res.status(200).json(finalResult);
						} else {
							res.status(400).end();
						}
					});
				} else {
					res.status(400).end();
				}
			});
		
		} else {
			res.status(400).end();
		}
	});
});

router.get("/employer_task", function (req, res) {
	if (req.query.user_id != "") {
		var user_id = parseInt(req.query.user_id);
	} else {
		var user_id = req.decoded.id;
	}

	var finalResult = {
		user_info: [],
		task_as_employer: []
	};

	var s = req.query.s;
	var s_query = '';
	if (s != '') {
		s_query = ' AND (task_post.task_title LIKE "%' + s + '%" OR task_post.task_description LIKE "%' + s + '%" OR users.name LIKE "%' + s + '%" )';
	}

	var status = req.query.status;
	var status_query = '';
	if (status == 'all') {
		status_query = '';
	} else if (status == 'open') {
		status_query = ' AND task_post.awarded = 0';
	} else if (status == 'tasked') {
		status_query = ' AND task_post.awarded = 1 AND task_post.status = 0';
	} else if (status == 'completed') {
		status_query = ' AND task_post.awarded = 1 AND (task_post.completed = 1) AND task_post.status = 1';
	} else {
		status_query = '';
	}


	var sort = req.query.sort;
	var sort_query = '';
	if (sort == 'price_high') {
		sort_query = ' ORDER BY task_post.task_budget DESC';
	} else if (sort == 'price_low') {
		sort_query = ' ORDER BY task_post.task_budget ASC ';
	} else if (sort == 'dated') {
		sort_query = ' ORDER BY task_post.task_date DESC  ';
	} else {
		sort_query = ' ORDER BY task_post.task_date DESC ';
	}


	db.query('SELECT ' + user_column + ' from users WHERE id = ' + user_id, function (err, results, fields) {
		if (!err) {
			finalResult.user_info = (results);
			db.query('SELECT points from rating WHERE tasker_id = ' + user_id + ' OR taskee_id = ' + user_id, function (err, results, fields) {
				if (!err) {
					finalResult.rating = _.map(results, function (result) {
						return result.points;
					}).reduce(function (sum, curr) {
						return curr + sum;
					}, 0) / results.length;
				} else {
					res.status(400).end();
				}
			});
		} else {
			res.status(400).end();
		}
	});

	db.query('SELECT task_post.*,' + user_column + ' from task_post JOIN users ON users.id = task_post.user_id WHERE task_post.user_id =' + user_id + status_query + s_query + sort_query, function (err, results, fields) {
		if (!err) {
			finalResult.task_as_employer = (results);
		} else {
			res.status(400).end();
		}
		res.status(200).json(finalResult);
	});


});

router.get("/tasker_task", function (req, res) {
	//var user_id = req.decoded.id;
	var user_id = parseInt(req.query.user_id);
	var finalResult = {
		user_info: [],
		task_as_tasker: []
	};

	var s = req.query.s;
	var s_query = '';
	if (s != '') {
		s_query = ' AND (task_post.task_title LIKE "%' + s + '%" OR task_post.task_description LIKE "%' + s + '%" OR users.name LIKE "%' + s + '%" )';
	}

	var status = req.query.status;
	var status_query = '';
	if (status == 'offer') {
		status_query = ' AND task_post.awarded = 0 ';
	} else if (status == 'tasked') {
		status_query = ' AND task_post.awarded = 1 AND task_post.status = 0';
	} else if (status == 'completed') {
		status_query = ' AND task_post.completed = 1 AND task_post.status = 1';
	} else {
		status_query = '';
	}

	var sort = req.query.sort;
	var sort_query = '';
	if (sort == 'price_high') {
		sort_query = ' ORDER BY task_post.task_budget DESC';
	} else if (sort == 'price_low') {
		sort_query = ' ORDER BY task_post.task_budget ASC ';
	} else if (sort == 'dated') {
		sort_query = ' ORDER BY task_post.task_date DESC  ';
	} else {
		sort_query = ' ORDER BY task_post.task_date DESC ';
	}


	db.query('SELECT ' + user_column + ' from users WHERE id = ' + user_id, function (err, results, fields) {
		if (!err) {
			finalResult.user_info = (results);
			db.query('SELECT points from rating WHERE tasker_id = ' + user_id + ' OR taskee_id = ' + user_id, function (err, results, fields) {
				if (!err) {
					finalResult.rating = _.map(results, function (result) {
						return result.points;
					}).reduce(function (sum, curr) {
						return curr + sum;
					}, 0) / results.length;
				} else {
					res.status(400).end();
				}
			});
		} else {
			res.status(400).end();
		}
	});

	db.query('SELECT task_post.*,' + user_column + ' from task_post JOIN bidding ON bidding.task_id=task_post.id JOIN current_tasks ON bidding.user_id = current_tasks.awarded_to AND bidding.task_id = current_tasks.task_id JOIN users ON current_tasks.awarded_by = users.id WHERE bidding.bid_status = 1 AND bidding.user_id = ' + user_id + status_query + s_query + sort_query, function (err, results, fields) {
		if (!err) {
			finalResult.task_as_tasker = (results);
		} else {
			res.status(400).end();
		}
		res.status(200).json(finalResult);
	});


});

router.get("/get_bids/:id", function (req, res) {
	var bid_id = parseInt(req.params.id);
	db.query('SELECT *,' + user_column + ' from bidding JOIN users ON users.id = bidding.user_id WHERE bid_id = ' + bid_id, function (err, results, fields) {
		if (!err) {
			res.status(200).json(results);
		} else {
			res.status(400).end();
		}
	});
});

router.get("/get_notifications/:id", function (req, res) {
	var task_id = parseInt(req.params.id);
	var user_id = req.decoded.id;
	var bid_type = parseInt(req.query.bid_type);
	db.query('SELECT * from notifications WHERE taskid = ' + task_id + ' AND type = \'hired\'', function (err, results, fields) {
		if (!err) {
			res.status(200).json(results);
		} else {
			res.status(400).end();
		}
	});
});

router.get("/check_complete/:id", function (req, res) {
	var task_id = parseInt(req.params.id);

	db.query('SELECT * from task_post JOIN users ON task_post.user_id = users.id  WHERE task_post.completed = 2 AND task_post.id = ' + task_id, function (err, results, fields) {
		if (!err) {
			res.status(200).json(results);
		} else {
			res.status(400).end();
		}
	});
});



router.get("/check_payment/:id", function (req, res) {
	var id = parseInt(req.params.id);
	var user_id = parseInt(req.query.user_id);
	var person_type = req.query.person_type;

	if (person_type == 'employer') {
		payment_query = ' AND employer_id = ' + user_id;
	} else {
		payment_query = ' ';
	}
	db.query('SELECT payment.*,' + user_column + ' from payment JOIN users ON payment.employer_id = users.id  WHERE task_id = ' + id + payment_query, function (err, results, fields) {
		if (!err) {
			res.status(200).json(results);
		} else {
			res.status(400).end();
		}
	});
});

router.get("/check_rating/:id", function (req, res) {
	var id = parseInt(req.params.id);
	var user_id = req.decoded.id;
	var person_type = req.query.person_type;
	if (person_type == 'employer') {
		var person_type = "2";
	} else {
		var person_type = "1";
	}
	db.query('SELECT * from rating WHERE task_id = ' + id + ' AND role = ' + person_type, function (err, results, fields) {
		if (!err) {
			res.status(200).json(results);
		} else {
			res.status(400).end();
		}
	});
});

router.post('/addtask', function (req, res, next) {
	//var postDataTask  =  req.body;
	var postDataTask = {
		user_id: req.body.user_id,
		task_title: req.body.task_title,
		task_description: req.body.task_description,
		start_date: req.body.start_date,
		task_budget: req.body.task_budget,
		task_location: req.body.task_location['formatted_address'],
		address: req.body.task_location['formatted_address'],
		latitude: req.body.task_location['geometry']['location']['lat'],
		longitude: req.body.task_location['geometry']['location']['lng'],
		status: 0,
		task_sooner: req.body.task_sooner,
		tags: _.uniq(req.body.tags).map(function (tag) {
			return tag.tag;
		}).join(', ')
	};


	db.query('INSERT INTO task_post SET ?', postDataTask, function (error, results, fields) {
		if (error) throw error;
		var last_task_id = results.insertId;

		if (req.body.img_name) {
			var imgs_length = req.body.img_name.length;

			for (var k = 0; k < imgs_length; k++) {
				var ImgData = {
					task_id: last_task_id,
					task_img: req.body.img_name[k],
				};
				db.query('INSERT INTO task_images SET ?', ImgData, function (error, results, fields) {
					if (!error) {
						console.log('image added');
					} else {
						res.status(400).end();
					}
				});
			}
		}

		if (req.body.images) {
			var imgs_length = req.body.images.length
			for (var k = 0; k < imgs_length; k++) {
				var ImgData = {
					task_id: last_task_id,
					task_img: req.body.images[k].task_img,
				};
				db.query('INSERT INTO task_images SET ?', ImgData, function (error, results, fields) {
					if (!error) {
						console.log('image added');
					} else {
						res.status(400).end();
					}
				});
			}
		}

		var task_payment = {
			task_id: last_task_id,
			user_id: req.decoded.id,
			paypal: req.body.paypal || 0,
			stripe: req.body.stripe || 0,
			cash: req.body.cash || 0
		};
		db.query('INSERT INTO task_preferred_payment SET ?', task_payment, function (error, results, fields) {
			if (!error) {
				res.status(200).json({
					insertId: last_task_id
				});
			} else {
				res.status(400).end();
			}
		});
	});
});

router.put('/updateTask', function (req, res, next) {
	console.log(req.body.id + 'edit post task id');

	var tags = _.uniq(req.body.tags).map(function (tag) {
		return tag.tag;
	}).join(', ');

	db.query('UPDATE `task_post` SET `task_title`=?,`task_description`=?,`start_date`=?,`task_budget`=?,`task_location`=?,`address`=?,`latitude`=?,`longitude`=?,`task_sooner`=?,`tags`=? where `id`=?', [req.body.task_title, req.body.task_description, req.body.start_date, req.body.task_budget, req.body.task_location['formatted_address'],
		req.body.task_location['formatted_address'], req.body.task_location['geometry']['location']['lat'], req.body.task_location['geometry']['location']['lng'],
		req.body.task_sooner, tags, req.body.id
	], function (error, results, fields) {

		if (!error) {
			if (req.body.images) {
				db.query('DELETE FROM task_images where task_id = ?', req.body.id, function (error, results, fields) {
					if (!error) {
						console.log('images deleted');
					} else {
						res.status(400).end();
					}
				});
				var imgs_length = req.body.images.length
				for (var k = 0; k < imgs_length; k++) {
					var ImgData = {
						task_id: req.body.id,
						task_img: req.body.images[k].task_img,
					};
					db.query('INSERT INTO task_images SET ?', ImgData, function (error, results, fields) {
						if (!error) {
							console.log('image added');
						} else {
							res.status(400).end();
						}
					});
				}
			}
			res.status(200).json(results);
			db.query('UPDATE `task_preferred_payment` SET `paypal`=?,`stripe`=?,`cash`=? where `task_id`=?', [req.body.paypal, req.body.stripe, req.body.cash, req.body.task_id], function (error, results, fields) {
				if (!error) {} else {
					res.status(400).end();
				}
			});
		} else {
			res.status(400).end();
		}
	});

});

router.put('/taskcompleted', function (req, res) {

	db.query('UPDATE `task_post` SET `completed`=? where `id`=?', ['1', req.body.task_id], function (error, results, fields) {
		if (!error) {
			res.status(200).json(results);
		} else {
			res.status(400).end();
		}
	});
});

router.post('/addpaymentdata', function (req, res, next) {
	//var postDataPayment  =  req.body;
	var postDataPayment = {
		task_id: req.body.id,
		employer_id: req.body.user_id,
		tasker_id: req.body.tasker_id,
		amount: req.body.task_budget,
		payment_type: req.body.paymentModel,
	};

	var create_payment_json = {
		"intent": "authorize",
		"payer": {
			"payment_method": "paypal"
		},
		"redirect_urls": {
			"return_url": req.get('Origin') + "/tasks",
			"cancel_url": req.get('Origin')
		},
		"transactions": [{
			"item_list": {
				"items": [{
					"name": "item",
					"sku": "item",
					"price": "1.00",
					"currency": "USD",
					"quantity": 1
				}]
			},
			"amount": {
				"currency": "USD",
				"total": "1.00"
			},
			"description": "This is the payment description."
		}]
	};

	switch (postDataPayment.payment_type) {
		case 'Paypal':
			console.log('starting payment from paypal');
			paypal.payment.create(create_payment_json, paypalConfig, function (error, payment) {
				if (error) {
					console.log(error.response);
					throw error;
				} else {
					console.log("Create Payment Response ID: " + payment.id);
					updatePayment(postDataPayment);
				}
			});
			break;
		case 'Cash':
			updatePayment(postDataPayment);
			break;
		default:
			break;
	}

	function updatePayment(payment) {
		db.query('INSERT INTO payment SET ?', payment, function (error, results, fields) {
			if (!error) {
				var notificationModel = {
					taskid: payment.task_id,
					text: 'paid you $' + payment.amount + '.00 using ' + payment.payment_type,
					type: 'payment',
					receiver_user: payment.tasker_id,
					owner_user: req.decoded.id
				};
				notificationService.addOne(notificationModel);
				res.status(200).send("Record Inserted!");
			} else {
				console.log(error);
				res.status(400).end();
			}
		});
	}
});

router.post('/addrating', function (req, res, next) {
	var itemClicked = req.query.itemClicked;
	var reviewType;

	var postDataRating = {
		task_id: req.body.id,
		tasker_id: req.body.user_id,
		taskee_id: req.body.tasker_id,
		points: req.body.rate,
		feedback: req.body.review,
		role: null,
		date: new Date()
	};

	if (itemClicked == 'employer') {
		postDataRating.role = '2';
		reviewType = 'owner_review';
		postDataRating.rated_to = req.body.tasker_id;

	} else {
		postDataRating.role = '1';
		reviewType = 'tasker_review';
		postDataRating.rated_to = req.body.user_id;
	}
	db.query('INSERT INTO rating SET ?', postDataRating, function (error, results, fields) {
		if (!error) {
			db.query('UPDATE task_post SET ' + reviewType + ' = ? where id = ?', [req.body.rate, req.body.id], function (err, results, fields) {
				if (postDataRating.role == '1') {
					db.query('UPDATE task_post SET status = 1, completed_date = ? where id = ?', [new Date(), req.body.id], function (error, results, fields) {
						if (!error) {
							console.log("Task completed");
						}
					});
				}

				var notificationModel = {
					taskid: postDataRating.task_id,
					text: 'has left you a REVIEW for',
					type: 'rating',
					receiver_user: postDataRating.rated_to,
					owner_user: req.decoded.id
				};
				notificationService.addOne(notificationModel);
				res.status(200).send("Record Inserted");
			});
		} else {
			res.status(400).end();
		}
	});
});

router.put('/tasks', function (req, res) {
	db.query('UPDATE `employee` SET `employee_name`=?,`employee_salary`=?,`employee_age`=? where `id`=?', [req.body.employee_name, req.body.employee_salary, req.body.employee_age, req.body.id], function (error, results, fields) {
		if (!error) {
			res.status(200).json(results);
		} else {
			res.status(400).end();
		}
	});
});

router.delete('/tasks', function (req, res) {
	// console.log(req.body);
	db.query('DELETE FROM `employee` WHERE `id`=?', [req.body.id], function (error, results, fields) {
		if (!error) {
			res.status(200).send("Record has been deleted!");
		} else {
			res.status(400).end();
		}
	});
});


router.delete("/deltask/:id", function (req, res) {
	var id = parseInt(req.params.id);
	db.query('DELETE from task_post WHERE id = ' + id, function (error, results, fields) {
		if (!error) {
			res.status(200).send("Deleted the user with email " + id);
		} else {
			res.status(400).end();
		}
	});
});

//Make an Offer
router.post('/makeOffer', function (req, res, next) {
	var user_id = req.decoded.id;
	var postDataOffer = {
		task_id: req.body.task_id,
		user_id: user_id,
		bid_amount: req.body.amount,
		bid_description: req.body.message,
		bid_status: 0
	};

	db.query('INSERT INTO bidding SET ?', postDataOffer, function (error, results, fields) {
		if (!error) {
			var notificationModel = {
				taskid: req.body.task_id,
				text: 'has made an offer on',
				type: 'offer',
				receiver_user: req.body.offer_by,
				owner_user: user_id
			};
			notificationService.addOne(notificationModel);
			res.status(200).json(results);
		} else {
			res.status(400).end();
		}
	});

});

//Ask Question
router.post('/askquestion', function (req, res) {
	var userid = req.decoded.id || 0;
	var postDataQuestion = {
		from_id: userid,
		to_id: req.body.by_task,
		by_task: req.body.by_task,
		reply_to: '0',
		task_id: req.body.task_id,
		message: req.body.message,
		seen: 0
	};

	db.query('INSERT INTO chat SET ?', postDataQuestion, function (error, results, fields) {
		if (!error) {
			var notificationModel = {
				taskid: req.body.task_id,
				text: 'asked a question about',
				type: 'question',
				receiver_user: req.body.by_task,
				owner_user: userid
			};
			notificationService.addOne(notificationModel);
			res.status(200).json(results);
		} else {
			res.status(400).end();
		}
	});
});

router.post('/addhiredata', function (req, res) {
	var postHireData = {
		task_id: req.body.task_id,
		awarded_by: req.body.awarded_by,
		awarded_to: req.body.awarded_to,
	};

	db.query('INSERT INTO current_tasks SET ?', postHireData, function (error, results, fields) {
		if (!error) {
			db.query('UPDATE `task_post` SET `awarded`=?, `tasker_id`=? where `id`=?', ['0', req.body.awarded_to, req.body.task_id], function (error, data, cols) {
				db.query('UPDATE bidding SET bid_status = 1 where bid_id = ?', req.body.bid_id, function (error, results, fields) {
					var notificationModel = {
						taskid: req.body.task_id,
						text: 'HIRED YOU  for',
						type: 'hired',
						receiver_user: req.body.awarded_to,
						owner_user: req.body.awarded_by
					};
					notificationService.addOne(notificationModel);
					res.status(200).json(results);
				});
			});
		} else {
			res.status(400).end();
		}
	});
});

router.post('/accept_offer/:id', function (req, res) {
	var task_id = parseInt(req.params.id);
	var notificationModel = {
		taskid: task_id,
		text: 'has ACCEPTED your task',
		type: 'accept',
		receiver_user: req.query.owner,
		owner_user: req.decoded.id
	};
	notificationService.addOne(notificationModel);
	db.query('UPDATE `task_post` SET awarded=?, tasked_date = ? where `id`=?', ['1', new Date(), task_id], function (error, results, fields) {
		if (error) {
			res.status(400).end();
		} else {
			res.status(200).send("Record has been updated!");
		}
	});
});

router.post('/reject_offer/:id', function (req, res) {
	var task_id = parseInt(req.params.id);
	var notificationModel = {
		taskid: task_id,
		text: 'has DECLINED your task',
		type: 'offer',
		receiver_user: req.query.owner,
		owner_user: req.decoded.id
	};
	notificationService.addOne(notificationModel);
	db.query('DELETE FROM `current_tasks` WHERE `task_id`=?', [task_id], function (error, results, fields) {
		if (!error) {
			db.query('UPDATE `task_post` SET `awarded`=0, `tasker_id`=0 where `id`=?', task_id, function (err, results, fields) {
				db.query('UPDATE bidding SET bid_status = 2 where bid_id = ?', req.body.bid_id, function (err, results, fields) {
					res.status(200).send("Record has been deleted and updated");
				});
			});
		} else {
			res.status(400).end();
		}
	});
});

router.put('/complete_task_tasker/:id', function (req, res) {
	var task_id = parseInt(req.params.id);

	var notificationModel = {
		taskid: task_id,
		text: 'has COMPLETED your task',
		type: 'completed',
		receiver_user: req.body.owner,
		owner_user: req.decoded.id
	};
	notificationService.addOne(notificationModel);
	db.query('UPDATE `task_post` SET `completed`=? where `id`=?', ['2', task_id], function (error, results, fields) {
		if (error) {
			res.status(400).end();
		} else {
			//res.status(200).json(results);
			res.status(200).send("Record has been updated!");
		}
	});
});

router.post('/complete_task_employer/:id', function (req, res) {
	var task_id = parseInt(req.params.id);

	db.query('UPDATE `task_post` SET `completed`=? where `id`=?', ['1', task_id], function (error, results, fields) {
		if (error) {
			res.status(400).end();
		} else {
			res.status(200).send("Record has been updated!");
		}
	});
});

//Question Chat
router.post('/submitchat', function (req, res) {
	var postDataChat = {
		from_id: req.decoded.id,
		to_id: req.body.task_by,
		by_task: req.body.task_by,
		reply_to: req.body.reply_to,
		task_id: req.body.task_id,
		message: req.body.chat
	};
	db.query('INSERT INTO chat SET ?', postDataChat, function (error, results, fields) {
		if (!error) {
			db.query("SELECT from_id FROM chat WHERE task_id = ?", req.body.task_id, function (err, results, fields) {
				results = _.uniqBy(results, 'from_id');
				_.forEach(results, function (row) {
					if (row.from_id != req.decoded.id) {
						var notificationModel = {
							taskid: req.body.task_id,
							text: 'made a comment on',
							type: 'comment',
							receiver_user: row.from_id,
							owner_user: req.decoded.id
						};
						notificationService.addOne(notificationModel);
					}
				});
			});
			if (postDataChat.from_id != postDataChat.to_id) {
				var notificationModel = {
					taskid: req.body.task_id,
					text: 'replied to the question',
					type: 'question',
					receiver_user: req.body.task_by,
					owner_user: req.body.from
				};
				notificationService.addOne(notificationModel);
			}
			res.status(200).json(results);
		} else {
			res.status(400).end();
		}
	});

});

// Get Chat according to question
router.get("/questionchat/:id", function (req, res) {
	var id = parseInt(req.params.id);
	db.query('SELECT chat.*,' + user_column + ' from chat JOIN users ON chat.from_id = users.id WHERE reply_to =' + id, function (error, results, fields) {
		if (!error) {
			res.status(200).json(results);
		} else {
			res.status(400).end();
		}
	});
});

// Get Chat according to question
router.put("/reject_task/:id", function (req, res) {
	var task_id = parseInt(req.params.id);
	db.query('UPDATE task_post SET completed = 0 WHERE id = ?', task_id, function (err, results, fields) {
		if (!err) {
			var messageModel = {
				from_id: req.decoded.id,
				to_id: req.body.tasker,
				task_id: task_id,
				message: req.body.message
			}
			db.query('INSERT INTO private_chat SET ?', messageModel, function (err, results, fields) {
				if (!err) {
					var notificationModel = {
						taskid: task_id,
						text: 'sent a message',
						type: 'message',
						receiver_user: req.body.tasker,
						owner_user: req.decoded.id
					};
					notificationService.addOne(notificationModel);
					var rejectNotification = {
						taskid: task_id,
						text: 'rejected the task',
						type: 'reject',
						receiver_user: req.body.tasker,
						owner_user: req.decoded.id
					};
					notificationService.addOne(rejectNotification);
					res.status(200).send("Record has been updated!");
				} else {
					res.status(400).end();
				}
			});
		}
	});
});
module.exports = router;