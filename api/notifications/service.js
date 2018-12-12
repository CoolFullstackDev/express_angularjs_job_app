var db = require('../config/db');
var async = require('async');
var mailSDK = require('../mail/service');
var model = {
    taskid: null,
    text: null,
    type: null,
    owner_user: null,
    receiver_user: null
};

var addOne = function (data) {
    model = {
        taskid: data.taskid,
        text: data.text,
        type: data.type,
        owner_user: data.owner_user,
        receiver_user: data.receiver_user
    }
    db.query("INSERT INTO notifications SET ? ", model, function (err, results, fields) {
        console.log("Notification added");
        // add event for notification to the user
        if (err)
            return err;
        mailSDK.sendMail(data.receiver_user, data.owner_user, data.text, data.type, data.taskid);
        return results;
    });
}

var getAll = function () {
    db.query("SELECT * FROM notifications", function (err, results, fields) {
        if (err)
            return er;;
        return results;
    });
}

var getUnseenCountsByUser = function (user_id, res) {
    db.query("SELECT count(id) as unseen FROM notifications where receiver_user = ? AND seen = 0", [user_id], function (err, results, fields) {
        if (err)
            res.status(400).end("Error", err);
        res.status(200).send(results);
    });
}

var getUnseenMessagesByUser = function (user_id, res) {
    db.query("SELECT count(id) as unseen FROM private_chat where to_id = ? AND seen = 0", [user_id], function (err, results, fields) {
        if (err)
            res.status(400).end("Error", err);
        res.status(200).send(results);
    });
}

var getAllByUser = function (user_id, limit, res) {
    var data = [];
    db.query("SELECT * FROM notifications where receiver_user = ? ORDER BY seen ASC, id DESC LIMIT ?", [user_id, limit], function (err, rows, fields) {
        if (err)
            res.status(400).end(err);
        async.eachSeries(rows, function (row, callback) {
            var returnModel = {
                detail: null,
                owner: null,
                receiver: null,
                task: null
            };
            returnModel.detail = row;
            async.series({
                owner: function (callback) {
                    db.query("SELECT name, lname, user_image FROM users where id = ?", row.owner_user || row.receiver_user, function (err, results, fields) {
                        if (err)
                            res.status(400).end(err);
                        callback(null, results);
                    });
                },
                receiver: function (callback) {
                    db.query("SELECT name, lname, user_image FROM users where id = ?", row.receiver_user || row.receiver_user, function (err, results, fields) {
                        if (err)
                            res.status(400).end(err);
                        callback(null, results);
                    });
                },
                task: function (callback) {
                    db.query("SELECT id, task_title, task_budget  FROM task_post where id = ?", row.taskid, function (err, results, fields) {
                        if (err)
                            res.status(400).end(err);
                        callback(null, results);
                    });
                }
            }, function (err, results) {
                returnModel.owner = results.owner;
                returnModel.receiver = results.receiver;
                returnModel.task = results.task;
                data.push(returnModel);
                callback();
            });
        }, function (err, result) {
           res.status(200).send(data);
        });
    });
}
var updateToSeen = function (msgID, res) {
    db.query("UPDATE notifications SET seen = 1 where id = ?", [msgID], function (err, results, fields) {
        if (err)
            res.status(400).end("Error", err);
        res.status(200).send(results);
    });
}

var service = {
    addOne: addOne,
    getAll: getAll,
    getAllByUser: getAllByUser,
    getModel: model,
    getUnseenCountsByUser: getUnseenCountsByUser,
    getUnseenMessagesByUser: getUnseenMessagesByUser,
    updateToSeen: updateToSeen
};



module.exports = service;