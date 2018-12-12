(function () {
    'use strict';
    var app = angular.module('taskoli');
    app.factory('MessagesService', MessagesService);

    MessagesService.$inject = ['$http', '$q', 'apiURL'];

    function MessagesService($http, $q, apiURL) {
        var service = {
            chat_list:chat_list,
            chat_conversation:chat_conversation,
            message:message
        };

        function chat_list(detailed_search) {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: apiURL + '/chat_list?s=' + detailed_search
                //data: user_id,
            }).then(function successCallback(response) {
                deferred.resolve(response);
            }, function errorCallback(message, code) {
                deferred.reject(message);
            });
            return deferred.promise;
        }

        function chat_conversation(task_id) {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: apiURL + '/chat_conversation/' + task_id,
                //data: user_id,
            }).then(function successCallback(response) {
                deferred.resolve(response);
            }, function errorCallback(message, code) {
                deferred.reject(message);
            });
            return deferred.promise;
        }

        function message(msg) {
            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: apiURL + '/new_message/',
                data: msg,
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