var db = require('../config/db');
var express = require('express');
var router = express.Router();
var _ = require('lodash');
var table_name = 'users';

var user_column = "users.id as user_id ,users.name, users.lname, users.email, users.user_description, users.user_image, users.cover_image, users.date, users.location, users.telephone, users.avg_rate, users.track_tasks, users.cash_active, users.stripe_active, users.paypal_active";
var globalQueries = {
	rating: '(SELECT DISTINCT SUM(points) / COUNT(points) from rating WHERE rating.rated_to = users.id) rating',
	count_rating: '(SELECT DISTINCT COUNT(points) from rating WHERE rating.rated_to = users.id) total_rating'
};

router.get("/users", function (req, res) {
	db.query('SELECT ' + user_column + ' from ' + table_name, function (err, results, fields) {
		if (!err) {
			res.status(200).json(results);
		} else {
			res.status(400).end();
		}
	});
});

router.get("/user/:id", function (req, res) {
	var id = parseInt(req.params.id);
	db.query('SELECT *, users.id as id, users.date as date, ' + globalQueries.rating + ', ' + globalQueries.count_rating + ' FROM taskoli_dev.users where users.id = ?', id, function (err, results, fields) {
		if (!err) {
			res.status(200).json(results);
		} else {
			res.status(400).end();
		}
	});
});

router.put('/trackTask', function (req, res) {
	var userid = req.body.userid;
	db.query('SELECT track_tasks from users WHERE id = ' + userid, function (err, results, fields) {
		var track_tasks = results[0]['track_tasks'] ? results[0]['track_tasks'].split(',') : [];
		track_tasks.push(req.body.taskid);
		track_tasks = _.compact(track_tasks).filter(Number);
		console.log(track_tasks)
		db.query('UPDATE `users` SET `track_tasks`=? where `id`=?', [_.uniq(track_tasks).join(','), userid], function (error, results, fields) {
			if (!error) {
				res.status(200).json(results);
			} else {
				res.status(400).end();
			}
		});
	});
});

