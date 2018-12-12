(function() {
    'usestrict';

    angular.module('taskoli').config(home);

    home.$inject = ['$stateProvider', '$urlRouterProvider'];

    function home($stateProvider, $urlRouterProvider) {
        // States
        $stateProvider
          .state('home', {
            parent: 'app',
            url: '/',
            views:{
                'content@':{
                    templateUrl: '/frontend/home/view/home.html',
                    controller: 'HomeController'
                }
            }
          });
    }
})();