'use strict';
var users = new Map();
var db = require('../config/db');
var createAlerts = require('../alerts/service');
var setAlertsTask = require('./notify');

module.exports = function (io) {
  'use strict';
  // private user based events
  io.sockets.on('connect', function (socket) {
    socket.on("user:added", function (userData) {
      var user = {
        id: userData ? userData.id : -1,
        socket_id: socket.id
      };
      // connected user info
      console.log('New User connected: ', socket.id, ' ID: ', userData.id || 'Non registered');
      if (user.id != -1) {
        users.set(user.id, user.socket_id);
      }
      console.log('Total Users: ', users.size);
    });

    socket.on('message:join', function (task) {
      console.log("User joined the room: ", task.id);
      socket.join('messages:' + task.id);
      io.in("messages:" + task.id).emit("user:online");
    });

    socket.on('Task:Added', function (task) {
      // TODO: send tag notificaitons
      console.log("New Task Added: ", task.id);
      io.emit('Task:Added', task);
      createAlerts(task);
    });

    socket.on('message:send', function (id, msg) {
      console.log("new message sent, emitting a receiver");
      io.in("messages:" + msg.task_id).emit('message:received', id, msg);
    });

    socket.on('message:typing', function (task) {
      io.in("messages:" + task.id).emit('message:typing-capture', task)
    });

    socket.on('notification:added', function (userID) {
      if (users.get(userID)) {
        io.sockets.connected[users.get(userID)].emit('notification:show');
      }
    });
    socket.on('disconnect', function () {
      users.forEach(function (userStored, userid) {
        if (socket.id === userStored) {
          users.delete(userid);
          db.query('UPDATE `users` SET last_active_time = ? where `id`=?', [new Date(), userid], function (error, results, fields) {
            if (!error) {
              console.log('User Disconnected: ', socket.id, ' | ID: ', userid, ' @ ', new Date());
            }
          });
        }
      });
      console.log('Total Users: ', users.size);
    });
  });

  setAlertsTask(io, users);
};