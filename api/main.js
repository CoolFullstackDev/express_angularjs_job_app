var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var bodyParser = require('body-parser');
var secret = 'taskoli_app';

router.use(function (req, res, next) {
    var token = req.body.token || req.body.query || req.headers['x-access-token'];
    if (token) {
        //verify token
        jwt.verify(token, secret, function (err, decoded) {
            if (err) {
                res.status(401).send({
                    success: false,
                    message: 'Invalid Token'
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        //res.json({success: false, message: 'No Token Found'});
        next();
    }
});

//start body-parser configuration
router.use(bodyParser.json()); // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));

var tasks = require('./tasks/index');
router.use('/', tasks);

var users = require('./users/index');
router.use('/', users);

var messages = require('./messages/index');
router.use('/', messages);

var upload = require('./uploader/index');
router.use('/', upload);

var account = require('./account/index');
router.use('/account', account);

var categories = require('./categories/index');
router.use('/categories', categories);

var notifications = require('./notifications/index');
router.use('/notifications', notifications);

var mail = require('./mail/index');
router.use('/mail', mail);

var alerts = require('./alerts/index');
router.use('/alerts', alerts);

var service = require('./service/index');
router.use('/service', service);

module.exports = router;