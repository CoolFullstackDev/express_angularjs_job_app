(function () {
    'use strict';
    var app = angular.module('taskoli');
    app.controller('SingleMessageController', SingleMessageController);

    SingleMessageController.$inject = ['$scope', 'MessagesService', 'siteURL', 'apiURL', 'userData', '$state', '$mdToast','$timeout', 'SocketService', '$uibModalInstance', 'sendUserData'];

    function SingleMessageController($scope, MessagesService, siteURL, apiURL, userData, $state, $mdToast, $timeout, SocketService, $uibModalInstance, sendUserData) {
        
        $scope.userData = userData;
        $scope.current_user_id = userData ? userData.id : 0;
        $scope.sendUserId = sendUserData;
        $scope.message = function(msg) {
            MessagesService.message(msg).then(function (res) {
                // event to send message or add in list
                SocketService.emit('message:send', sendUserData, msg);
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('Your Message Sent')
                    .position('bottom center')
                    .hideDelay(3000)
                );
                $uibModalInstance.dismiss();
            }, function (err) {
                console.error(err.statusText + ' at ' + err.config.url);
            });
        };
        
        SocketService.on('message:receieved', function(id, msg) {
            console.log('message received from', id);
        });
    } // END of MessageController //

})();