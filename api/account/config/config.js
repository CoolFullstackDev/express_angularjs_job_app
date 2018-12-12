var config = require('../../config/config');

module.exports = {
    'facebookAuth': {
        'clientID': '1498820906816411',
        'clientSecret': 'd8c490f90ca65ba171f2bc01cd2bd0a6',
        'callbackURL': config.url + "/account/login/facebook/callback",
        'profileFields': ['id', 'email', 'name', 'picture.type(large) ']
    },
    'googleAuth' : {
        'clientID'      : '186957217000-fcg7ibvf90varka6cd25h7t8mfb8nbi2.apps.googleusercontent.com',
        'clientSecret'  : '1I1usDi_Zh-pE8b0rK1L-y1u',
        'callbackURL'   : config.url + '/account/login/auth/google/callback',
        'accessType'    : 'offline'
    }
};