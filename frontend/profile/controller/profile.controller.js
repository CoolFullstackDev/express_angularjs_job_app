(function () {
    'use strict';
    var app = angular.module('taskoli');
    app.controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$scope', '$filter', 'ProfileService', 'siteURL', 'apiURL', '$timeout', 'userData', 'NgMap', '$state', '$uibModal', 'profileData'];

    function ProfileController($scope, $filter, ProfileService, siteURL, apiURL, $timeout, userData, NgMap, $state, $uibModal, profileData) {

        $scope.userData = userData;
        $scope.user_id = userData ? userData.id : 0;
        $scope.employer = profileData['task_as_employer'];
        $scope.tasker = profileData['task_as_tasker'];
        $scope.userInfo = profileData['user_info'][0];
        $scope.enterValidation = function () {
            return true;
        };

        //console.log($state.params.id + ' state.params.name');

        if($state.params.id != ""){
            $scope.current_user_id = $state.params.id;
        }else{
            $scope.current_user_id = $scope.user_id;
        }

        // open login modal
        $scope.openLogin = function () {
            var login = ProfileService.loginModal();
            console.log('login')
        }
        
        ProfileService.user_data($scope.current_user_id).then(function (res) {
            var skillData = [];
            var educationData = [];
            var certificationData = [];

            $scope.user = res.data['user_info'][0];
            
            for(var i=0;i<res.data['skills'].length;i++) {
                skillData.push(res.data['skills'][i].tag);
            }

            for(var i=0;i<res.data['education'].length;i++) {
                educationData.push(res.data['education'][i].tag);
            }

            for(var i=0;i<res.data['certifications'].length;i++) {
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

        //for sending message from mytasks mdoal
        $scope.sendMessage = function (userid, size, parentSelector) {
            // append to body on click
            var parentElem = parentSelector ? angular.element($document[0].querySelector('.global-modal ' + parentSelector)) : undefined;

            var messageModal = $uibModal.open({
                animation: false,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'frontend/messages/view/send_message.html',
                controller: 'SingleMessageController',
                resolve: {
                    'userData': ['AccountService', function (AccountService) {
                        if (AccountService.isLoggedIn()) {
                            return AccountService.getSession().then(function (res) {
                                var user = res.data;
                                user.isLoggedin = true;
                                return user;
                            });
                        }
                    }],
                    'sendUserData': function () {
                        return userid;
                    }
                },
                windowClass: 'sendMessage',
                size: 'md',
                appendTo: parentElem,
            });

            messageModal.result.then(function () {
                console.log('on close event, use if required');
            },
            function () {
                console.info('Modal dismissed at: ' + new Date());
            });
        };

        //to hire any tasker
        $scope.hire = function (userid, size, parentSelector) {
            // append to body on click
            var parentElem = parentSelector ? angular.element($document[0].querySelector('.global-modal ' + parentSelector)) : undefined;

            var messageModal = $uibModal.open({
                animation: false,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'frontend/hire/view/hire.html',
                controller: 'HireController',
                windowClass: 'hire',
                scope: $scope,
                size: size,
                appendTo: parentElem,
                resolve: {}
            });

            messageModal.result.then(function () {
                    console.log('on close event, use if required');
                },
                function () {
                    console.info('Modal dismissed at: ' + new Date());
                });
        };
        //};
    } // END of ProfileController //

})();