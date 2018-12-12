(function () {
    'use strict';
    var app = angular.module('taskoli');
    app.factory('TasksService', TasksService);

    TasksService.$inject = ['$http', '$q', 'apiURL'];

    function TasksService($http, $q, apiURL) {
        var service = {
            getTasks: getTasks,
            getSearchTasks: getSearchTasks,
            getTaskByID: getTaskByID,
            TrackTask: TrackTask,
            GetUserData: GetUserData,
            AskQuestion: AskQuestion,
            MakeOffer: MakeOffer,
            get_chat: get_chat,
            chatSubmit: chatSubmit,
            getBidByID: getBidByID,
            submitTags: submitTags
        };

        function getTasks(page) {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: apiURL + '/tasks?page=' + page
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

        function getSearchTasks($search_input, $status, $city, $price_min, $price_max, distance_min, distance_max, $posted, $page) {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: apiURL + '/get_tasks?s=' + $search_input + '&status=' + $status + '&city=' + $city + '&price_min=' + $price_min + '&price_max=' + $price_max + '&distance_min=' + distance_min + '&distance_max=' + distance_max + '&posted=' + $posted + '&page=' + $page
            }).then(function successCallback(response) {
                deferred.resolve(response);
            }, function errorCallback(message, code) {
                deferred.reject(message);
            });
            return deferred.promise;
        }

        function getTaskByID(taskid, taskCity) {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: apiURL + '/task/' + taskid + '?city=' + taskCity,
            }).then(function successCallback(response) {
                deferred.resolve(response);
            }, function errorCallback(message, code) {
                deferred.reject(message);
            });
            return deferred.promise;
        }

        function getBidByID(bid_id) {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: apiURL + '/get_bids/' + bid_id
            }).then(function successCallback(response) {
                deferred.resolve(response);
            }, function errorCallback(message, code) {
                deferred.reject(message);
            });
            return deferred.promise;
        }

        //Track Task
        function TrackTask(taskID, current_user_id) {
            var deferred = $q.defer();
            //console.log('taskID Services ' + taskID + ' ' +current_user_id);
            var task_data = {
                taskid: taskID,
                userid: current_user_id
            }
            $http({
                method: 'PUT',
                url: apiURL + '/trackTask/',
                data: task_data
            }).then(function successCallback(response) {
                deferred.resolve(response);
            }, function errorCallback(message, code) {
                deferred.reject(message);
            });
            return deferred.promise;
        }

        //Ask Question
        function AskQuestion(taskID, from, taskBy, message) {
            var deferred = $q.defer();
            //console.log('taskID Services: '+taskID,' from Services: '+from, 'taskBy Services: '+taskBy, ' message: '+message);
            var taskData = {
                from_id: from,
                by_task: taskBy,
                task_id: taskID,
                message: message
            }
            $http({
                method: 'POST',
                url: apiURL + '/askquestion/',
                data: taskData
            }).then(function successCallback(response) {
                deferred.resolve(response);
            }, function errorCallback(message, code) {
                deferred.reject(message);
            });
            return deferred.promise;
        }

        //Get Related chat of any question
        function get_chat(qsID) {
            var deferred = $q.defer();
            //console.log('taskID Services '+taskID,' from Services '+from, 'taskBy Services '+taskBy, ' message '+message);
            $http({
                method: 'GET',
                url: apiURL + '/questionchat/' + qsID
            }).then(function successCallback(response) {
                deferred.resolve(response);
            }, function errorCallback(message, code) {
                deferred.reject(message);
            });
            return deferred.promise;
        }

        //Make Offer
        function MakeOffer(taskID, offerBy, makeOffer) {
            var deferred = $q.defer();
            //console.log('taskID Services '+taskID, 'offerBy Services '+offerBy, ' makeOffer amount '+makeOffer['amount'],' makeOffer message '+makeOffer['message']);
            var postData = {
                task_id: taskID,
                offer_by: offerBy,
                amount: makeOffer['amount'],
                message: makeOffer['message']
            };
            $http({
                method: 'POST',
                url: apiURL + '/makeOffer/',
                data: postData
            }).then(function successCallback(response) {
                deferred.resolve(response);
            }, function errorCallback(message, code) {
                deferred.reject(message);
            });
            return deferred.promise;
        }

        //Question ans Chat
        function chatSubmit(taskID, from, task_by, reply_to, chat) {
            var deferred = $q.defer();
            //console.log('taskID Services '+taskID, 'offerBy Services '+offerBy, ' makeOffer amount '+makeOffer['amount'],' makeOffer message '+makeOffer['message']);
            console.log('chat Services ' + chat);
            var postData = {
                task_id: taskID,
                from: from,
                task_by: task_by,
                reply_to: reply_to,
                chat: chat
            };
            $http({
                method: 'POST',
                url: apiURL + '/submitchat/',
                data: postData
            }).then(function successCallback(response) {
                deferred.resolve(response);
            }, function errorCallback(message, code) {
                deferred.reject(message);
            });
            return deferred.promise;
        }

        //Question ans Chat
        function submitTags(tags) {
            var deferred = $q.defer();
            //console.log('taskID Services '+taskID, 'offerBy Services '+offerBy, ' makeOffer amount '+makeOffer['amount'],' makeOffer message '+makeOffer['message']);
            console.log('tags Services ' + tags);
            $http({
                method: 'POST',
                url: apiURL + '/user/submitTags',
                data: tags
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