router.get("/user_info/:id", function (req, res) {
	var user_id = parseInt(req.params.id);
	var finalResult = {
		user_info: [],
		skills: [],
		education: [],
		certifications: [],
		peace_of_mind: [],
		transportation: []
	};
	db.query('SELECT *, users.id as id, ' + globalQueries.rating + ', ' + globalQueries.count_rating + ' FROM users where users.id = ?', user_id, function (err, results, fields) {
		if (!err) {
			finalResult.user_info = (results);
			db.query('SELECT tag from skills WHERE user_id = ' + user_id, function (err, results, fields) {
				if (!err) {
					finalResult.skills = (results);
					db.query('SELECT tag from education WHERE user_id = ' + user_id, function (err, results, fields) {
						if (!err) {
							finalResult.education = (results);
							db.query('SELECT tag from certifications WHERE user_id = ' + user_id, function (err, results, fields) {
								if (!err) {
									finalResult.certifications = (results);
									db.query('SELECT * from peace_of_mind WHERE user_id = ' + user_id, function (err, results, fields) {
										if (!err) {
											finalResult.peace_of_mind = (results);
											db.query('SELECT * from transportation WHERE user_id = ' + user_id, function (err, results, fields) {
												if (!err) {
													finalResult.transportation = (results);
												} else {
													res.status(400).end();
												}
												res.status(200).json(finalResult);
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
});

function isObject(value) {
	return value !== null && typeof value === 'object';
}
router.post("/edit_profile", function (req, res) {
	var user_id = req.decoded.id;
	var finalResult = {
		userData: [],
		skills: [],
		education: [],
		certifications: [],
		peace_of_mind: [],
		transportation: []
	};
	var skills = req.body.skills;
	var education = req.body.education;
	var certifications = req.body.certifications;

	if (req.body.user.paypal_active != 1) {
		req.body.user.paypal_email = '';
	}
	//console.log(req.body.user.paypal_email);

	db.query('UPDATE `users` SET `name`=?,`lname`=?,`user_description`=?,`telephone`=?,`paypal_email`=?,`location`=?,`stripe_active`=?,`paypal_active`=?,`cash_active`=?, `streetaddress` = ? where `id`=?', [req.body.user.name, req.body.user.lname, req.body.user.user_description, req.body.user.telephone, req.body.user.paypal_email, req.body.user.location, req.body.user.stripe_active, req.body.user.paypal_active, req.body.user.cash_active, req.body.user.streetaddress, user_id], function (error, results, fields) {
		if (!error) {
			finalResult.userData = results;
			//res.status(200).json(results);
		} else {
			res.status(400).end();
		}
	});

	db.query('DELETE FROM `skills` WHERE user_id = ' + user_id, function (error, results, fields) {
		if (!error) {
			//res.status(200).send("Record has been deleted!");
		} else {
			res.status(400).end();
		}
	});

	if (skills.length != 0) {
		for (var i = 0; i < skills.length; i++) {
			var postDataSkills = {
				user_id: user_id,
				tag: skills[i].tag
			};

			db.query('INSERT INTO skills SET ?', postDataSkills, function (error, results, fields) {
				if (!error) {
					//res.status(200).json(results);
					finalResult.skills = results;
				} else {
					res.status(400).end();
				}
			});

		}
	}

	db.query('DELETE FROM `education` WHERE user_id = ' + user_id, function (error, results, fields) {
		if (!error) {
			//res.status(200).send("Record has been deleted!");
		} else {
			res.status(400).end();
		}
	});

	if (education.length != 0) {
		for (var k = 0; k < education.length; k++) {
			var postDataEducation = {
				user_id: user_id,
				tag: education[k].tag
			};

			db.query('INSERT INTO education SET ?', postDataEducation, function (error, results, fields) {
				if (!error) {
					//res.status(200).json(results);
					finalResult.education = results;
				} else {
					res.status(400).end();
				}
			});
		}
	}

	db.query('DELETE FROM `certifications` WHERE user_id = ' + user_id, function (error, results, fields) {
		if (!error) {
			//res.status(200).send("Record has been deleted!");
		} else {
			res.status(400).end();
		}
	});

	if (certifications.length != 0) {
		for (var l = 0; l < certifications.length; l++) {
			var postDataCertifications = {
				user_id: user_id,
				tag: certifications[l].tag
			};

			db.query('INSERT INTO certifications SET ?', postDataCertifications, function (error, results, fields) {
				if (!error) {
					//res.status(200).json(results);
					finalResult.certifications = results;
				} else {
					res.status(400).end();
				}
			});
		}
	}

	db.query('DELETE FROM `peace_of_mind` WHERE `user_id`=?', [user_id], function (error, results, fields) {
		if (!error) {
			//res.status(200).send("Record has been deleted!");
		} else {
			res.status(400).end();
		}
	});

	var post_Data4 = {
		user_id: user_id,
		criminal_record: req.body.user.cr,
		enhanced_criminal_record: req.body.user.ecm,
		red_seal: req.body.user.red_seal,
		first_aid: req.body.user.first_aid,
		insurance: req.body.user.insurance
	};

	db.query('INSERT INTO peace_of_mind SET ?', post_Data4, function (error, results, fields) {
		if (!error) {
			//res.status(200).json(results);
			finalResult.peace_of_mind = results;
		} else {
			res.status(400).end();
		}
	});

	db.query('DELETE FROM `transportation` WHERE `user_id`=?', [user_id], function (error, results, fields) {
		if (!error) {
			//res.status(200).send("Record has been deleted!");
		} else {
			res.status(400).end();
		}
	});

	var post_Data5 = {
		user_id: user_id,
		bicycle: req.body.user.bicycle,
		public: req.body.user.public,
		car: req.body.user.car,
		truck: req.body.user.truck,
	};

	db.query('INSERT INTO transportation SET ?', post_Data5, function (error, results, fields) {
		if (!error) {
			//res.status(200).json(results);
			finalResult.transportation = results;
		} else {
			res.status(400).end();
		}
	});
	res.status(200).json(finalResult);
});

router.post("/profile/save/photo", function (req, res) {
	var user_id = req.decoded.id;
	db.query('UPDATE users SET user_image = ? where id = ? ', [req.body.imageUrl, user_id], function (err, results, fields) {
		if (err) {
			res.status(400).end();
		}
		db.query('SELECT id, user_image from users WHERE id = ?', user_id, function (err, results, fields) {
			if (!err) {
				res.status(200).send({
					imageUrl: results[0].user_image
				});
			} else {
				res.status(400).end();
			}
		});

	});
});

router.get('/user/current/location', function (req, res) {
	var user_id = req.decoded.id;
	if (user_id) {
		db.query('SELECT streetaddress, location from users WHERE id = ?', user_id, function (err, results, fields) {
			if (!err) {
				res.status(200).send(results[0]);
			} else {
				res.status(400).end();
			}
		});
	} else {
		res.status(400).end();
	}
});

router.get('/user/current/track_tasks', function (req, res) {
	var user_id = req.decoded.id;
	if (user_id) {
		db.query('SELECT track_tasks from users WHERE id = ?', user_id, function (err, results, fields) {
			if (!err) {
				res.status(200).send(results[0].track_tasks);
			} else {
				res.status(400).end();
			}
		});
	} else {
		res.status(400).end();
	}
});

router.get('/user/current/skills', function (req, res) {
	var user_id = req.decoded.id;
	if (user_id) {
		db.query('SELECT * from skills WHERE user_id = ?', user_id, function (err, results, fields) {
			console.log(err)
			if (!err) {
				res.status(200).send(results);
			} else {
				res.status(400).end(err);
			}
		});
	} else {
		res.status(400).end();
	}
});

router.post('/user/submitTags', function (req, res) {
	var user_id = req.decoded.id;
	var tags = req.body;
	if (user_id) {
		var model = [];
		_.forEach(tags, function (tag) {
			model.push([tag, user_id, new Date()]);
		});
		db.query('INSERT INTO skills (tag, user_id, date) VALUES ?', [model], function (err, results, fields) {
			if (!err) {
				res.status(200).send(results);
			} else {
				res.status(400).end();
			}
		});
	} else {
		res.status(400).end();
	}
});
module.exports = router;