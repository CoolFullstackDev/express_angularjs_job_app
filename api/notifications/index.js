var notificaitonService = require('./service');
var express = require('express');
var router = express.Router();

router.post('/add', function(req, res) {
    notificaitonService.addOne(req.body);
});

router.get('/getAllByUser', function(req, res) {
    var user_id = req.decoded.id || 0;
    notificaitonService.getAllByUser(user_id, 10, res);
});

router.get('/get-counts', function(req, res) {
    var user_id = req.decoded ? req.decoded.id : 0;
    notificaitonService.getUnseenCountsByUser(user_id, res);
});

router.get('/get-message-counts', function(req, res) {
    var user_id = req.decoded ? req.decoded.id : 0;
    notificaitonService.getUnseenMessagesByUser(user_id, res);
});

router.put('/seen/:id', function(req, res) {
    var msgID = req.params.id;
    notificaitonService.updateToSeen(msgID, res);
});

module.exports = router;