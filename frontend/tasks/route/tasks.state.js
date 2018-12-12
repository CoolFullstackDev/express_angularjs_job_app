(function () {
    'usestrict';

    angular.module('taskoli').config(Tasks);

    Tasks.$inject = ['$stateProvider', '$urlRouterProvider'];

    function Tasks($stateProvider, $urlRouterProvider) {
        // States
        $stateProvider
            .state('tasks', {
                parent: 'app',
                url: '/tasks',
                data: {
                    roles: []
                },
                views: {
                    'content@': {
                        templateUrl: '/frontend/tasks/view/tasks.html',
                        controller: 'TasksController'
                    }
                },
                resolve: {
                    userLocation: ['ProfileService', 'AccountService', function (ProfileService, AccountService) {
                        if (AccountService.isLoggedIn()) {
                            return ProfileService.getUserLocation().then(function (res) {
                                return _.values(_.filter(res.data, function (loc) {
                                    return !_.isEmpty(loc)
                                })).join(', ');
                            });
                        }
                        return null;
                    }]
                }
            })
            .state('task', {
                parent: 'tasks',
                url: '/:id&city=:city',
                data: {
                    roles: []
                },
                views: {
                    'task@tasks': {
                        templateUrl: '/frontend/tasks/view/task.html',
                        controller: 'TaskController'
                    }
                },
                params: {
                    city: {
                        type: 'string',
                        raw: true,
                        dynamic: true
                    }
                },
                resolve: {
                    taskData: ['$state', 'TasksService', '$stateParams', 'userLocation', 'userData', function ($state, TasksService, $stateParams, userLocation, userData) {
                        var model = {};

                        if (_.isEmpty($stateParams.city)) {
                            $stateParams.city = userLocation;
                        }

                        TasksService.getTaskByID($stateParams.id, $stateParams.city).then(function (res) {
                            model.disabledBtn = false;
                            model.trackTaskTitle = 'Track Task';
                            model.selectedData = res.data;
                            model.myOffer = _.find(res.data.bids, function (bid) {
                                return bid.user_id == userData.id;
                            });
                            model.tracked_tasks = model.selectedData['user_info'][0].track_tasks;
                            model.active = $stateParams.id;
                            // appending tags to array
                            model.selectedData.task.tags = model.selectedData.task.tags.split(",");
                        });

                        return model;
                    }],
                    userTrackedTasks: ['ProfileService', 'AccountService', function (ProfileService, AccountService) {
                        if (AccountService.isLoggedIn()) {
                            return ProfileService.getUserTrackedTasks().then(function (res) {
                                return res.data;
                            });
                        }
                        return null;
                    }]
                }
            })
            .state('other-profile', {
                parent: 'tasks',
                url: '^/profile/:name',
                params: {
                    task: {
                        type: 'string',
                        raw: true
                    }
                },
                onEnter: ['$uibModal', '$stateParams', '$state', function ($uibModal, $stateParams, $state) {
                    var stateToReturn = '^';
                    var modalInstance = $uibModal.open({
                        templateUrl: '/frontend/tasks/view/profile.modal.html',
                        controller: 'ProfileModalController',
                        size: 'lg'
                    });
                    if ($stateParams.task) {
                        stateToReturn = 'task'
                    }
                    modalInstance.result.then(
                        function (result) {
                            modalInstance.dismiss();
                            $state.go(stateToReturn, {
                                id: $stateParams.task
                            }, {
                                reload: false
                            })
                        },
                        //dismiss
                        function (result) {
                            modalInstance.dismiss();
                            $state.go(stateToReturn, {
                                id: $stateParams.task
                            }, {
                                reload: false
                            })
                        });
                }]
            });
    }
})();