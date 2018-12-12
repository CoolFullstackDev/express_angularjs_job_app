(function(){
    'use strict';
    var app = angular.module('taskoli');
    app.factory('HttpInterceptors', HttpInterceptors);

    HttpInterceptors.$inject = ['AuthService', '$rootScope'];

    function HttpInterceptors(AuthService, $rootScope) {
            var service = {
                request: request,
                responseError: responseError 
            };

            function request(config) {
                var token = AuthService.getToken();
                if(token) {
                    config.headers['x-access-token'] = token;
                } 
                return config;
            }

            function responseError (config) {
                if (config.status === 401) {
                    $rootScope.$broadcast('unauthorized');
                  }
                  return config;
            }

           return service;
        }
})();
