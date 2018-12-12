'use strict';
var cron = require('node-schedule');
var db = require('../config/db');
var moment = require('moment');
var keyword_extractor = require("keyword-extractor");
var _ = require('lodash');

module.exports = function (task) {
    db.query('SELECT u.id, s.tag from users u inner join skills s on u.id = s.user_id', function (err, res, fields) {
        var keywords = extractKeyword(task.task_title, task.task_description, _.map(task.tags, function (tag) {
            return tag.tag;
        }));
        var users = new Set();
        _.forEach(res, function (row) {
            if (_.includes(keywords, row.tag)) {
                users.add(row.id);
            }
        });
        var model = {
            task_id: task.id,
            created_time: new Date(),
            keywords: keywords,
            is_active: 1,
            user_id: task.user_id,
            user_ids_notify: Array.from(users).join(',')
        };
        db.query('INSERT INTO alerts SET ?', model, function (err, res, fields) {
            if (!err) {
                console.log('Added alerts for ' + keywords);
            } else {
                console.log(err);
            }
        });
    });

    function extractKeyword(title, desc, tags) {
        var matchedKeywords = keyword_extractor.extract(title + " " + desc + tags.join(" "));
        return matchedKeywords.join(',');
    }
}