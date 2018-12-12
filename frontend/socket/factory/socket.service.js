(function () {
    'use strict';
    var app = angular.module('taskoli');

    app.factory('SocketService', SocketService);

    SocketService.$inject = ['$rootScope', 'socketFactory'];

    function SocketService($rootScope, socketFactory) {
        return socketFactory();
    }
})();