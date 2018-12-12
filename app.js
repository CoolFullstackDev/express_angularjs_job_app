var express = require('express');
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');
var config = require('./api/config/config');
var db = require('./api/config/db');
var cors = require('cors')
var app = express();
var session = require('express-session');
var passport = require('passport');
var http = http.createServer(app); // initial io for http server
var io = require('socket.io')(http);
var profanity = require('profanity-middleware');
var routes = require('./api/main'); //setup api and routes
var compression = require('compression'); // compression
var childProcess = require("child_process");

childProcess.fork('./api/socket/expire'); // cron job setup for expired tasks
require("./api/socket/index")(io); // setup users based sockets

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.all('/*', cors());
app.use(session({
  secret: 'taskoli app',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: true
  }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(profanity.init) // swear and foul words

app.use('/api', routes);
app.use("/service-worker.js", express.static(path.join(__dirname, '/service-worker.js')));

// setup static components
if(process.env.NODE_ENV == 'prod') {
  app.use("/public", express.static(path.join(__dirname, 'public')));
  app.use("/content", express.static(path.join(__dirname, 'public/content')));
  app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
  });
}
else {
  app.use("/content", express.static(path.join(__dirname, 'content')));
  app.use("/frontend", express.static(path.join(__dirname, 'frontend')));
  app.use("/bower_components", express.static(path.join(__dirname, 'bower_components')));
  app.get('*', function (req, res) {
    res.sendFile(__dirname + '/frontend/index.html');
  });
}

http.listen(config.server.port, config.server.host, function () {
  console.log('Taskoli is live now at', config.server.host + ':' + config.server.port);
});

module.exports = app;