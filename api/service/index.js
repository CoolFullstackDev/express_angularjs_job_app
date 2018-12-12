var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/manifest.json', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.sendFile(path.normalize(__dirname + '/manifest.json'))  
});

module.exports = router;