(function(){
    'use strict';
    var app = angular.module('taskoli');
    app.factory('AccountService', AccountService);

    AccountService.$inject = ['$http', 'apiURL', 'AuthService', '$q'];

    function AccountService($http, apiURL, AuthService, $q) {
            var service = {
             getSession: getSession,
             isLoggedIn: isLoggedIn,
             login: login,
             loginGoogle: loginGoogle,
             logout: logout
            };
            // create user variable
            function getSession() {
                if(this.isLoggedIn()) {
                    return $http.post(apiURL + '/account/auth/me', {token: AuthService.getToken()});
                }
                else {
                    AuthService.removeToken();
                    $q.reject({message: 'User has no token'});
                }
            }

            function isLoggedIn() {
                if(AuthService.getToken()) {
                    return true;
                } else {
                    return false;
                }
            }

            function login(token) {
                var deferred = $q.defer();
                deferred.resolve(AuthService.setToken(token));
                return deferred.promise;
            }

            function loginGoogle() {
                $http({
                    method: 'GET',
                    url: apiURL + '/account/login/google'
                }).then(function successCallback(response) {
                    return response;
                }, function errorCallback(response) {
                    console.error(response);
                    return response;
                });
            }

            function logout() {
                AuthService.removeToken();
            }

            return service;
        }
})();
