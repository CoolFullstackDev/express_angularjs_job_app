(function () {
    'use strict';
    var app = angular.module('taskoli');
    app.controller('MessagesController', MessagesController);

    MessagesController.$inject = ['$scope', 'MessagesService', 'siteURL', 'apiURL', 'userData', '$state', '$mdToast','$timeout', 'SocketService'];

    function MessagesController($scope, MessagesService, siteURL, apiURL, userData, $state, $mdToast, $timeout, SocketService) {

        $scope.currentState = $state.current;
        $scope.userData = userData;
        $scope.user_id = userData ? userData.id : 0;
        var timer;

        $scope.search = {
			detailed_search: ''
        };
        
        $scope.$watchCollection('search', function (newVal, oldVal) {
			if(newVal != oldVal) {
                $scope.search_bar();
			}
        });

		$scope.search_bar = function () {
			$timeout.cancel(timer);
			$scope.show = false;
			$scope.busyLoadingData = false;
                
            $scope.chat_list = [];
            MessagesService.chat_list($scope.search.detailed_search).then(function (res) {
                //$scope.tasks = _.concat($scope.tasks, res.data);
                $scope.chat_list = res.data;
                if (res.data.length == 0) {
                    $scope.busyLoadingData = true;
                }
            }, function (err) {
                console.error(err.statusText + ' at ' + err.config.url);
            });
			
		};

        MessagesService.chat_list($scope.search.detailed_search).then(function (res) {
            $scope.chat_list = res.data;
        }, function (err) {
            console.log(err.statusText + ' at ' + err.config.url);
        });


        $scope.message = function(msg) {
            MessagesService.message(msg).then(function (res) {

                // event to send message or add in list
                SocketService.emit('message:send', $scope.user_id, msg);

                $scope.chat_conversation ="";
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('Your Message Sent')
                    .position('bottom center')
                    .hideDelay(3000)
                );
                //get new list back
                MessagesService.chat_conversation(msg.task_id).then(function (res) {
                    $scope.chat_conversation = res.data['task_chat'];
                });
            }, function (err) {
                console.error(err.statusText + ' at ' + err.config.url);
            });
        };
    } // END of MessagesController //

})();