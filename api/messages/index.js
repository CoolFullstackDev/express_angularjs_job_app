var db = require('../config/db');
var express = require('express');
var async = require('async');
var router = express.Router();
var notificationService = require('../notifications/service');

//var app = express();
var table_name = 'users';

var user_column = "u.id as user_id ,u.name, u.lname, u.email, u.user_description, u.user_image, u.cover_image, u.avg_rate, u.track_tasks, u.cash_active, u.stripe_active, u.paypal_active";

router.get('/new-messages-by-user', function (req, res) {
	var user_id = req.decoded ? req.decoded.id : 0;
    db.query("SELECT p.*, " + user_column + "  FROM private_chat p inner join users u on u.id = p.from_id where p.to_id = ? AND p.id in (select MAX(id) from private_chat group by from_id) group by u.id", [user_id], function(err, results, fields) {
        if(err)
            res.status(400).end("Error: " + err);
        res.status(200).send(results);
    });
});

router.get('/chat_list', function (req, res) {
	//var userid = req.body.user_id;
	var user_id = req.decoded ? req.decoded.id : 0;
	var s = req.query.s;
	var s_query = '';

	if (s != '') {
		s_query = ' AND (task_post.task_title LIKE "%' + s + '%" OR task_post.task_description LIKE "%' + s + '%" OR users.name LIKE "%' + s + '%" ) AND task_post.status = 0';
	}

	//var user_id = parseInt(req.params.id);
	//db.query('SELECT * from users JOIN chat ON users.id = chat.from_id WHERE users.id = ' + user_id, function(err, results, fields) {
	db.query('SELECT *, '+ user_column +' from current_tasks JOIN task_post ON current_tasks.task_id = task_post.id JOIN users u ON current_tasks.awarded_by = user_id JOIN private_chat ON current_tasks.task_id = private_chat.task_id WHERE task_post.status != 1 AND(current_tasks.awarded_by = ' + user_id +' OR current_tasks.awarded_to = ' + user_id + ')' + s_query + ' GROUP BY current_tasks.task_id ORDER BY private_chat.seen ASC, private_chat.id DESC', function(err, results, fields) {
		if (!err){
			res.status(200).json(results);
		}
		else{
			res.status(400).end();
		} 
	}); 
	
});

router.get('/chat_conversation/:id', function (req, res) {
	//var userid = req.body.user_id;
	var task_id = parseInt(req.params.id);
	var finalResult = {
		task_info: [],
		task_chat: []
	};

	db.query('SELECT * from task_post WHERE id = ' + task_id, function (err, results, fields) {
		if (!err) {
			finalResult.task_info = (results);
		} else {
			res.status(400).end();
		}
	});

	db.query('SELECT private_chat.*,users.name,current_tasks.awarded_to,current_tasks.awarded_by, users.user_image from private_chat JOIN users ON private_chat.from_id = users.id JOIN current_tasks ON private_chat.task_id = current_tasks.task_id WHERE private_chat.task_id = ' + task_id + ' ORDER BY private_chat.id ASC', function(err, results, fields) {
		if (!err){
			finalResult.task_chat = (results);
		}
		else{
			res.status(400).end();
		} 
		res.status(200).json(finalResult);
	}); 
	
});

router.post('/new_message', function (req, res, next) {
	var msgData = {
		from_id: req.decoded.id,
		to_id: req.body.to_id,
		task_id: req.body.task_id,
		message: req.body.message,
		seen: 0
	};
	db.query('INSERT INTO private_chat SET ?', msgData, function (error, results, fields) {
		if (!error) {
			res.status(200).json(results);
		} else {
			res.status(400).end();
		}
	});
});

router.put('/message/seen/:id', function(req, res) {
	var msgID = req.params.id;
	db.query("UPDATE private_chat SET seen = 1 where id = ?", [msgID], function (err, results, fields) {
        if (err)
            res.status(400).end("Error", err);
        res.status(200).send(results);
    });
});



module.exports = router;