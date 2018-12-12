(function () {
	'use strict';
	var app = angular.module('taskoli');

	app.controller('TaskController', TaskController);
	TaskController.$inject = ['$rootScope', '$scope', '$stateParams', 'TasksService', 'taskData', '$uibModal', 'userData', 'NgMap', '$timeout', '$uibModalStack', '$mdToast', '$state', 'ProfileService', 'userTrackedTasks', 'SocketService'];

	function TaskController($rootScope, $scope, $stateParams, TasksService, taskData, $uibModal, userData, NgMap, $timeout, $uibModalStack, $mdToast, $state, ProfileService, userTrackedTasks, SocketService) {
		$scope.currTaskID = $stateParams.id;
		$scope.selectedData = taskData;
		$scope.userData = userData;
		$scope.transBG = false;
		var userID = userData ? userData.id : 0;

		$scope.myTasks = function (popup_type, itemClicked, size, user_id, parentSelector) {
			$scope.user_id = user_id;
			$scope.itemClicked = itemClicked;
			$scope.popup_type = popup_type;

			var mytasksmodal = $uibModal.open({
				animation: false,
				ariaLabelledBy: 'modal-title',
				ariaDescribedBy: 'modal-body',
				templateUrl: '/frontend/mytask/employer/view/employer.html',
				controller: 'MyTasksEmployerController',
				windowClass: 'my_task_popup',
				scope: $scope,
				size: size,
				resolve: {
					'userData': function () {
						return userData;
					},
					'user_id': function () {
						return user_id;
					}
				}
			});

			mytasksmodal.result.then(function (itemClicked) {
					console.log('on close event, use if required');
				},
				function () {
					console.info('Modal dismissed at: ' + new Date());
				});
		};

		if (userTrackedTasks) {
			$scope.currentTrackedTasks = userTrackedTasks.split(',');
		}
		// Track Task
		$scope.trackTaskTitle = 'Track Task';
		$scope.trackTask = function (taskID) {
			//$scope.post_data = tasks;
			//console.log('taskID ' + taskID + ' ' + current_user_id);
			TasksService.TrackTask(taskID, userData.id).then(function (res) {
				$mdToast.show(
					$mdToast.simple()
					.textContent('Task Tracked Successfully')
					.position('top right')
					.hideDelay(3000)
				);
				$scope.disabledBtn = true;
				$scope.trackTaskTitle = 'Task Tracked';

			}, function (err) {
				console.error(err.statusText + ' at ' + err.config.url);
			});
		};

		// Ask Question
		$scope.askQuestion = function (taskID, from, taskBy, message) {
			TasksService.AskQuestion(taskID, from, taskBy, message).then(function (res) {
				SocketService.emit('notification:added', taskBy);
				$mdToast.show(
					$mdToast.simple()
					.textContent('Your Question has been asked')
					.position('top right')
					.hideDelay(3000)
				);
				$uibModalStack.dismissAll();

			}, function (err) {
				console.error(err.statusText + ' at ' + err.config.url);
			});
			$state.go($state.current, $stateParams, {
				reload: 'task'
			})
		};

		// Make Offer
		$scope.makerOffer = {
			templateUrl: '/frontend/tasks/view/make_offers.html',
			isOpen: false,
			open: function open() {
				$scope.makerOffer.isOpen = true;
			},
			//title: 'Make Your Offer'
		};


		// Make Offer
		$scope.makeOffer = function (taskID, offerBy, make_offer) {
			TasksService.MakeOffer(taskID, offerBy, make_offer).then(function (res) {
				SocketService.emit('notification:added', offerBy);
				$mdToast.show(
					$mdToast.simple()
					.textContent('Offer Submitted Successfully')
					.position('top right')
					.hideDelay(3000)
				);
				$scope.makerOffer.isOpen = false;
			}, function (err) {
				console.error(err.statusText + ' at ' + err.config.url);
			});
			$state.go($state.current, $stateParams, {
				reload: 'task',
				inherit: true
			})
		};

		// open global mytask
		$scope.my_tasks_as_amployer = function (user_id, itemClicked, size, parentSelector) {
			$uibModalStack.dismissAll();
			var itemClicked = itemClicked;
			$scope.user_id = userData ? userData.id : 0;
			$scope.itemClicked = itemClicked;
			var mytasksmodal = $uibModal.open({
				animation: false,
				ariaLabelledBy: 'modal-title',
				ariaDescribedBy: 'modal-body',
				templateUrl: '/frontend/mytask/employer/view/employer.html',
				controller: 'MyTasksEmployerController',
				windowClass: 'my_task_popup',
				scope: $scope,
				size: 'lg',
				resolve: {
					'userData': function () {
						return userData;
					},
					'user_id': function () {
						return user_id;
					}
				}
			});

			mytasksmodal.result.then(function (itemClicked) {
				console.log('on close event, use if required');
			}, function () {
				console.info('Modal dismissed at: ' + new Date());
			});
		};

		// open global mytask
		$scope.my_tasks_as_tasker = function (user_id, itemClicked, size, parentSelector) {
			$uibModalStack.dismissAll();
			var itemClicked = itemClicked;
			$scope.user_id = userData ? userData.id : 0;
			$scope.itemClicked = itemClicked;
			var mytasksmodal = $uibModal.open({
				animation: false,
				ariaLabelledBy: 'modal-title',
				ariaDescribedBy: 'modal-body',
				templateUrl: '/frontend/mytask/tasker/view/tasker.html',
				controller: 'MyTasksTaskerController',
				windowClass: 'my_task_popup',
				scope: $scope,
				size: 'lg',
				resolve: {
					'userData': function () {
						return userData;
					},
					'user_id': function () {
						return user_id;
					}
				}
			});

			mytasksmodal.result.then(function (itemClicked) {
				console.log('on close event, use if required');
			}, function () {
				console.info('Modal dismissed at: ' + new Date());
			});
		};

		// Question ans chat 
		$scope.submitChat = function (taskID, from, task_by, reply_to, chat) {
			TasksService.chatSubmit(taskID, from, task_by, reply_to, chat).then(function (res) {
				$mdToast.show(
					$mdToast.simple()
					.textContent('Your Reply Submitted Successfully')
					.position('top right')
					.hideDelay(3000)
				);
				$uibModalStack.dismissAll();
			}, function (err) {
				console.error(err.statusText + ' at ' + err.config.url);
			});
		};

		$scope.cancel = function () {
			$uibModalStack.dismissAll({
				$value: 'cancel'
			});
		};

		$scope.ask_question = function (userid, size, parentSelector) {
			// append to body on click
			//console.log(userid+' userid ask_question');

			var questionModal = $uibModal.open({
				animation: false,
				keyboard: true,
				ariaLabelledBy: 'modal-title',
				ariaDescribedBy: 'modal-body',
				templateUrl: '/frontend/tasks/view/ask_question.html',
				//controller: 'TasksController',
				windowClass: 'askquestion',
				scope: $scope,
				size: size,
				resolve: {
					'userData': function () {
						return userData;
					}
				}
			});

			questionModal.result.then(function () {
					console.log('on close event, use if required');
				},
				function () {
					console.info('Modal dismissed at: ' + new Date());
				});
		};


		//to hire any tasker
		$scope.hire = function (bidData, size, parentSelector) {
			// append to body on click
			var parentElem = parentSelector ? angular.element($document[0].querySelector('.global-modal ' + parentSelector)) : undefined;
			TasksService.getBidByID(bidData.bid_id).then(function (res) {
				var messageModal = $uibModal.open({
					animation: false,
					ariaLabelledBy: 'modal-title',
					ariaDescribedBy: 'modal-body',
					templateUrl: '/frontend/hire/view/hire.html',
					controller: 'HireController',
					windowClass: 'hire',
					scope: $scope,
					size: size,
					appendTo: parentElem,
					resolve: {
						'updateBidData': function () {
							return res.data[0];
						}
					}
				});

				messageModal.result.then(function () {
						console.log('on close event, use if required');
					},
					function () {
						console.info('Modal dismissed at: ' + new Date());
					});
			}, function (err) {
				console.error(err.statusText + ' at ' + err.config.url);
			});
		};

		$scope.qs_ans_chat = function (question, size, parentSelector) {
			// append to body on click
			$scope.question_data = question;

			TasksService.get_chat($scope.question_data.id).then(function (res) {
				$scope.chat_data = res.data;
			}, function (err) {
				console.error(err.statusText + ' at ' + err.config.url);
			});

			var questionModal = $uibModal.open({
				animation: false,
				ariaLabelledBy: 'modal-title',
				ariaDescribedBy: 'modal-body',
				templateUrl: '/frontend/tasks/view/qs_ans_chat.html',
				//controller: 'TasksController',
				windowClass: 'qsAnsChat',
				scope: $scope,
				size: size,
				resolve: {
					'userData': function () {
						return userData;
					}
				}
			});

			questionModal.result.then(function () {
					//console.log('on close event, use if required');
				},
				function () {
					console.info('Modal dismissed at: ' + new Date());
				});
		};

		// open login modal
		$scope.openLogin = function () {
			var login = ProfileService.loginModal();
			console.log('login')
		}

		$scope.isDatePassed = function (date) {
			return new Date(date) < new Date();
		}

		// open global Edit task
		$scope.editTask = function (task_id, size, post_status) {
			if (post_status) {
				post_status = 'repost';
			} else {
				post_status = 'edit_task';
			}
			if (userData) {
				var mytasksmodal = $uibModal.open({
					animation: false,
					ariaLabelledBy: 'modal-title',
					ariaDescribedBy: 'modal-body',
					templateUrl: '/frontend/editTask/view/editTask.html',
					bindToController: true,
					controller: 'EditTaskController',
					windowClass: 'post_task',
					scope: $scope,
					size: 'lg',
					resolve: {
						'userData': function () {
							return userData;
						},
						post_status: function () {
							return post_status;
						},
						task_id: function () {
							return task_id;
						},
						'Categories': ['MainService', function (MainService) {
							return MainService.getskills().then(function (res) {
								return res.data;
							});
						}]

					}
				});
				mytasksmodal.result.then(function () {
					console.log('on close event, use if required');
				}, function () {
					console.info('Modal dismissed at: ' + new Date());
				});
			} else {
				app.openLogin();
			}
		};

		$scope.openAddTagsModal = function (tags) {
			$uibModal.open({
				animation: false,
				ariaLabelledBy: 'modal-title',
				ariaDescribedBy: 'modal-body',
				templateUrl: '/frontend/tasks/view/add_tags.html',
				bindToController: true,
				controller: 'AddTagsController',
				windowClass: 'tags',
				scope: $scope,
				size: 'lg',
				resolve: {
					userData: function () {
						return userData;
					},
					tags: function () {
						return tags;
					}, 
					currentSkills: function() {
						return ProfileService.getUserSkills();
					}
				}
			});
		}

		$timeout(function () {
			$rootScope.$emit("locationUpdate", taskData.selectedData.task);
		}, 2500);
	}
})();