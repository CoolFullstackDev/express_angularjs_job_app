(function(){
    'use strict';
    var app = angular.module('taskoli');
    app.directive('countdown', [
        'Util',
        '$interval',
        function (Util, $interval) {
            return {
                restrict: 'A',
                scope: { date: '=date' },
                link: function (scope, element) {
                    var future;

                    var timeoutId = $interval(function () {
                        var diff;
                        future = new Date(scope.date);
                        diff = Math.floor((future.getTime() - new Date().getTime()) / 1000);
                        if(diff < 0) {
                            diff = "Completed";
                        }
                        else {
                            diff =Util.dhms(diff)
                        }
                        element.text(diff);
                    }, 1000);

                    element.on('$destroy', function() {
                        $interval.cancel(timeoutId);
                    });

                    scope.$watch(scope.date, function(val) {
                        future = new Date(scope.date);
                    });
                }
            };
        }
    ]);
})();