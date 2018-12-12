(function(){
    'use strict';
    var app = angular.module('taskoli');
    app.controller('LoginController', LoginController);

    LoginController.$inject = ['$scope', '$stateParams', 'AccountService', '$state', '$timeout'];

    function LoginController($scope, $stateParams, AccountService, $state, $timeout)  {
        AccountService.login($stateParams.token).then(function(res){
            console.log("Logged in", $stateParams.isNew);
            $state.go('login-redirect', {isNew: $stateParams.isNew}, { reload: true });
        });
    }
})();
