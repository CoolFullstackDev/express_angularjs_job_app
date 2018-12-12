var passport = require('passport'),
  config = require('./config'),
  FacebookStrategy = require('passport-facebook').Strategy,
  db = require('../../config/db'),
  moment = require('moment'),
  _ = require('lodash'),
  jwt = require('jsonwebtoken'),
  token;

passport.use(new FacebookStrategy(
  config.facebookAuth,
  function(accessToken, refreshToken, profile, done) {
   db.query('SELECT * from users where email = ?', profile._json.email , function (err, results) {
        if(err) done(err);
        if(results.length > 0){ 
          results[0].isNew = "";
          console.log('User exists, Logging in');
          done(null, results[0]);
        }
        else {
          console.log('Registering new user');
          var user = {
              email: profile._json.email,
              name: profile._json.first_name,
              lname: profile._json.last_name,
              password: _(15).range().map(_.partial(_.random, 33, 126, false)).map(function(char){return String.fromCharCode(char);}).join(''),
              user_image: profile._json.picture.data.url,
              is_varified: 0,
              ip_baned: 0,
              fb_baned: 0,
              cash_active: 1,
              membership: 0,
              date: moment().format('YYYY-MM-DD')
          };

              db.query('INSERT into users SET ?', user, function(err, result) {
                if(err) done(err);
                  user.id = result.insertId;
                  user.isNew = "true";
                  console.log('New User registered');
                  done(null, user);
              });
        }
    });
  }
));
module.exports = passport;