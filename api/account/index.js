var express = require('express');
var router = express.Router();

var auth = require('./auth/index');
router.use('/auth', auth);

var login = require('./login/index');
router.use('/login', login);

var logout = require('./logout/index');
router.use('/logout', logout);

module.exports = router;