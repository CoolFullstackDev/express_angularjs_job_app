(function () {
    'usestrict';

    angular.module('taskoli').config(Account);

    Account.$inject = ['$stateProvider', '$urlRouterProvider'];

    function Account($stateProvider, $urlRouterProvider) {
        // States
        $stateProvider
            .state('login', {
                parent: 'app',
                url: '/login/?:token&isNew',
                views: {
                    'content@': {
                        controller: 'LoginController'
                    }
                },
                params: {
                    token: {
                        raw: true,
                        squash: true,
                        value: ''
                    },
                    isNew: {
                        squash: true,
                        value: ''
                    }
                }
            })
            .state('login-redirect', {
                parent: 'app',
                url: '/account/redirect/?isNew',
                params: {
                    isNew: {
                        raw: true,
                        type: 'string',
                        squash: true,
                        value: ''
                    }
                },
                views: {
                    'content@': {
                        templateUrl: '/frontend/account/view/login-redirect.html'
                    }
                },
                resolve: {
                    redirect: ['$stateParams', '$state', '$timeout', function ($stateParams, $state, $timeout) {
                        $timeout(function () {
                            if (!$stateParams.isNew) {
                                $state.go('tasks', {}, {
                                    reload: true
                                });
                            } else {
                                $state.go('edit-profile', {}, {
                                    reload: true
                                });
                            }
                        }, 1000);
                    }]
                }
            })
            .state('logout', {
                parent: 'app',
                url: '/logout',
                views: {
                    'content@': {
                        templateUrl: '/frontend/account/view/logout.html'
                    }
                }
            });
    }
})();