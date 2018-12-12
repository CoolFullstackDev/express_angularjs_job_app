(function () {
    'use strict';
    var app = angular.module('taskoli');
    app.factory('MyTasksService', MyTasksService);

    MyTasksService.$inject = ['$http', '$q', 'apiURL'];

    function MyTasksService($http, $q, apiURL) {
        var service = {
            //getTasks: getTasks,
            getTaskByID: getTaskByID,
            getUserTasks: getUserTasks,
            completedTaskAsTasker: completedTaskAsTasker,
            completedTaskAsEmployer: completedTaskAsEmployer,
            GetUserData: GetUserData,
            Complete_As_Tasker: Complete_As_Tasker,
            Complete_As_employer: Complete_As_employer,
            checkCompleteData: checkCompleteData,
            checkPaymentData: checkPaymentData,
            checkRatingData: checkRatingData,
            GetNotificationData: GetNotificationData,
            Accept_Offer: Accept_Offer,
            Reject_Offer: Reject_Offer,
            RejectTask: RejectTask
        };

        function getUserTasks(user_id, $search_input, $status, $sort, $type) {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: apiURL + '/' + $type + '_task?user_id=' + user_id + '&s=' + $search_input + '&status=' + $status + '&sort=' + $sort
            }).then(function successCallback(response) {
                deferred.resolve(response);
            }, function errorCallback(message, code) {
                deferred.reject(message);
            });
            return deferred.promise;
        }


        function getTaskByID(taskid) {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: apiURL + '/task/' + taskid
            }).then(function successCallback(response) {
                deferred.resolve(response);
            }, function errorCallback(message, code) {
                deferred.reject(message);
            });
            return deferred.promise;
        }


        function Accept_Offer(taskid, userid, bid_id) {
            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: apiURL + '/accept_offer/' + taskid + '?owner=' + userid,
                data: {
                    bid_id: bid_id
                }
            }).then(function successCallback(response) {
                deferred.resolve(response);
            }, function errorCallback(message, code) {
                deferred.reject(message);
            });
            return deferred.promise;
        }

        function Reject_Offer(taskid, current_bid, userid) {
            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: apiURL + '/reject_offer/' + taskid + '?owner=' + userid,
                data: {
                    bid_id: current_bid
                }
            }).then(function successCallback(response) {
                deferred.resolve(response);
            }, function errorCallback(message, code) {
                deferred.reject(message);
            });
            return deferred.promise;
        }

        function Complete_As_Tasker(taskid, owner) {
            var deferred = $q.defer();
            $http({
                method: 'PUT',
                url: apiURL + '/complete_task_tasker/' + taskid,
                data: {
                    owner: owner
                }
            }).then(function successCallback(response) {
                deferred.resolve(response);
            }, function errorCallback(message, code) {
                deferred.reject(message);
            });
            return deferred.promise;
        }

        function Complete_As_employer(taskid) {
            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: apiURL + '/complete_task_employer/' + taskid
            }).then(function successCallback(response) {
                deferred.resolve(response);
            }, function errorCallback(message, code) {
                deferred.reject(message);
            });
            return deferred.promise;
        }


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

        function GetNotificationData(taskid, awarded_to, bid_type) {
            var user_id = awarded_to || 0;
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: apiURL + '/get_notifications/' + taskid + '?user_id=' + user_id + '&bid_type=' + bid_type
            }).then(function successCallback(response) {
                deferred.resolve(response);
            }, function errorCallback(message, code) {
                deferred.reject(message);
            });
            return deferred.promise;
        }

        function checkCompleteData(taskid) {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: apiURL + '/check_complete/' + taskid
            }).then(function successCallback(response) {
                deferred.resolve(response);
            }, function errorCallback(message, code) {
                deferred.reject(message);
            });
            return deferred.promise;
        }

        function checkPaymentData(person_type, taskid, user_id) {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: apiURL + '/check_payment/' + taskid + '?user_id=' + user_id + '&person_type=' + person_type
            }).then(function successCallback(response) {
                deferred.resolve(response);
            }, function errorCallback(message, code) {
                deferred.reject(message);
            });
            return deferred.promise;
        }

        function checkRatingData(person_type, taskid, user_id) {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: apiURL + '/check_rating/' + taskid + '?user_id=' + user_id + '&person_type=' + person_type
            }).then(function successCallback(response) {
                deferred.resolve(response);
            }, function errorCallback(message, code) {
                deferred.reject(message);
            });
            return deferred.promise;
        }

        function completedTaskAsTasker(task_id, user_id) {
            //console.log(data['id'] +' '+ data['user_id'] +' data in api');
            var task_data = {
                taskid: task_id,
                userid: user_id,
                completed_date: new Date()
            };
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

        function completedTaskAsEmployer(data, task_id, user_id) {
            console.log(data['paymentModel'] + ' ' + data['rate'] + ' ' + data['review'] + ' data in api');
            var task_data = {
                payment_type: data['paymentModel'],
                rating: data['rate'],
                review: data['review'],
                taskid: task_id,
                userid: user_id,
                completed_date: new Date()
            }
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

        function RejectTask(taskid, tasker, msg) {
            var deferred = $q.defer();
            $http({
                method: 'PUT',
                url: apiURL + '/reject_task/' + taskid,
                data: {
                    tasker: tasker,
                    message: msg
                }
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