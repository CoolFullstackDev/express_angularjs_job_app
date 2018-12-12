(function () {
    'use strict';
    var app = angular.module('taskoli');
    app.controller('MyTasksTaskerController', MyTasksTaskerController);

    MyTasksTaskerController.$inject = ['$state', '$scope', '$sce', '$mdToast', 'Upload', '$uibModal', '$uibModalInstance', '$filter', 'MyTasksService', 'siteURL', 'apiURL', 'userData', 'user_id', '$timeout', 'NgMap', '$http', '$window', 'moment', 'googleMapKey', 'SocketService'];

    function MyTasksTaskerController($state, $scope, $sce, $mdToast, Upload, $uibModal, $uibModalInstance, $filter, MyTasksService, siteURL, apiURL, userData, user_id, $timeout, NgMap, $http, $window, moment, googleMapKey, SocketService) {

        var timer = 200;
        if (user_id != "") {
            var current_user_id = user_id;
        } else {
            var current_user_id = userData.id;
        }
        $scope.current_user_id = current_user_id;
        $scope.user_id = userData.id;

        $scope.tasker_search = {
            detailed_search: '',
            task_status: 'offer',
            task_sort: 'dated'
        };

        // Star Rating title
        $scope.ratingTitle = ['One', 'Two', 'Three', 'Four', 'Five'];
        // Get Current Location.
        var vm = this;
        $scope.message = 'You can not hide. :)';

        $scope.callbackFunc = function (param) {
            console.log('I know where ' + param + ' are. ' + message);
            console.log('You are at' + $scope.map.getCenter());
            $scope.location_address = $scope.place.formatted_address;
            $scope.data = {
                lat: $scope.place.geometry.location.lat(),
                lng: $scope.place.geometry.location.lng()
            };

        };
        // End ::::::::::

        // Toggle Map on My Task popup
        $scope.toggle = false;
        $scope.toggleMap = function () {
            NgMap.getMap().then(function (map) {
                $scope.map = google.maps.event.trigger(map, "resize");
            });
        };


        $scope.accept_offer = function (task_id, userid, bid_id) {
            //console.log(HireData);
            MyTasksService.Accept_Offer(task_id, userid, bid_id).then(function (res) {
                SocketService.emit('notification:added', userid);
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('Offer Accepted. You have been Award this task. ')
                    .position('top right')
                    .hideDelay(3000)
                );
                $state.reload();
            }, function (err) {
                console.error(err.statusText + ' at ' + err.config.url);
            });
        };

        $scope.reject_offer = function (task_id, current_bid, userid) {
            //console.log(HireData);
            MyTasksService.Reject_Offer(task_id, current_bid, userid).then(function (res) {
                SocketService.emit('notification:added', userid);
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('Offer Rejected, You have been Cancelled this offer.')
                    .position('top right')
                    .hideDelay(3000)
                );
                $state.go('.', {
                    reload: true
                });
            }, function (err) {
                console.error(err.statusText + ' at ' + err.config.url);
            });
        };


        $scope.directiontoggle = true;
        $scope.directionToggle = function () {
            $scope.directiontoggle = $scope.directiontoggle === false ? true : false;
        };

        $scope.CurrentDate = new Date();
        $scope.site_url = siteURL;


        $scope.task_search_bar = function (task_status, $type_data) {
            $timeout.cancel(timer);
            $scope.show = false;
            $scope.page = 0;
            if ($type_data != "") {
                var task_sort = $type_data.task_sort;
                var detailed_search = $type_data.detailed_search;
            } else {
                var task_sort = 'dated';
                var detailed_search = '';
            }
            //timer = $timeout(function () {
            MyTasksService.getUserTasks(
                current_user_id,
                detailed_search,
                task_status,
                task_sort,
                'tasker').then(function (res) {
                $scope.taskerTasks = [];
                $scope.taskerTasks = _.concat($scope.taskerTasks, res.data['task_as_tasker']);
                //$scope.taskerTasks = res.data['task_as_tasker'];
            }, function (err) {
                console.error(err.statusText + ' at ' + err.config.url);
            });
        };


        $scope.get_task_data = function (task_type, taskid, lat, lng) {

            NgMap.getMap().then(function (map) {
                //console.log("getMap on task post");
                $scope.map = map;
                $scope.map = google.maps.event.trigger(map, "resize");
            });
            if (task_type == "employer") {
                $scope.person_type = "Pay";
                $scope.fnt_type = task_type;
            } else {
                $scope.person_type = "Complete";
                $scope.fnt_type = task_type;
            }

            $scope.renderHtml = function (htmlCode) {
                return $sce.trustAsHtml(htmlCode);
            };

            MyTasksService.getTaskByID(taskid).then(function (res) {
                $scope.selected = taskid;
                var task_data = res.data['task'];
                var task_rate = task_data.avg_rate;
                $scope.current_user_id = current_user_id;
                $scope.taskdata = res.data['task'];
                $scope.taskinfo = res.data['task_info'];
                $scope.bids = res.data['bids'];
                $scope.current_bid = _.filter(res.data['bids'], function (bid) {
                    return bid.user_id == res.data['task_info'][0].awarded_to && bid.bid_status == 1;
                });

                if ($scope.taskinfo != "") {
                    $scope.awarded_to = $scope.taskinfo[0].awarded_to;
                } else {
                    $scope.awarded_to = "";
                }

                $scope.rate_width = task_rate * 20;

                //Send lat and lng for MAP Direction on My task Popup
                $scope.mapdata = {
                    lat: lat,
                    lng: lng
                };

            }, function (err) {
                console.error(err.statusText + ' at ' + err.config.url);
            });

            MyTasksService.GetNotificationData(taskid, $scope.awarded_to, '2').then(function (res) {
                $scope.NotificationData = res.data;
            });

            MyTasksService.checkPaymentData(task_type, taskid, current_user_id).then(function (res) {
                $scope.PaymentData = res.data;
                if ($scope.PaymentData != "") {
                    $scope.payment_type = $scope.PaymentData[0].payment_type;
                } else {
                    $scope.payment_type = "";
                }
            });
        }

        //for sending message from mytasks mdoal
        $scope.sendMessage = function (userid, size, parentSelector) {
            // append to body on click
            var parentElem = parentSelector ? angular.element($document[0].querySelector('.global-modal ' + parentSelector)) : undefined;

            var messageModal = $uibModal.open({
                animation: false,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'frontend/messages/view/send_message.html',
                controller: 'SingleMessageController',
                windowClass: 'sendMessage',
                scope: $scope,
                size: size,
                appendTo: parentElem,
                resolve: {
                    'userData': ['AccountService', function (AccountService) {
                        if (AccountService.isLoggedIn()) {
                            return AccountService.getSession().then(function (res) {
                                var user = res.data;
                                user.isLoggedin = true;
                                return user;
                            });
                        }
                    }]
                }
            });

            messageModal.result.then(function () {
                    console.log('on close event, use if required');
                },
                function () {
                    console.info('Modal dismissed at: ' + new Date());
            });
        };



        //Task completed as a tasker MODEL
        $scope.task_completed_as_tasker = function (task, type, size, owner) {
            // append to body on click
            if (type == 'complete') {
                MyTasksService.Complete_As_Tasker(task, owner).then(function (res) {
				SocketService.emit('notification:added', owner);
                    $mdToast.show(
                        $mdToast.simple()
                        .textContent('Task Completed. ')
                        .position('top right')
                        .hideDelay(3000));
                    $state.reload();
                }, function (err) {
                    console.error(err.statusText + ' at ' + err.config.url);
                });
            }

            var messageModal = $uibModal.open({
                animation: false,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: '/frontend/mytask/task_completed/view/task_completed_as_tasker.html',
                controller: 'TaskCompletedController',
                windowClass: 'task_completed',
                scope: $scope,
                size: size,
                resolve: {
                    'userData': function () {
                        return userData;
                    }
                }
            });

            messageModal.result.then(function () {
                    console.log('on close event, use if required');
                    $uibModalInstance.dismiss('state change');
                },
                function () {
                    console.info('Modal dismissed at: ' + new Date());
                    $uibModalInstance.dismiss('state change');
                });
        };

        $scope.$watchCollection('tasker_search', function (newVal, oldVal) {
            $scope.task_search_bar($scope.tasker_search.task_status, $scope.tasker_search);
        });

        $scope.viewProfile = function (id) {
            $uibModalInstance.dismiss('state change');
            $timeout(function () {
                $state.go('profile', id, {
                    reload: true,
                    location: 'replace'
                });
            }, 200);
        }

        // open global Edit task
        $scope.editTask = function (task_id, size, post_status) {
            //console.log(post_status + ' post_status');
            $scope.task_id = task_id;
            $scope.post_status = post_status;
            //$scope.taskPostData.start_date == '';
            if (userData) {
                var mytasksmodal = $uibModal.open({
                    animation: false,
                    ariaLabelledBy: 'modal-title',
                    ariaDescribedBy: 'modal-body',
                    templateUrl: '/frontend/editTask/view/editTask.html',
                    bindToController: true,
                    controller: 'EditTaskController',
                    windowClass: 'post_task',
                    scope: $scope,
                    size: 'lg',
                    resolve: {
                        'userData': function () {
                            return userData;
                        },
                        post_status: function () {
                            return post_status;
                        },
                        task_id: function () {
                            return task_id;
                        },
                        'Categories': ['MainService', function (MainService) {
                            return MainService.getskills().then(function (res) {
                                return res.data;
                            });
                        }]
                    }
                });

                mytasksmodal.result.then(function () {
                    console.log('on close event, use if required');
                }, function () {
                    console.info('Modal dismissed at: ' + new Date());
                });
            } else {
                app.openLogin();
            }
        };
        $scope.viewMessage = function (id) {
            $uibModalInstance.dismiss('state change');
            $timeout(function () {
                $state.go('message', id, {
                    reload: true,
                    location: 'replace'
                });
            }, 200);
        }
    }
})();