(function () {
    'use strict';
    var app = angular.module('taskoli');
    app.factory('ProfileService', ProfileService);

    ProfileService.$inject = ['$http', '$q', 'apiURL', '$uibModal'];

    function ProfileService($http, $q, apiURL, $uibModal) {
        var service = {
            GetUserData: GetUserData,
            user_data: user_data,
            loginModal: loginModal,
            /*checkPaymentData:checkPaymentData,
            checkRatingData: checkRatingData,
            GetNotificationData: GetNotificationData,*/
            getUserLocation: getUserLocation,
            getUserTrackedTasks: getUserTrackedTasks,
            getUserSkills: getUserSkills

        };

        function loginModal() {
            var instance = $uibModal.open({
                templateUrl: '/frontend/account/view/login.html',
                controller: 'AccountController'
            })
            //todo: send back response
            return instance.result.then(null);
        };

        // Get any user data with user id
        function GetUserData(userid) {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: apiURL + '/user_tasks/' + userid,
            }).then(function successCallback(response) {
                deferred.resolve(response);
            }, function errorCallback(message, code) {
                deferred.reject(message);
            });
            return deferred.promise;
        }

        function user_data(userid) {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: apiURL + '/user_info/' + userid,
            }).then(function successCallback(response) {
                deferred.resolve(response);
            }, function errorCallback(message, code) {
                deferred.reject(message);
            });
            return deferred.promise;
        }

        /*function AddPaymentData(task_data) {
            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: apiURL + '/addpaymentdata/', 
                data: task_data
                }).then(function successCallback(response) {
                    deferred.resolve(response);
                }, function errorCallback(message, code) {
                    deferred.reject(message);
                });
                return deferred.promise;
        }

        function GetNotificationData(taskid,awarded_to,bid_type) {
                var deferred = $q.defer();
                $http({
                    method: 'GET',
                    url: apiURL + '/get_notifications/' + taskid +'?user_id=' + awarded_to + '&bid_type='+ bid_type
                    }).then(function successCallback(response) {
                        deferred.resolve(response);
                    }, function errorCallback(message, code) {
                        deferred.reject(message);
                    });
                    return deferred.promise;
        }

        function checkPaymentData(person_type,taskid,user_id) {
                var deferred = $q.defer();
                $http({
                    method: 'GET',
                    url: apiURL + '/check_payment/' + taskid +'?user_id=' + user_id + '&person_type='+ person_type
                    }).then(function successCallback(response) {
                        deferred.resolve(response);
                    }, function errorCallback(message, code) {
                        deferred.reject(message);
                    });
                    return deferred.promise;
        }

        function checkRatingData(person_type,taskid,user_id) {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: apiURL + '/check_rating/' + taskid +'?user_id=' + user_id + '&person_type='+ person_type
                }).then(function successCallback(response) {
                    deferred.resolve(response);
                }, function errorCallback(message, code) {
                    deferred.reject(message);
                });
                return deferred.promise;
        }*/

        //Get current user location
        function getUserLocation() {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: apiURL + '/user/current/location'
            }).then(function successCallback(response) {
                deferred.resolve(response);
            }, function errorCallback(message, code) {
                deferred.reject(message);
            });
            return deferred.promise;
        }

        //Get current user location
        function getUserTrackedTasks() {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: apiURL + '/user/current/track_tasks'
            }).then(function successCallback(response) {
                deferred.resolve(response);
            }, function errorCallback(message, code) {
                deferred.reject(message);
            });
            return deferred.promise;
        }

        function getUserSkills() {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: apiURL + '/user/current/skills'
            }).then(function successCallback(response) {
                deferred.resolve(response);
            }, function errorCallback(message, code) {
                deferred.reject(message);
            });
            return deferred.promise;
        }

        return service;
    }
})();