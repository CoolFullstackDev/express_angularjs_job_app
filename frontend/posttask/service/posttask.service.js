(function() {
'use strict';
    var app = angular.module('taskoli');
    app.service('PostTaskService', PostTaskService);

    PostTaskService.inject = ['$http', '$q', 'apiURL'];
    function PostTaskService($http, $q, apiURL) {
        var taskData = {};
        var service = {
            addTask: addTask,
            GetUserData:GetUserData,
            saveTaskData: saveTaskData,
            getTaskData: getTaskData
        };
        
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

        function saveTaskData (taskData) {
            this.taskData = taskData;
        }

        function getTaskData () {
            return this.taskData;
        }

        return service;
    }
})();