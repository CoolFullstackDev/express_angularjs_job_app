(function () {
	'use strict';
	var app = angular.module('taskoli');

	app.controller('TasksController', TasksController);
	TasksController.$inject = ['$rootScope', '$scope', '$state', '$uibModal', 'TasksService', 'siteURL', 'apiURL', '$timeout', '$window', '$compile', 'NgMap', '$geolocation', 'userData', 'googleMapKey', '$uibModalStack', 'SocketService', 'userLocation'];

	function TasksController($rootScope, $scope, $state, $uibModal, TasksService, siteURL, apiURL, $timeout, $window, $compile, NgMap, $geolocation, userData, googleMapKey, $uibModalStack, SocketService, userLocation) {

		var app = this;
		var timeout = 500;
		var timeoutPromise;
		$scope.busyLoadingData = false;
		app.user = userData || {
			id: 0
		};
		$scope.showUpdateBar = false;
		$scope.current_user_id = app.user.id;
		$scope.apiURL = apiURL;
		$scope.pauseLoading = true;
		$scope.tasks = [];
		$scope.page_no = 0;
		$scope.search = {
			city_name: userLocation || "Victoria, BC, CA",
			detailed_search: '',
			task_status: 'all',
			price_max: 1000,
			price_min: 0,
			distnce_max: 50,
			distance_min: 0,
			posted: ''
		};

		$timeout(function () {
			console.debug("Showing the map. The google maps api should load now.");
			$scope.pauseLoading = false;
		}, 2000);


		NgMap.getMap().then(function (map) {
			$scope.map = map;
		});

		// Auto Completet Places
		$scope.autocompleteOptions = {
			componentRestrictions: {
				country: 'ca'
			}
		}

		// Toggle Map on My Task popup
		$scope.toggle = true;
		$scope.toggleSearchBar = function (val) {
			if (val == 'focus') {
				$scope.toggle = false;
			} else {
				$scope.toggle = true;
			}
		};

		// Star Rating title
		$scope.ratingTitle = ['One', 'Two', 'Three', 'Four', 'Five'];

		// Offer List
		$scope.offersList = {
			templateUrl: '/frontend/tasks/view/offers.html',
			//title: 'Offers List'
		};
		$scope.hovered = function (hovering) {
			$timeout(function () {
				//console.log('update with timeout fired');
				if (hovering.objHovered == true) {
					hovering.popoverOpened2 = true;
				}
			}, 500);
		};


		$scope.showInfo = function (event, task) {
			$state.go('task', {
				id: task.id,
				city: userLocation
			}, {
				reload: 'task'
			});
		};

		$scope.myChangeListener = function () {
			$scope.show = true;
			$scope.search_bar();
		};

		$scope.priceSlider = {
			minValue: 0,
			maxValue: 1000,
			options: {
				floor: 0,
				ceil: 1000,
				step: 10,
				translate: function (value) {
					return '$' + (value == 0 ? value + 1 : value);
				},
				onChange: $scope.myChangeListener
			}
		};

		$scope.distanceSlider = {
			minValue: 0,
			maxValue: 50,
			options: {
				floor: 0,
				ceil: 50,
				step: 1,
				translate: function (value) {
					return value + " km's";
				},
				onChange: $scope.myChangeListener
			}
		};

		$scope.search_bar = function () {			
			$scope.showUpdateBar = false;
			$timeout.cancel(timeoutPromise);
			$scope.show = false;
			$scope.page = 0;

			var price_min = $scope.priceSlider.minValue;
			var price_max = $scope.priceSlider.maxValue;
			var distance_min = $scope.distanceSlider.minValue;
			var distance_max = $scope.distanceSlider.maxValue;
			var task_status = $scope.search.task_status;
			var posted = $scope.search.posted;
			var city = $scope.search.city_name;

			$scope.busyLoadingData = true;

			timeoutPromise = $timeout(function () {
				TasksService.getSearchTasks(
					$scope.search.detailed_search,
					task_status,
					city,
					price_min,
					price_max,
					distance_min,
					distance_max,
					posted,
					$scope.page).then(function (res) {
					$scope.tasks = [];
					$scope.tasks = _.concat($scope.tasks, res.data);
					if (res.data.length == 0) {
						$scope.page = 0;
						$scope.busyLoadingData = true;
					} else {
						$scope.busyLoadingData = false;
					}
				}.bind(this), function (err) {
					console.error(err.statusText + ' at ' + err.config.url);
				});
			}, timeout);
		};

		$scope.loadMore = function () {
			if ($scope.busyLoadingData) return;
			
			$scope.busyLoadingData = true;
			var city = $scope.search.city_name;
			var task_status = $scope.search.task_status;
			var price_min = $scope.priceSlider.minValue;
			var price_max = $scope.priceSlider.maxValue;
			var distance_min = $scope.distanceSlider.minValue;
			var distance_max = $scope.distanceSlider.maxValue;

			TasksService.getSearchTasks(
				$scope.search.detailed_search,
				task_status,
				city,
				price_min,
				price_max,
				distance_min,
				distance_max,
				$scope.search.posted,
				$scope.page_no).then(function (res) {
				$scope.tasks = _.concat($scope.tasks, res.data);
				
				if (res.data.length == 0) {
					$scope.page_no = 1;
					$scope.busyLoadingData = true;
				} else {
					$scope.page_no += 1;
					$scope.busyLoadingData = false;
				}
			}.bind(this), function (err) {
				console.error(err.statusText + ' at ' + err.config.url);
			});

		};


		$scope.$watchCollection('search', function (newVal, oldVal) {
			if (newVal != oldVal) {
				if (typeof newVal.city_name == 'object') {
					newVal.city_name = newVal.city_name.formatted_address;
				}
				$scope.search_bar();
			}
		});

		// Clear Search Form
		$scope.clearSearch = function (search) {
			//Even when you use form = {} it does not work
			search.detailed_search = '';
			search.task_status = 'all';

			$scope.priceSlider.minValue = 0;
			$scope.priceSlider.maxValue = 1000;
			$scope.distanceSlider.minValue = 0;
			$scope.distanceSlider.maxValue = 50;
			search.posted = null;
			search.city_name = userData.location || "Victoria, BC, CA";
			$scope.search_bar();
		}

		function zoomToIncludeMarkers(lat, long) {
			var divHeightOfTheMap = document.getElementById('map_area') ? document.getElementById('map_area').clientHeight : 0;
			var offsetBottom = 0;
			var offsetLeft = 0;
			var bounds = new google.maps.LatLngBounds();
			var latLng = new google.maps.LatLng(lat, long);

			bounds.extend(latLng);
			$scope.map.fitBounds(bounds);
			$scope.map.panToBounds(bounds);
			$scope.map.panBy(-offsetLeft, -(divHeightOfTheMap / 2) - offsetBottom);
		};

		SocketService.on('Task:Added', function () {
			$scope.showUpdateBar = true;
		});

		$rootScope.$on('locationUpdate', function (event, args) {
			zoomToIncludeMarkers(args.latitude, args.longitude);
		});

		$scope.broadcastSlider = function() {
			$scope.$broadcast('reCalcViewDimensions');
		}
	}
})();