(function () {
    'use strict';
    var app = angular.module('taskoli', [
            'ui.router',
            'infinite-scroll',
            'ui.bootstrap',
            'vcRecaptcha',
            '720kb.socialshare',
            'ngMap',
            'angular-loading-bar',
            'rzModule',
            'angularMoment',
            'toastr',
            'google.places',
            'ngFileUpload',
            'ngMaterialDatePicker',
            'ngGeolocation',
            'btford.socket-io',
            'ngMessages',
            'ngAnimate',
            'duScroll',
            'typer',
            'templates',
            'ngMaterial',
            'mdSteppers',
            'browserPushNotifications'
        ])
        .config(config)
        .run(run)

    config.$inject = ['$locationProvider', '$httpProvider', '$mdThemingProvider', 'cfpLoadingBarProvider', '$qProvider'];

    function config($locationProvider, $httpProvider, $mdThemingProvider, cfpLoadingBarProvider, $qProvider) {
        $locationProvider.html5Mode(true);
        $qProvider.errorOnUnhandledRejections(false)
        $httpProvider.interceptors.push('HttpInterceptors');
        $mdThemingProvider.theme('default')
            .primaryPalette('green', {
                'default': '600' // use shade 200 for default, and keep all other shades the same
            })
            .accentPalette('blue');
        cfpLoadingBarProvider.latencyThreshold = 100;
    }

    run.$inject = ['$rootScope', '$state', '$stateParams', '$sce', 'googleMapKey', '$timeout', '$anchorScroll', 'AccountService', '$location', '$uibModalStack', 'AuthService', 'BrowserPushNotifications'];

    function run($rootScope, $state, $stateParams, $sce, googleMapKey, $timeout, $anchorScroll, AccountService, $location, $uibModalStack, AuthService, BrowserPushNotifications) {
        $rootScope.$state = $state;

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
            // setup logged in routes restrictions
            var ifRolesEmpty = _.isEmpty(toState.data);
            if (!ifRolesEmpty) {
                var matchRolesExists = _.includes(toState.data.roles, 'LOGGEDIN');
                if (matchRolesExists && !AccountService.isLoggedIn()) {
                    $state.go('home', $stateParams, {
                        reload: true
                    });
                    event.preventDefault();
                }
            } else {
                console.log('-------- STATE CHANGED TO: ' + toState.name + ' --------');
                $uibModalStack.dismissAll('state change');
            }
        });

        $rootScope.$on('$stateChangeSuccess', function () {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            if ($location.hash()) {
                $timeout(function () {
                    var hashId = $location.hash();
                    $anchorScroll();

                    if (hashId && hashId !== '_=_') {
                        document.getElementById(hashId).focus();
                    }
                });
            }
        });
        
        // generating google map url from constants
        $rootScope.trustAsResourceUrl = function () {
            return $sce.trustAsResourceUrl('https://maps.googleapis.com/maps/api/js?v=3&libraries=places&key=' + googleMapKey);
        };

        $rootScope.$on('unauthorized', function() {
            AuthService.removeToken();
            $state.reload();
        });

        BrowserPushNotifications.getSubscriptionId().then(function(res) {
            console.log("registered push notifications", res);
        }, function(err) {
            console.error(err);
        });
    }
})();