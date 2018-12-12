(function(){
    'use strict';
    var app = angular.module('taskoli');
    app.controller('HomeController', HomeController);

    HomeController.$inject = ['$rootScope', '$scope', '$mdSidenav', 'userData', 'MainService'];

    function HomeController($rootScope, $scope, $mdSidenav, userData, MainService) {
        $scope.userData = userData;
        $scope.postTask = function() {
            if(userData) {
                $scope.$emit('open-post-task');
            }
            else {
                MainService.loginModal();
            }
        } 
        $scope.titles = ["Taskoli", "Helpers", "Plumbers", "Mechanics", "Delivery Guys", "Baby Sitters", "Coders", "Transporters"];
    }

})();
