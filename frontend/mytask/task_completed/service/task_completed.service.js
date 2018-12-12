(function(){
    'use strict';
    var app = angular.module('taskoli');
    app.factory('TaskCompletedService', TaskCompletedService);

    TaskCompletedService.$inject = ['$http', '$q', 'apiURL'];

    function TaskCompletedService($http, $q, apiURL) {
            var service = {
                completedTaskAsTasker: completedTaskAsTasker,
                completedTaskAsEmployer: completedTaskAsEmployer,
                AddPaymentData : AddPaymentData,
                AddRatingData: AddRatingData,
                checkPaymentData:checkPaymentData,
                checkRatingData: checkRatingData,
                GetNotificationData: GetNotificationData
            };


            function completedTaskAsTasker(task_id,user_id) {
                //console.log(data['id'] +' '+ data['user_id'] +' data in api');
                var task_data = {
                    task_id:task_id,
                    user_id:user_id
                }
                var deferred = $q.defer();
                $http({
                    method: 'PUT',
                    url: apiURL + '/taskcompleted/', 
                    data: task_data
                    }).then(function successCallback(response) {
                        deferred.resolve(response);
                    }, function errorCallback(message, code) {
                        deferred.reject(message);
                    });
                    return deferred.promise;
            }

            function completedTaskAsEmployer(task_data) {
                var deferred = $q.defer();
                $http({
                    method: 'POST',
                    url: apiURL + '/taskcompleted/', 
                    data: task_data
                    }).then(function successCallback(response) {
                        deferred.resolve(response);
                    }, function errorCallback(message, code) {
                        deferred.reject(message);
                    });
                    return deferred.promise;
            }

            function AddPaymentData(task_data) {
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

            function AddRatingData(itemClicked,task_data) {
                var deferred = $q.defer();
                $http({
                    method: 'POST',
                    url: apiURL + '/addrating/?itemClicked=' + itemClicked,
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
        }


            return service;
        }
})();
