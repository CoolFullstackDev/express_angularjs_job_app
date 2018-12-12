(function(){
    'use strict';
    var app = angular.module('taskoli');
    app.controller('MenuController', MenuController);

    MenuController.$inject = ['$scope', '$mdSidenav', 'userData', 'MainService'];

    function MenuController($scope, $mdSidenav, userData, MainService) {
        $scope.userData = userData;
        $scope.toggleRight = function() {
            $mdSidenav('slide-menu').toggle();
        }
        // open login modal
        $scope.openLogin = function () {
            var login = MainService.loginModal();
            //console.log('login')
        }

        // open reg modal
        $scope.openReg = function () {
            var reg = MainService.regModal();
            //console.log('reg')
        }
    }

})();
