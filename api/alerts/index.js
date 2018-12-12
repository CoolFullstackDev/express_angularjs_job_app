var db = require('../config/db');
var express = require('express');
var router = express.Router();

router.get('/all', function (req, res) {
    var user_id = req.decoded.id || 0;
    db.query('SELECT * FROM alerts a JOIN task_post t ON a.task_id = t.id WHERE a.is_active = ? AND a.user_ids_notify like \'%?%\' ORDER BY a.created_time DESC LIMIT 5', [1, user_id], function (err, rows, fields) {
        if (!err) {
            res.status(200).send(rows);
        }
        res.status(400).end();
    });
});

module.exports = router;