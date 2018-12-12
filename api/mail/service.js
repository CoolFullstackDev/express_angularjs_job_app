var config = require('../config/config');
var db = require('../config/db');
var mailgun = require('mailgun.js');
var fs = require('fs');
var path = require('path');
var os = require("os");
var String = require('string');

var mailClient = mailgun.client({
    username: config.mailgun.username,
    key: process.env.MAILGUN_API_KEY || config.mailgun.key
});

function sendMail(mailModel) {
    mailClient.messages.create(config.mailgun.domain, mailModel)
        .then(function (msg) {
            console.log("Message Sent: " + text, "ID: " + msg.id, "TO: " + results[0].email)
            return msg;
        }) // logs response data
        .catch(function (err) {
            console.log(err);
            return err;
        }); // logs error
}
var sendMail = function (receiver_user, owner_user, text, type, taskid) {
    db.query('SELECT * FROM users JOIN task_post WHERE users.id = ? AND task_post.id = ?', [receiver_user, taskid], function (err, results, fields) {
        if (!err) {
            var mailModel = {
                from: config.mailgun.sendFrom + ' <' + config.mailgun.sendFromEmail + '>',
                to: results[0].email,
                subject: type + ' on ' + results[0].task_title
            };

            if (type == 'payment') {
                fs.readFile(path.join(__dirname, 'templates/receipt.html'), 'utf8', function (err, html) {
                    html = String(html).replaceAll('[logo-url]', os.hostname() + 'content/img/taskoly-logo.png').s;
                    html = String(html).replaceAll('[amount-paid]', String(text).humanize().s).s;
                    html = String(html).replaceAll('[task-title]', results[0].task_title).s;
                    mailModel.html = html;
                    sendMail(mailModel);
                });
                
            } else {
                fs.readFile(path.join(__dirname, 'templates/notification.html'), 'utf8', function (err, html) {
                    html = String(html).replaceAll('[logo-url]', os.hostname() + 'content/img/taskoly-logo.png').s;
                    html = String(html).replaceAll('[notification-text]', String(text).humanize().s).s;
                    html = String(html).replaceAll('[title]', results[0].task_title).s;
                    html = String(html).replaceAll('[mail]', mailModel.to).s;
                    html = String(html).replaceAll('[task-id]', results[0].id).s;
                    mailModel.html = html;
                    sendMail(mailModel);
                });
            }

            function sendMail(mailModel) {
                mailClient.messages.create(config.mailgun.domain, mailModel)
                    .then(function (msg) {
                        console.log("Message Sent: " + text, "ID: " + msg.id, "TO: " + results[0].email)
                        return msg;
                    }) // logs response data
                    .catch(function (err) {
                        console.log(err);
                        return err;
                    }); // logs error
            }
        }
    });
}

var service = {
    sendMail: sendMail
};

module.exports = service;