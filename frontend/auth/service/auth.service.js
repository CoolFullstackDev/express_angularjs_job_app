(function(){
    'use strict';
    var app = angular.module('taskoli');
    app.factory('AuthService', AuthService);

    AuthService.$inject = ['apiURL', '$window'];

    function AuthService(apiURL, $window) {
            var savedToken = null;
            var service = {
                setToken: setToken,
                getToken: getToken,
                removeToken: removeToken
            };
        
           function setToken(token) {
                if(token) {
                    $window.localStorage.setItem('token', token);
                    savedToken = token;
                }
                else {
                    $window.localStorage.removeItem('token');
                }
           }

            function removeToken() {
                    $window.localStorage.removeItem('token');
           }

           function getToken() {
               return $window.localStorage.getItem('token');
           }
       
            return service;
        }
})();
