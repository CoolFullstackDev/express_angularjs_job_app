(function() {
'use strict';
    var app = angular.module('taskoli');
   
   app.service('EditTaskService', EditTaskService);

    EditTaskService.inject = ['$http', '$q', 'apiURL'];
    function EditTaskService($http, $q, apiURL) {
        var service = {
            getTaskData:getTaskData,
            updateTask:updateTask,
            GetUserData:GetUserData,
            addTask:addTask
        };
        


        function updateTask(TaskData) { 
                var deferred = $q.defer();
                $http({
                    method: 'PUT',
                    url: apiURL + '/updateTask/', 
                    data: TaskData
                    }).then(function successCallback(response) {
                        deferred.resolve(response);
                    }, function errorCallback(message, code) {
                        deferred.reject(message);
                    });
                    return deferred.promise;
        }

        function addTask(TaskData) { 
                var deferred = $q.defer();
                $http({
                    method: 'POST',
                    url: apiURL + '/addtask/', 
                    data: TaskData
                    }).then(function successCallback(response) {
                        deferred.resolve(response);
                    }, function errorCallback(message, code) {
                        deferred.reject(message);
                    });
                    return deferred.promise;
        }

        function getTaskData(task_id) { 
                var deferred = $q.defer();
                $http({
                    method: 'GET',
                    url: apiURL + '/getTask/'+task_id,
                    }).then(function successCallback(response) {
                        deferred.resolve(response);
                    }, function errorCallback(message, code) {
                        deferred.reject(message);
                    });
                    return deferred.promise;
        }

        // Get any user data with user id
		function GetUserData(userid) {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: apiURL + '/user/' + userid
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