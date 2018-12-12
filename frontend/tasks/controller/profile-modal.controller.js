(function () {
    'use strict';
    var app = angular.module('taskoli');
    app.controller('ProfileModalController', ProfileModalController);
    ProfileModalController.$inject = ['$scope', '$stateParams', 'toastr', '$filter', 'ProfileService', 'siteURL', 'apiURL', '$timeout', 'NgMap', '$state', '$uibModalInstance'];

    function ProfileModalController($scope, $stateParams, toastr, $filter, ProfileService, siteURL, apiURL, $timeout, NgMap, $state, $uibModalInstance) {

       // $scope.userData = userData;
        $scope.enterValidation = function () {
            return true;
        };
        $scope.current_user_id = $state.params.name;
        
        ProfileService.GetUserData($scope.current_user_id).then(function (res) {
            $scope.employer = res.data['task_as_employer'];
            $scope.tasker = res.data['task_as_tasker'];
            $scope.userInfo = res.data['user_info'][0];
            //$scope.tracked_tasks = $scope.CurrentUserData[0].track_tasks;
        }, function (err) {
            console.error(err.statusText + ' at ' + err.config.url);
        });

        ProfileService.user_data($scope.current_user_id).then(function (res) {
            var skillData = [];
            var educationData = [];
            var certificationData = [];

            $scope.user = res.data['user_info'][0];

            for (var i = 0; i < res.data['skills'].length; i++) {
                skillData.push(res.data['skills'][i].tag);
            }

            for (var i = 0; i < res.data['education'].length; i++) {
                educationData.push(res.data['education'][i].tag);
            }

            for (var i = 0; i < res.data['certifications'].length; i++) {
                certificationData.push(res.data['certifications'][i].tag);
            }

            $scope.skills = skillData;
            $scope.education = educationData;
            $scope.certifications = certificationData;
            $scope.piece_of_mind = res.data.peace_of_mind[0];
            $scope.transportation = res.data.transportation[0];
        }, function (err) {
            console.error(err.statusText + ' at ' + err.config.url);
        });

        $scope.viewReviews = function(id) {
            $uibModalInstance.dismiss('state change');
            $timeout(function() { 
                $state.go('profile', {'#': 'reviews', id: id}, {reload: true, location: 'replace'});
            }, 200);
        }

        $scope.viewProfile = function(user) {
            $uibModalInstance.dismiss('state change');
            $timeout(function() { 
                $state.go('profile', {id: user.id}, {reload: true, location: 'replace'});
            }, 200);
        }

        $scope.viewTask = function(id) {
            $uibModalInstance.dismiss('state change');
            $timeout(function() { 
                $state.go('task', {id: id}, {reload: true, location: 'replace'});
            }, 200);
        }
        //};
    } // END of ProfileModalController //

})();