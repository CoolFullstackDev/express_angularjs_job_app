var mailSDK = require('./service');
var db = require('../config/db');
var express = require('express');
var router = express.Router();

router.post('/send/:receiver_user', function (req, res) {
    if (req.query.length > 0) {
        var result = mailSDK.sendMail(req.params.receiver_user, req.query.owner_user, req.query.text, req.query.type, req.query.taskid);
        res.status(200).send(result);
    }
    res.status(400).end();
});

module.exports = router;