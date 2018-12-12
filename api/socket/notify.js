'use strict';
var cron = require('node-schedule');
var db = require('../config/db');
var _ = require('lodash');

module.exports = function scheduleJob(io, users) {
    var currentTime = new Date();
    cron.scheduleJob("*/1 * * * *", function () {
        console.log('Startin alert job.....', users);
        db.query('SELECT * FROM alerts WHERE is_active = ?', 1, function (err, res, fields) {
            _.forEach(res, function (row) {
                var notification_sent_ids = _.compact(row.notification_sent_ids.split(',').sort());
                var user_ids_notify = _.compact(row.user_ids_notify.split(',').sort());
                if (!_.isEqual(notification_sent_ids, user_ids_notify)) {
                    if (row.user_ids_notify) {
                        var usersToNotify = _.compact(row.user_ids_notify.split(','));
                        _.forEach(usersToNotify, function (user) {
                            var ifUserAlreadyExist = _.find(notification_sent_ids, user);
                            var socketID = users.get(parseInt(user));
                            if (socketID && !ifUserAlreadyExist) {
                                io.sockets.connected[socketID].emit('task:show', row);
                                notification_sent_ids.push(user);
                                db.query('UPDATE alerts SET notification_sent_ids = ? WHERE id = ?', [notification_sent_ids.join(','), row.id], function (err, res, fields) {
                                    console.log('Notification sent updated for: ', user);
                                });
                            }
                        });
                    }
                }
            });
        });
    });
    console.log('Notification service has been setup')
}