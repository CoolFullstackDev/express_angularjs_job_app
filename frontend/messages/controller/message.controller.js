(function () {
    'use strict';
    var app = angular.module('taskoli');
    app.controller('MessageController', MessageController);

    MessageController.$inject = ['$scope', 'MessagesService','MessageData', 'siteURL', 'apiURL', 'userData', '$state', '$mdToast','$timeout', 'SocketService'];

    function MessageController($scope, MessagesService, MessageData, siteURL, apiURL, userData, $state, $mdToast, $timeout, SocketService) {
        
        $scope.msg = {};
        $scope.task_info = MessageData.task_info;
        $scope.chat_conversation = MessageData.chat_conversation;
        $scope.userData = userData;
        $scope.user_id = userData ? userData.id : 0;
        $scope.typing = false;
        
        $scope.message = function(msg) {
            MessagesService.message(msg).then(function (res) {
                $scope.msg.message = '';
                $scope.chat_conversation = [];
                // event to send message or add in list
                SocketService.emit('message:send',$scope.user_id, msg);
                
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('Your Message Sent')
                    .position('top right')
                    .hideDelay(3000)
                );
            }, function (err) {
                console.error(err.statusText + ' at ' + err.config.url);
            });
        };
        // join the chat room
        SocketService.emit('message:join', $scope.task_info);      
        // on joining room capture
        SocketService.on($scope.task_info.id, function(msg) {
            console.log('someone joined');
        });  
        SocketService.on('message:received', function(id, msg) {
            console.log('message received from', id);
            //get new list back
            MessagesService.chat_conversation(msg.task_id).then(function (res) {
                $scope.chat_conversation = res.data['task_chat'];
            
            });
        });

        SocketService.on('message:typing-capture', function(task) {
            $scope.typing = true;
            $timeout(function(){
                $scope.typing = false;
            }, 2500);
        });
        $scope.$watch('msg.message', function(newVal, oldVal) {
            if(newVal != oldVal) {
                SocketService.emit("message:typing", $scope.task_info);
            }
        });

        $timeout(function() {
            var scroller = document.getElementById("story-body");
            scroller.scrollTop = scroller.scrollHeight;
          }, 1000, false);
    } // END of MessageController //

})();