(function () {
    'use strict';
    var app = angular.module('taskoli');
    app.controller('TaskCompletedController', TaskCompletedController);

    TaskCompletedController.$inject = ['$scope', '$mdToast', '$uibModal', '$filter', 'TaskCompletedService', 'siteURL', 'apiURL', '$timeout', 'NgMap', 'userData', '$uibModalInstance', '$mdStepper', '$state', 'SocketService'];

    function TaskCompletedController($scope, $mdToast, $uibModal, $filter, TaskCompletedService, siteURL, apiURL, $timeout, NgMap, userData, $uibModalInstance, $mdStepper, $state, SocketService) {
        // TODO: check and fix
        var taskData = $scope.taskdata;
        var current_user_id = userData.id;

        $scope.enterValidation = function () {
            return true;
        };
        $scope.disabledBtn = true;
        $scope.BtnShow = 'show';
        TaskCompletedService.checkPaymentData($scope.itemClicked, $scope.taskdata.id, current_user_id).then(function (res) {
            $scope.NotificationData = res.data;
            console.log($scope.NotificationData.length > 0 && $scope.itemClicked == "employer")
            if ($scope.NotificationData.length > 0 && $scope.itemClicked == "employer") {
                // check if paid already
                $scope.payment_type = $scope.NotificationData[0].payment_type;
                $scope.disabledBtn = false;
                $scope.BtnShow = 'hide';
                $mdStepper('completed').goto(1);
                TaskCompletedService.checkRatingData($scope.itemClicked, $scope.taskdata.id, current_user_id).then(function (res) {
                    $scope.NotificationData = res.data;
                    // already rated
                    if ($scope.NotificationData) {
                        $scope.disabledBtn = true;
                    }
                });
            }
        });
        $scope.status = false;
        $scope.BtnValue = 'Accept & Pay';
        $scope.exitStepOne = function () {
            $scope.status = true;
            $scope.BtnValue = 'Next';
            $scope.BtnShow = 'hide';

            if ($scope.taskdata.check_payment) {
                $scope.disabledBtn = false;
                $scope.status = true;
                $mdStepper('completed').next();        
                return true;
            } else if ($scope.taskdata.paymentModel) {
                TaskCompletedService.AddPaymentData($scope.taskdata).then(function (res) {
                    SocketService.emit('notification:added', $scope.taskdata.tasker_id);
                    $mdToast.show(
                        $mdToast.simple()
                        .textContent('Payment way Successfull Submit')
                        .position('top right')
                        .hideDelay(3000)
                    );
                    $scope.disabledBtn = false;
                    $mdStepper('completed').next();        
                }, function (err) {
                    console.error(err.statusText + ' at ' + err.config.url);
                });
                return true;
            } else {
                console.log("not yet completed step 1");
                return false;
            }
        };

        $scope.closeModal = function () {
            $uibModalInstance.dismiss('cancel');
        }

        $scope.exitStep1 = function () {
            $scope.disabledBtn = false;
            $mdStepper('completed').next();
            return true;
        };


        $scope.DoneTask = function (itemClicked) {
            TaskCompletedService.AddRatingData(itemClicked, taskData).then(function (res) {
                SocketService.emit('notification:added', taskData.user_id);
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('All Done')
                    .position('top right')
                    .hideDelay(3000)
                );
                $uibModalInstance.dismiss('cancel');
            }, function (err) {
                console.error(err.statusText + ' at ' + err.config.url);
                return true;
            });
        };


        $scope.completeTaskAsTasker = function (task_id, user_id) {
            TaskCompletedService.completedTaskAsTasker(task_id, user_id).then(function (res) {
                SocketService.emit('notification:added', user_id);
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('Task Completed Notification Send Successfully')
                    .position('top right')
                    .hideDelay(3000)
                );
                $uibModalInstance.dismiss('cancel');
                $scope.disabledBtn = true;
            }, function (err) {
                console.error(err.statusText + ' at ' + err.config.url);
            });
        };

        $scope.completeTaskAsEmployer = function (TaskData, task_id, user_id) {
            TaskCompletedService.completedTaskAsEmployer(TaskData).then(function (res) {
                SocketService.emit('notification:added', user_id);
            }, function (err) {
                console.error(err.statusText + ' at ' + err.config.url);
            });
        };
        //for sending message from mytasks mdoal
        $scope.rejecttask = function (taskdata, size, parentSelector) {
            // append to body on click
            var messageModal = $uibModal.open({
                animation: false,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: '/frontend/mytask/task_completed/view/reject_task.html',
                controller: 'RejectTaskController',
                windowClass: 'sendMessage',
                scope: $scope,
                size: size,
                resolve: {
                    taskdata: function () {
                        return taskdata;
                    }
                }
            });

            messageModal.result.then(function () {
                console.log('on close event, use if required');
            },
            function () {
                console.info('Modal dismissed at: ' + new Date());
            });
        };
    } // END of TaskCompletedController //
})();