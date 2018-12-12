var express = require('express');
var router = express.Router();

//todo /auth/me/
router.post('/me', function(req, res, next) {
    res.send(req.decoded);
});
module.exports = router;