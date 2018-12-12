var express = require('express');
var router = express.Router();
var passportFB = require('../config/facebook');
var passport = require('passport');
var passportGoogle = require('../config/google');
var db = require('../../config/db');
var jwt = require('jsonwebtoken');
var secret = 'taskoli_app';
var usersSocket = require('socket.io.users').Users;
var token;

passport.serializeUser(function(user, done){
  token = jwt.sign({id: user.id, name: user.name, email: user.email, photo: user.user_image}, secret, {expiresIn: '72h'});
  done(null, user);
});

passport.deserializeUser(function(user, done){
  db.query('SELECT * from users where id = ?', user[0].id, function (err, results, fields) {
   done(err, results);
  });
});

// Facbook authentication
router.get('/facebook', 
passportFB.authenticate('facebook', {scope: 'email'}));

router.get('/facebook/callback',
passportFB.authenticate('facebook', { failureRedirect: '/login/error' }),
 function(req, res) {
    res.redirect('/login/?token=' + token + '&isNew=' + req.user.isNew);
});

// Google authentication
router.get('/google', 
passportGoogle.authenticate('google', { scope: ['email', 'profile']}));

router.get('/auth/google/callback',
passportGoogle.authenticate('google', { failureRedirect: '/login/error' }),
function(req, res) {
   res.redirect('/login/?token=' + token + '&isNew=' + req.user.isNew);
});

module.exports = router;