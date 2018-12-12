(function () {
    'use strict';
    var app = angular.module('taskoli');
    app.controller('EditTaskController', EditTaskController);


    app.directive('onFileChange', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var onChangeHandler = scope.$eval(attrs.onFileChange);

                element.bind('change', function () {
                    scope.$apply(function () {
                        var files = element[0].files;
                        if (files) {
                            onChangeHandler(files);
                        }
                    });
                });
            }
        };
    });

    EditTaskController.$inject = ['$rootScope', '$state', '$scope', '$sce', '$mdToast', 'Upload', '$uibModal', '$uibModalInstance', '$filter', 'EditTaskService', 'siteURL', 'apiURL', 'userData', '$timeout', 'NgMap', '$geolocation', '$http', '$window', 'moment', 'googleMapKey', 'TasksService', 'SocketService', 'post_status', 'task_id', 'Categories', '$mdStepper'];

    function EditTaskController($rootScope, $state, $scope, $sce, $mdToast, Upload, $uibModal, $uibModalInstance, $filter, EditTaskService, siteURL, apiURL, userData, $timeout, NgMap, $geolocation, $http, $window, moment, googleMapKey, TasksService, SocketService, post_status, task_id, Categories, $mdStepper) {
        var timer = 200;
        $scope.site_url = siteURL;
        $scope.toggle = true;
        $scope.directiontoggle = true;
        $scope.log = '';
        $scope.imag_urls = [];
        $scope.form = {}
        $scope.user_id = userData ? userData.id : 0;
        $scope.post_status = post_status;
        $scope.CurrentDate = moment();
        $scope.taskPostData = {
            user_id: userData.id,
            task_location: null,
            img_name: []
        };
        EditTaskService.getTaskData(task_id).then(function (res) {
            $scope.taskPostData = res.data;
            $scope.taskPostData.tags = _.map($scope.taskPostData.tags, function(tag) {
                return {tag: tag};
            });
            $scope.taskPostData.task_location = '';
            $scope.taskPostData.start_date = '';
        }, function (err) {
            console.error(err.statusText + ' at ' + err.config.url);
        });

        // Auto Completet Places
        $scope.autocompleteOptions = {
            componentRestrictions: {
                country: 'ca'
            }
        }

        NgMap.getMap().then(function (map) {
            $scope.map = map;
        });

        $scope.get_my_location = function () {
            $geolocation.getCurrentPosition().then(function (position) {
                //console.log(position, 'current position');
                var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                var geocoder = new google.maps.Geocoder();
                geocoder.geocode({
                    'latLng': latlng
                }, function (results, status) {
                    //console.log(results)
                    if (results[1]) {
                        //var address = results[0].formatted_address;
                        //console.log(address);
                        $timeout(function () {
                            $scope.taskPostData.task_location = results[0];
                            $scope.data = {
                                lat: position.coords.latitude,
                                lng: position.coords.longitude
                            };
                        }, 200);
                    }
                });
            });
        }

        $scope.$on('g-places-autocomplete:select', function (event, place) {
            $scope.data = {
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng()
            };
            $scope.map.setCenter(place.geometry.location);
        });

        // Toggle Map on My Task popup
        $scope.toggleMap = function () {
            $scope.toggle = $scope.toggle === false ? true : false;
        };

        $scope.directionToggle = function () {
            $scope.directiontoggle = $scope.directiontoggle === false ? true : false;
        };

        if (!userData) {
            TasksService.getTaskByID($scope.user_id).then(function (res) {
                // $scope.tasks = res.data['task'][0];
                $scope.images = res.data['images'];
                $scope.site_url = siteURL;
            }, function (err) {
                console.error(err.statusText + ' at ' + err.config.url);
            });
        }


        $scope.upload = function (files) {
            console.log(files)
            if (files && files.length) {
                _.forEach(files, function (file) {
                    console.log(file);
                    if (file) {
                        Upload.upload({
                            url: apiURL + '/upload',
                            data: {
                                file: file
                            }
                        }).then(function (resp) {
                            console.log(resp)
                            $timeout(function () {
                                $scope.apiURL = apiURL;
                                $scope.taskPostData.images.push({
                                    task_img: resp.data.filename
                                });
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
                });
            }
        }
        $scope.removeFile = function (url) {
            _.remove($scope.taskPostData.images, function (imageUrl) {
                return imageUrl.task_img == url;
            });
        }
        $scope.setPopupData = function (task) {
            $scope.dataView = angular.copy(task);
            NgMap.getMap().then(function (map) {
                $scope.map = google.maps.event.trigger(map, "resize");
            });
            $mdStepper('posttask').next();
        };

        $scope.previousStep = function() {
            $mdStepper('posttask').back();
        }

        $scope.btn_post_task = function (Task, post_status) {
            var task_id = Task.id;
            //console.log(post_status," post_status controller");
            if ($scope.post_status == 'repost') {
                EditTaskService.addTask(Task).then(function (res) {
                    console.log('repost controller call');
                    SocketService.emit('Task:Added', Task);
                    $uibModalInstance.close();
                    $state.go('task', {
                        id: res.data.insertId,
                        city: ''
                    }, {
                        reload: true,
                        inherit: true
                    });
                    $uibModalInstance.close();
                }, function (err) {
                    console.error(err.statusText + ' at ' + err.config.url);
                });
            } else {
                EditTaskService.updateTask(Task).then(function (res) {
                    $state.go('task', {
                        id: task_id,
                        city: ''
                    }, {
                        reload: true,
                        inherit: true
                    });
                    $mdToast.show(
                        $mdToast.simple()
                        .textContent('Task update Successfull')
                        .position('top right')
                        .hideDelay(3000)
                    );
                    SocketService.emit('Task:Updated', Task);
                    $uibModalInstance.close();
                }, function (err) {
                    console.error(err.statusText + ' at ' + err.config.url);
                });
            }
            $rootScope.$emit("locationUpdate", Task);
        };

        $scope.getMatchesForSkills = function (searchText) {
            console.log(searchText)
            return _.filter(Categories, function (cat) {
                console.log(cat)
                return cat.tag.toLowerCase().includes(searchText.toLowerCase());
            });
        }

        $scope.submitForm = function () {
            // Emit event for all updates on users side TODO: socket IO for all clients
            $scope.$broadcast('taskPostEvent', $scope.form.userForm);
            if ($scope.form.userForm.$valid) {
                console.log('user form is in scope');
                $modalInstance.close('closed');
            } else {
                console.log('userform is not in scope');
            }
        };

        $scope.newTags = function (chip) {
            var returnChip;
            if (chip.tag)
                returnChip = {
                    tag: chip.tag
                };
            else
                returnChip = {
                    tag: chip
                }
            if (!_.find($scope.taskPostData.tags, returnChip)) {
                $scope.taskPostData.tags.push(returnChip);
            }
            return returnChip;
        };
    }
})();