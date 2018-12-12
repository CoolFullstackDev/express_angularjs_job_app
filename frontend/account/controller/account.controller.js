(function(){
    'use strict';
    var app = angular.module('taskoli');
    app.controller('AccountController', AccountController);

    AccountController.$inject = ['$scope', '$window', 'toastr', '$state', 'apiURL', '$uibModalStack'];
    function AccountController($scope, $window, toastr, $state, apiURL, $uibModalStack) {
        if($state.current.name == 'error')
        {
            toastr.error('Error Logging in', 'Account does not exist')
        }

        $scope.facebookLogin = function () {
            $window.location = apiURL + '/account/login/facebook';
            $uibModalStack.dismissAll();
        }

         $scope.googleLogin = function () {
            $window.location = apiURL + '/account/login/google';
            $uibModalStack.dismissAll();
        }        
    }
})();
