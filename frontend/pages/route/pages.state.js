(function () {
    'usestrict';

    angular.module('taskoli').config(StaticPages);

    StaticPages.$inject = ['$stateProvider', '$urlRouterProvider'];

    function StaticPages($stateProvider, $urlRouterProvider) {
        // States
        $stateProvider
            .state('page', {
                parent: 'app',
                abstract: true,
                url: '/page',
                resolve: {
                    userData: ['ProfileService', function (ProfileService) {

                    }]
                }
            })
            .state('page.about', {
                url: '/about',
                views: {
                    'content@': {
                        templateUrl: '/frontend/pages/about/view/about.view.html',
                    }
                }
            })
            .state('page.how-it-works', {
                url: '/how-it-works',
                views: {
                    'content@': {
                        templateUrl: '/frontend/pages/how-it-works/view/how-it-works.view.html',
                    }
                }
            })
            .state('page.faq', {
                url: '/faq',
                views: {
                    'content@': {
                        templateUrl: '/frontend/pages/faq/view/faq.view.html',
                    }
                }
            })
            .state('page.contactus', {
                url: '/contactus',
                views: {
                    'content@': {
                        templateUrl: '/frontend/pages/contactus/view/contactus.view.html',
                    }
                }
            })
            .state('page.terms', {
                url: '/terms',
                views: {
                    'content@': {
                        templateUrl: '/frontend/pages/terms/view/terms.view.html',
                    }
                }
            })
            .state('page.policy', {
                url: '/policy',
                views: {
                    'content@': {
                        templateUrl: '/frontend/pages/policy/view/policy.view.html',
                    }
                }
            })
            .state('page.rules', {
                url: '/rules',
                views: {
                    'content@': {
                        templateUrl: '/frontend/pages/rules/view/rules.view.html',
                    }
                }
            });
        }
})();