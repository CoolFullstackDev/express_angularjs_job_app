var passport = require('passport'),
config = require('./config'),
GoogleStrategy = require('passport-google-oauth20').Strategy,
db = require('../../config/db'),
moment = require('moment'),
_ = require('lodash');

function extractProfile (profile) {
    let imageUrl = '';
    if (profile.photos && profile.photos.length) {
      imageUrl = profile.photos[0].value;
    }
    return {
        email: profile.emails[0].value,
        name: profile.name.givenName,
        lname: profile.name.familyName,
        password: _(15).range().map(_.partial(_.random, 33, 126, false)).map(function(char){return String.fromCharCode(char);}).join(''),
        user_image: imageUrl,
        is_varified: 0,
        ip_baned: 0,
        fb_baned: 0,
        cash_active: 1,
        membership: 0,
        date: moment(new Date()).format('YYYY-MM-DD')
    };
  }

  passport.use(new GoogleStrategy(config.googleAuth,
     function(accessToken, refreshToken, profile, done) {
      var user = extractProfile(profile);
      // Extract the minimal profile information we need from the profile object
      db.query('SELECT * from users where email = ?', profile.emails[0].value, function (err, results) {
        if(err) done(err);
        if(results.length > 0) { 
          results[0].isNew = "";
          console.log('User exists, Logging in');
          done(null, results[0]);
        }
        else {
          console.log('Registering new user');
              db.query('INSERT into users SET ?', user, function(err, result) {
                console.log(err)
                if(err) done(err);
                  user.id = result.insertId;
                  user.isNew = "true";
                  console.log('New User registered');
                  done(null, user);
              });
          }
    });
  }));
  module.exports = passport