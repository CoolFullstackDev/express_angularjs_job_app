(function () {
    'use strict';
    var app = angular.module('taskoli');
    app.factory('MainService', MainService);

    MainService.$inject = ['$http', 'apiURL', '$q', '$uibModal'];

    function MainService($http, apiURL, $q, $uibModal) {
        var service = {
            loginModal: loginModal,
            regModal: regModal,
            getskills: getskills,
            getNotifications: getNotifications,
            getNotificationCounts: getNotificationCounts,
            getNewMessages: getNewMessages,
            getNewMessagesCount: getNewMessagesCount,
            updateNotificationToSeen: updateNotificationToSeen,
            updateMessageToSeen: updateMessageToSeen,
            getAllAlerts: getAllAlerts
        };

        function loginModal() {
            var instance = $uibModal.open({
                templateUrl: '/frontend/account/view/login.html',
                controller: 'AccountController'
            })
            //todo: send back response
            return instance.result.then(null);
        };

        function regModal() {
            var instance = $uibModal.open({
                templateUrl: '/frontend/account/view/register.html',
                controller: 'AccountController'
            })
            //todo: send back response
            return instance.result.then(null);
        };

        function getskills() {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: apiURL + '/categories/skill',
            }).then(function successCallback(response) {
                deferred.resolve(response);
            }, function errorCallback(message, code) {
                deferred.reject(message);
            });
            return deferred.promise;
        }

        function getNotifications() {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: apiURL + '/notifications/getAllByUser',
            }).then(function successCallback(response) {
                deferred.resolve(response);
            }, function errorCallback(message, code) {
                deferred.reject(message);
            });
            return deferred.promise;
        };

        function getNotificationCounts() {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: apiURL + '/notifications/get-counts',
            }).then(function successCallback(response) {
                deferred.resolve(response);
            }, function errorCallback(message, code) {
                deferred.reject(message);
            });
            return deferred.promise;
        };

        function getNewMessages() {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: apiURL + '/new-messages-by-user',
            }).then(function successCallback(response) {
                deferred.resolve(response);
            }, function errorCallback(message, code) {
                deferred.reject(message);
            });
            return deferred.promise;
        };

        function getNewMessagesCount() {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: apiURL + '/notifications/get-message-counts',
            }).then(function successCallback(response) {
                deferred.resolve(response);
            }, function errorCallback(message, code) {
                deferred.reject(message);
            });
            return deferred.promise;
        };

        function updateNotificationToSeen(msgID) {
            var deferred = $q.defer();
            $http({
                method: 'PUT',
                url: apiURL + '/notifications/seen/' + msgID,
            }).then(function successCallback(response) {
                deferred.resolve(response);
            }, function errorCallback(message, code) {
                deferred.reject(message);
            });
            return deferred.promise;
        }

        function updateMessageToSeen(msgID) {
            var deferred = $q.defer();
            $http({
                method: 'PUT',
                url: apiURL + '/message/seen/' + msgID,
            }).then(function successCallback(response) {
                deferred.resolve(response);
            }, function errorCallback(message, code) {
                deferred.reject(message);
            });
            return deferred.promise;
        }
        
        function getAllAlerts() {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: apiURL + '/alerts/all',
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