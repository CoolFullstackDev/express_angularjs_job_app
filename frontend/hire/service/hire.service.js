(function() {
'use strict';
    var app = angular.module('taskoli');
   
   app.service('HireService', HireService);

    HireService.inject = ['$http', '$q', 'apiURL'];
    function HireService($http, $q, apiURL) {
        var service = {
			getBidByID:getBidByID,
			AddHireData:AddHireData
        };
        
        function getBidByID(bid_id) {
			var deferred = $q.defer();
			$http({
				method: 'GET',
				url: apiURL + '/get_bids/'+bid_id
				}).then(function successCallback(response) {
					deferred.resolve(response);
				}, function errorCallback(message, code) {
					deferred.reject(message);
				});
				return deferred.promise;
		}

		function AddHireData(HireData, updateBidData) {
            var deferred = $q.defer();
            //console.log('taskID Services: '+taskID,' from Services: '+from, 'taskBy Services: '+taskBy, ' message: '+message);
            $http({
                method: 'POST',
                url: apiURL + '/addhiredata/', 
                data: angular.extend(HireData, updateBidData)
                }).then(function successCallback(response) {
                    deferred.resolve(response);
                }, function errorCallback(message, code) {
                    deferred.reject(message);
                });
            return deferred.promise;
        }

        return service;
    }
})();