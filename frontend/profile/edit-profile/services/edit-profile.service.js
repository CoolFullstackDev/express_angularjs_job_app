(function () {
    'use strict';
    var app = angular.module('taskoli');
    app.factory('EditProfileService', EditProfileService);

    EditProfileService.$inject = ['$http', '$q', 'apiURL'];

    function EditProfileService($http, $q, apiURL) {
        var service = {
            GetUserData: GetUserData,
            editProfile: editProfile,
            user_data: user_data,
            getAllCategories: getAllCategories,
            savePhoto: savePhoto
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

        function getAllCategories() {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: apiURL + '/categories/all',
            }).then(function successCallback(response) {
                deferred.resolve(response);
            }, function errorCallback(message, code) {
                deferred.reject(message);
            });
            return deferred.promise;
        }

        function editProfile(user) {

            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: apiURL + '/edit_profile/',
                data: user,
            }).then(function successCallback(response) {
                deferred.resolve(response);
            }, function errorCallback(message, code) {
                deferred.reject(message);
            });
            return deferred.promise;
        }

        function savePhoto(photo, userid) {
            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: apiURL + '/profile/save/photo',
                data: {
                    imageUrl: photo,
                    userid: userid
                },
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