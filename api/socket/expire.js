var cron = require('node-schedule');
var db = require('../config/db');
var notificationService = require('../notifications/service');

var currentTime = new Date();
cron.scheduleJob("*/5 * * * *", function () {
    db.query('SELECT user_id, id, task_title FROM task_post  WHERE CAST(start_date AS Datetime) < ? AND status != 1 AND awarded = 0 AND completed = 0', currentTime, function (err, results, fields) {
        console.log('Startin expire job.....', currentTime);
        // Sending notifications
        results.forEach(function (result) {
            var notificationModel = {
                taskid: result.id,
                text: "<b>" + result.task_title + "</b> has EXPIRED...click here to Repost.",
                type: 'expired',
                receiver_user: result.user_id,
                owner_user: 0
            };
            notificationService.addOne(notificationModel);
        });

        // Updating status to expired
        if (!err) {
            if (results.length > 0) {
                db.query('UPDATE task_post SET status = 1 WHERE CAST(start_date AS Datetime) < ? AND status != 1 AND awarded = 0 AND completed = 0', currentTime, function (err, results, fields) {
                    console.log('New Expired jobs Executed: ' + currentTime, ' Expired tasks: ' + results.affectedRows);
                });
            }
        }
    });
});
console.log('Expired Tasks Cron job has been setup');