(function () {
    'use strict';
    var app = angular.module('taskoli');
    app.controller('RejectTaskController', RejectTaskController);
    RejectTaskController.$inject = ['$scope', 'taskdata', 'MyTasksService', '$uibModalInstance', '$mdToast', 'SocketService'];

    function RejectTaskController($scope, taskdata, MyTasksService, $uibModalInstance, $mdToast, SocketService) {
        $scope.taskdata = taskdata;
        $scope.reject_task = function (rejectData) {
            //$scope.post_data = tasks;
            MyTasksService.RejectTask(rejectData.task_id, rejectData.owner, rejectData.chat_text).then(function (res) {
                SocketService.emit('notification:added', rejectData.owner);
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('Task Rejected And Marked as not Completed')
                    .position('top right')
                    .hideDelay(3000)
                );
                $uibModalInstance.dismiss('cancel');
            }, function (err) {
                console.error(err.statusText + ' at ' + err.config.url);
            });
        };
    }
})();