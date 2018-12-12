(function () {
    'use strict';
    var app = angular.module('taskoli');
    app.controller('MyTasksEmployerController', MyTasksEmployerController);

    MyTasksEmployerController.$inject = ['$state', '$scope', '$sce', 'Upload', '$uibModal', '$uibModalInstance', '$filter', 'MyTasksService', 'siteURL', 'apiURL', 'userData', 'user_id', '$timeout', 'NgMap', '$http', '$window', 'moment', 'googleMapKey', '$mdToast', '$uibModalStack', 'TasksService'];

    function MyTasksEmployerController($state, $scope, $sce, Upload, $uibModal, $uibModalInstance, $filter, MyTasksService, siteURL, apiURL, userData, user_id, $timeout, NgMap, $http, $window, moment, googleMapKey, $mdToast, $uibModalStack, TasksService) {
        var timer = 200;

        $scope.user_id = userData.id;

        if (user_id) {
            $scope.current_user_id = user_id;
        } else {
            $scope.current_user_id = userData.id;
        }

        $scope.other = user_id != userData.id;

        $scope.employer_search = {
            detailed_search: '',
            task_status: 'all',
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

        // Auto Completet Places
        $scope.autocompleteOptions = {
            componentRestrictions: {
                country: 'ca'
            }
        }
        $scope.$on('g-places-autocomplete:select', function (event, place) {
            $scope.data = {
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng()
            };
            $scope.map.setCenter(place.geometry.location);
        });

        // Toggle Map on My Task popup
        $scope.toggle = true;
        $scope.toggleMap = function () {
            $scope.toggle = $scope.toggle === false ? true : false;
        };

        $scope.directiontoggle = true;
        $scope.directionToggle = function () {
            $scope.directiontoggle = $scope.directiontoggle === false ? true : false;
        };

        $scope.CurrentDate = new Date();
        $scope.site_url = siteURL;

        /* if (userData != '') {
            MyTasksService.getTaskByID().then(function (res) {
                $scope.tasks = res.data['task'];
                $scope.images = res.data['images'];
                $scope.site_url = siteURL;
                //console.log($scope.base_url+ ' base_url');
            }, function (err) {
                console.error(err.statusText + ' at ' + err.config.url);
            });

        } */


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
                $scope.current_user_id,
                detailed_search,
                task_status,
                task_sort,
                'employer').then(function (res) {
                $scope.employerTasks = [];
                $scope.employerTasks = _.concat($scope.employerTasks, res.data['task_as_employer']);
                //$scope.employerTasks = res.data['task_as_employer'];
            }, function (err) {
                console.error(err.statusText + ' at ' + err.config.url);
            });

            //}, 800);
        };

        $scope.$watch('files', function () {
            $scope.upload($scope.files);
        });

        $scope.$watch('task_img', function () {
            if ($scope.files != null) {
                $scope.files = [$scope.files];

            }
        });

        $scope.log = '';
        $scope.imag_urls = [];

        $scope.upload = function (files) {
            if (files && files.length) {
                for (var i = 0; i < 5; i++) {
                    var file = files[i];
                    if (file) {
                        Upload.upload({
                            url: apiURL + '/upload',
                            data: {
                                file: file
                            }
                        }).then(function (resp) {
                            $timeout(function () {
                                $scope.apiURL = apiURL;
                                $scope.imag_urls.push(resp.data.filename);
                                // $scope.imag_url = apiURL+'/file/'+resp.data.filename;
                                //console.log($scope.imag_url);
                                //console.log(resp.data);
                                //console.log(resp.data.path);
                                $scope.log = 'file: ' +
                                    resp.config.data.file.name +
                                    ', Response: ' + JSON.stringify(resp.data) +
                                    '\n' + $scope.log;
                            });
                        }, null, function (evt) {
                            var progressPercentage = parseInt(100.0 *
                                evt.loaded / evt.total);
                            $scope.log = 'progress: ' + progressPercentage +
                                '% ' + evt.config.data.file.name + '\n' +
                                $scope.log;
                        });
                    }
                }
            }
        };


        $scope.cancel = function () {
            $uibModalStack.dismissAll({
                $value: 'cancel'
            });
        };


        MyTasksService.getUserTasks(
            $scope.current_user_id,
            $scope.employer_search.detailed_search,
            $scope.employer_search.task_status,
            $scope.employer_search.task_sort,
            'employer').then(function (res) {
            $scope.employerTasks = res.data['task_as_employer'];
            $scope.taskerTasks = res.data['task_as_tasker'];
        }, function (err) {
            console.error(err.statusText + ' at ' + err.config.url);
        });

        $scope.get_task_data = function (task_type, taskid, lat, lng) {
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
                $scope.taskdata = res.data['task'];
                $scope.bids = res.data['bids'];
                $scope.taskinfo = res.data['task_info'][0];

                if ($scope.taskinfo) {
                    $scope.awarded_to = $scope.taskinfo.awarded_to;
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

            $scope.disabledBtn = true;
            MyTasksService.checkCompleteData(taskid).then(function (res) {
                $scope.CompleteData = res.data;
                if ($scope.CompleteData != "") {
                    $scope.disabledBtn = false;
                }
            });

            $scope.disabledBtn1 = false;
            MyTasksService.checkRatingData($scope.itemClicked, taskid, $scope.urrent_user_id).then(function (res) {
                $scope.NotificationData = res.data;
                if ($scope.NotificationData) {
                    $scope.disabledBtn1 = true;
                }
            });


            MyTasksService.checkPaymentData(task_type, taskid, $scope.current_user_id).then(function (res) {
                $scope.PaymentData = res.data;
                if ($scope.PaymentData != "") {
                    $scope.payment_type = $scope.PaymentData[0].payment_type;
                } else {
                    $scope.disabledBtn1 = false;
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
                    }],
                    'sendUserData': function () {
                        return userid;
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



        //Task completed as a Employer MODEL
        $scope.task_completed_as_employer = function (userid, type, size, parentSelector) {
            MyTasksService.GetUserData(userid).then(function (res) {
                $scope.UserData = res.data;
            });
            if (type == 'complete') {
                MyTasksService.Complete_As_employer($scope.taskdata.id).then(function (res) {
                    $mdToast.show(
                        $mdToast.simple()
                        .textContent('Task Completed. ')
                        .position('top right')
                        .hideDelay(3000)
                    );
                    //$uibModalStack.dismissAll();
                }, function (err) {
                    console.error(err.statusText + ' at ' + err.config.url);
                });
            }

            // append to body on click
            var parentElem = parentSelector ? angular.element($document[0].querySelector('.global-modal ' + parentSelector)) : undefined;

            var messageModal = $uibModal.open({
                animation: false,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: '/frontend/mytask/task_completed/view/task_completed_as_employer.html',
                controller: 'TaskCompletedController',
                windowClass: 'task_completed',
                scope: $scope,
                size: size,
                appendTo: parentElem,
                resolve: {
                    'userData': function () {
                        return userData;
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


        $scope.$watchCollection('employer_search', function (newVal, oldVal) {
            $scope.task_search_bar($scope.employer_search.task_status, $scope.employer_search);
        });

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

        //to hire any tasker
        $scope.hire = function (bidData, size, parentSelector) {
            TasksService.getBidByID(bidData.bid_id).then(function (res) {
                var messageModal = $uibModal.open({
                    animation: false,
                    ariaLabelledBy: 'modal-title',
                    ariaDescribedBy: 'modal-body',
                    templateUrl: '/frontend/hire/view/hire.html',
                    controller: 'HireController',
                    windowClass: 'hire',
                    scope: $scope,
                    size: size,
                    resolve: {
                        'updateBidData': function () {
                            return res.data[0];
                        }
                    }
                });
                messageModal.result.then(function () {
                        console.log('on close event, use if required');
                    },
                    function () {
                        console.info('Modal dismissed at: ' + new Date());
                    });
            }, function (err) {
                console.error(err.statusText + ' at ' + err.config.url);
            });
        };

        $scope.viewProfile = function (id) {
            $uibModalInstance.dismiss('state change');
            $timeout(function () {
                $state.go('profile', id, {
                    reload: true,
                    location: 'replace'
                });
            }, 200);
        }
    }
})();