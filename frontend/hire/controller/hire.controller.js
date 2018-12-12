(function () {
    'use strict';
    var app = angular.module('taskoli');
    app.controller('HireController', HireController);

    HireController.$inject = ['$scope', '$mdToast', '$uibModal', '$uibModalInstance', '$uibModalStack', 'HireService', 'siteURL', 'apiURL', 'updateBidData', 'MessagesService', 'SocketService'];

    function HireController($scope, $mdToast, $uibModal, $uibModalInstance, $uibModalStack, HireService, siteURL, apiURL, updateBidData, MessagesService, SocketService) {
		$scope.updateBidData = updateBidData;
		$scope.hire_user = function (HireData) {
			HireService.AddHireData(HireData, updateBidData).then(function (res) {
				SocketService.emit('notification:added', HireData.awarded_to);
				console.log(HireData)
				var messageModel = {
					from_id: HireData.awarded_by,
					to_id: HireData.awarded_to,
					task_id: HireData.task_id,
					message: HireData.message
				}

				MessagesService.message(messageModel).then(function(res){
					$mdToast.show(
						$mdToast.simple()
						.textContent('Offer sent To ' + HireData.awarded_name)
						.position('top right')
						.hideDelay(3000)
					);
					$uibModalStack.dismissAll();
				});
			}, function (err) {
				console.error(err.statusText + ' at ' + err.config.url);
			});  
		};
            
    }
})();