(function () {
    'usestrict';
    angular.module('taskoli').config(stateConfig);

    stateConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function stateConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        // States
        $stateProvider
            .state('app', {
                abstract: true,
                views: {
                    'navbar@': {
                        templateUrl: '/frontend/main/view/main.html',
                        controller: 'MainController',
                        controllerAs: 'app'
                    },
                    'footer@': {
                        templateUrl: '/frontend/main/view/footer.html',
                        controller: 'MenuController'
                    },
                    'side-menu@': {
                        templateUrl: '/frontend/main/view/navbar.html',
                        controller: 'MenuController'
                    }
                },
                resolve: {
                    'userData': ['AccountService', function (AccountService) {
                        console.log("Logged in status:", AccountService.isLoggedIn());
                        if (AccountService.isLoggedIn()) {
                            console.log("Success: User logged in");
                            return AccountService.getSession().then(function (res) {
                                var user = res.data;
                                user.isLoggedin = true;
                                return user;
                            });
                        }
                    }]
                }
            });
    }

})();