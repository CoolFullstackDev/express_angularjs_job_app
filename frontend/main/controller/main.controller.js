(function () {
    'use strict';
    var app = angular.module('taskoli');
    app.controller('MainController', MainController);

    MainController.$inject = ["$rootScope", '$scope', '$interval', 'Upload', '$uibModal', '$uibModalStack', '$state', '$timeout', '$mdToast', 'siteURL', 'MainService', 'AccountService', '$mdSidenav', 'userData', 'SocketService', 'PostTaskService'];

    function MainController($rootScope, $scope, $interval, Upload, $uibModal, $uibModalStack, $state, $timeout, $mdToast, siteURL, MainService, AccountService, $mdSidenav, userData, SocketService, PostTaskService) {
        var app = this;
        app.user = userData;

        $scope.current_user_id = userData ? userData.id : 0;

        // Toggle Map on My Task popup
        $scope.toggle = function () {
            $scope.toggle = $scope.toggle === false ? true : false;
        };

        $scope.loadNotification = function () {
            MainService.getNotifications().then(function (res) {
                console.log(res.data)
                $scope.notifications = res.data;
            });
        };

        // menu from right side
        app.toggleRight = function () {
            $mdSidenav('slide-menu').toggle();
        }

        // main logout
        app.logout = function () {
            AccountService.logout();
            $state.go('logout', {}, {
                reload: true
            });
            $timeout(function () {
                $state.go('home');
            }, 2000);
        }

        // open login modal
        app.openLogin = function () {
            var login = MainService.loginModal();
            //console.log('login')
        }

        // open reg modal
        app.openReg = function () {
            var reg = MainService.regModal();
            //console.log('reg')
        }

        // open global mytask
        $scope.my_tasks_as_amployer = function (user_id, itemClicked, size, parentSelector) {
            $uibModalStack.dismissAll();
            var itemClicked = itemClicked;
            $scope.user_id = userData ? userData.id : 0;
            $scope.itemClicked = itemClicked;
            var mytasksmodal = $uibModal.open({
                animation: false,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: '/frontend/mytask/employer/view/employer.html',
                controller: 'MyTasksEmployerController',
                windowClass: 'my_task_popup',
                scope: $scope,
                size: 'lg',
                resolve: {
                    'userData': function () {
                        return userData;
                    },
                    'user_id': function () {
                        return user_id;
                    }
                }
            });

            mytasksmodal.result.then(function (itemClicked) {
                console.log('on close event, use if required');
            }, function () {
                console.info('Modal dismissed at: ' + new Date());
            });
        };

        // open global mytask
        $scope.my_tasks_as_tasker = function (user_id, itemClicked, size, parentSelector) {
            $uibModalStack.dismissAll();
            var itemClicked = itemClicked;
            $scope.user_id = userData ? userData.id : 0;
            $scope.itemClicked = itemClicked;
            var mytasksmodal = $uibModal.open({
                animation: false,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: '/frontend/mytask/tasker/view/tasker.html',
                controller: 'MyTasksTaskerController',
                windowClass: 'my_task_popup',
                scope: $scope,
                size: 'lg',
                resolve: {
                    'userData': function () {
                        return userData;
                    },
                    'user_id': function () {
                        return user_id;
                    }
                }
            });

            mytasksmodal.result.then(function (itemClicked) {
                console.log('on close event, use if required');
            }, function () {
                console.info('Modal dismissed at: ' + new Date());
            });
        };

        // open global post task
        app.postTask = function (task_id, size, parentSelector) {
            //console.log(task_id+ ' <repost task id');
                var mytasksmodal = $uibModal.open({
                    animation: false,
                    ariaLabelledBy: 'modal-title',
                    ariaDescribedBy: 'modal-body',
                    templateUrl: '/frontend/posttask/view/post_task.html',
                    bindToController: true,
                    controller: 'PostTaskController',
                    windowClass: 'post_task',
                    backdrop: 'static',
                    scope: $scope,
                    size: 'lg',
                    resolve: {
                        'userData': function () {
                            return userData;
                        },
                        lat: function () {
                            return $scope.lat;
                        },
                        lng: function () {
                            return $scope.lng;
                        },
                        'Categories': ['MainService', function (MainService) {
                            return MainService.getskills().then(function (res) {
                                return res.data;
                            });
                        }]
                    }
                });

                mytasksmodal.result.then(function () {
                    PostTaskService.saveTaskData({});
                    console.log('on close event, use if required');
                }, function (taskdata) {
                    PostTaskService.saveTaskData(taskdata);
                    console.log(taskdata)
                    console.info('Modal dismissed at: ' + new Date());
                });
        };

        // only for logged in users
        if ($scope.current_user_id != 0) {
            $scope.loadMessages = function () {
                MainService.getNewMessages().then(function (res) {
                    $scope.messages = res.data;
                });
            }

            SocketService.emit('user:added', userData);          
            // global events socket
            SocketService.on('task:added', function (payload) {
                console.log("registered event")
 
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('New Task Posted: ' + payload.task_title)
                    .action('View Task')
                    .position('top right')
                    .hideDelay(5000)
                ).then(function (resp) {
                    if (resp == 'ok') {
                        $state.go('task', {
                            id: payload.task_id
                        });
                    }
                });

            });

            SocketService.on('notification:show', function () {
                console.log('notification to specific user');
                var notification = new Notification("Taskoli", {body: "You have a new notification", icon: '/content/img/help-logo.png'});
            });

            SocketService.on('task:show', function (alert) {
                console.log('task alert to specific user', alert);
                var taskAlert = new Notification("Taskoli", {body: "You have a new Task to view", icon: '/content/img/help-logo.png'});
                taskAlert.onclick = function(event) {
                    event.preventDefault(); // prevent the browser from focusing the Notification's tab
                    window.open("//" + location.host + '/tasks/' + alert.task_id + '&city=', '_blank');
                  }
            });

            var notificationsUpdateInterval = $interval(setNotificationCounts, 5000);

            function setNotificationCounts() {
                MainService.getNotificationCounts().then(function (res) {
                    $scope.notificationCounts = res.data[0].unseen;
                });
                MainService.getNewMessagesCount().then(function (res) {
                    $scope.messageCounts = res.data[0].unseen;
                });
            }
            $rootScope.$on('$stateChangeStart', function (next, current) {
                $interval.cancel(notificationsUpdateInterval);
            });

            setNotificationCounts();

            $scope.updateNotificationToSeen = function (notificationID) {
                MainService.updateNotificationToSeen(notificationID).then(function (res) {
                    if (res.data.affectedRows) {
                        setNotificationCounts();
                    }
                });
            }

            $scope.updateMessageToSeen = function (messageID) {
                MainService.updateMessageToSeen(messageID).then(function (res) {
                    if (res.data.affectedRows) {
                        setNotificationCounts();
                    }
                });
            }
        }
        $rootScope.$on('open-post-task', function (args) {
            app.postTask();
        });
        // open global Edit task
        $scope.editTask = function (task_id, size, post_status) {
            $scope.post_status = post_status;
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
                    lat: function () {
                        return $scope.lat;
                    },
                    lng: function () {
                        return $scope.lng;
                    },
                    post_status: function () {
                        return post_status;
                    },
                    task_id: function() {
                        return task_id
                    }

                }
            });

            mytasksmodal.result.then(function () {
                console.log('on close event, use if required');
            }, function () {
                console.info('Modal dismissed at: ' + new Date());
            });
        };

        $scope.openPostTask = function () {
            if(userData) {
                app.postTask();
            } else {
                app.openLogin();
            }
        }

        $scope.loadAlerts = function () {
            MainService.getAllAlerts().then(function(res) {
                $scope.alerts = res.data;
            });
        }
    }
})();