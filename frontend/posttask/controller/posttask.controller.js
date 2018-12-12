(function () {
    'use strict';
    var app = angular.module('taskoli');
    app.controller('PostTaskController', PostTaskController);


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

    PostTaskController.$inject = ['$rootScope', '$state', '$scope', '$sce', '$mdToast', 'Upload', '$uibModal', '$uibModalInstance', '$uibModalStack','$filter', 'PostTaskService', 'siteURL', 'apiURL', 'userData', '$timeout', 'NgMap', '$geolocation', '$http', '$window', 'moment', 'googleMapKey', 'TasksService', '$q', 'filterFilter', 'Categories', 'SocketService', '$mdStepper'];

    function PostTaskController($rootScope, $state, $scope, $sce, $mdToast, Upload, $uibModal, $uibModalInstance, $uibModalStack, $filter, PostTaskService, siteURL, apiURL, userData, $timeout, NgMap, $geolocation, $http, $window, moment, googleMapKey, TasksService, $q, filterFilter, Categories, SocketService, $mdStepper) {
        var timer = 200;
        $scope.user_id = userData ? userData.id : 0;
        $scope.skills = [];
        $scope.getMatchesForSkills = function (searchText) {
            console.log(searchText)
            return _.filter(Categories, function (cat) {
                console.log(cat)
                return cat.tag.toLowerCase().includes(searchText.toLowerCase());
            });
        }

        PostTaskService.GetUserData($scope.user_id).then(function (res) {
            $scope.user_info = res.data[0];
        }, function (err) {
            console.error(err.statusText + ' at ' + err.config.url);
        });

        $scope.task = PostTaskService.getTaskData() || {
            user_id: $scope.user_id,
            task_description: '',
            task_title: '',
            task_budget: null,
            task_sooner: 1,
            task_location: null,
            img_name: [],
            tags: []
        };

        $scope.CurrentDate = moment();
        $scope.site_url = siteURL;
        $scope.ratingTitle = ['One', 'Two', 'Three', 'Four', 'Five'];
        $scope.message = 'You can not hide. :)';
        $scope.toggle = true;
        $scope.directiontoggle = true;
        $scope.log = '';
        $scope.imag_urls = [];
        $scope.form = {}
        $scope.task.tags = [];

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
            if (!_.find($scope.task.tags, returnChip)) {
                $scope.task.tags.push(returnChip);
            }
            return returnChip;
        };

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
            $scope.loadingLocation = true;
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
                            $scope.task.task_location = results[0];
                            $scope.data = {
                                lat: position.coords.latitude,
                                lng: position.coords.longitude
                            };
                            $scope.loadingLocation = false;
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

        $scope.upload = function (files) {
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
                            $timeout(function () {
                                $scope.apiURL = apiURL;
                                $scope.imag_urls.push(resp.data.filename);
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
            _.remove($scope.imag_urls, function (imageUrl) {
                return imageUrl == url;
            });
        }
        $scope.setPopupData = function (Task) {
            NgMap.getMap().then(function (map) {
                $scope.map = google.maps.event.trigger(map, "resize");
            });
            $mdStepper('posttask').next();
        };
        
        $scope.previousStep = function() {
            $mdStepper('posttask').back();
        }

        $scope.btn_post_task = function (Task, skills) {
            PostTaskService.addTask(Task).then(function (res) {
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('Task Posted Successfull')
                    .position('top right')
                    .hideDelay(3000)
                );
                Task.id = res.data.insertId;
                SocketService.emit('Task:Added', Task);
                $uibModalStack.dismissAll();
                $state.transitionTo('task', {
                    id: res.data.insertId
                }, {
                    reload: true,
                    location: 'replace'
                });
                $rootScope.$emit("locationUpdate", Task);
            }, function (err) {
                console.error(err.statusText + ' at ' + err.config.url);
            });
        };


        $scope.submitForm = function () {
            // Emit event for all updates on users side TODO: socket IO for all clients
            $scope.$broadcast('task:added', $scope.form.userForm);
            if ($scope.form.userForm.$valid) {
                //console.log('user form is in scope');
                $modalInstance.close('closed');
            } else {
                console.log('userform is not in scope');
            }
        };

        $scope.saveForm = function (taskData) {
            console.log('saved form');
            $uibModalInstance.dismiss(taskData);
            $uibModalStack.dismissAll(taskData);
        }

        $scope.clearForm = function() {
            $scope.task = {
                user_id: $scope.user_id,
                task_description: '',
                task_title: '',
                task_budget: null,
                task_sooner: 1,
                task_location: null,
                img_name: [],
                tags: []
            };
            $scope.skills = [];
        }
    }
})();