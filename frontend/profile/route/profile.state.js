(function () {
    'usestrict';

    angular.module('taskoli').config(account);

    account.$inject = ['$stateProvider', '$urlRouterProvider'];

    function account($stateProvider, $urlRouterProvider) {
        // States
        $stateProvider
            .state('profile-common', {
                parent: 'app',
                url: '/users',
                resolve: {
                    'userData': ['AccountService', function (AccountService) {
                        if (AccountService.isLoggedIn()) {
                            return AccountService.getSession().then(function (res) {
                                var user = res.data;
                                user.isLoggedin = true;
                                return user;
                            });
                        }
                    }]
                }
            })
            .state('profile', {
                parent: 'profile-common',
                url: '/profile/:id',
                data: {
                    roles: ['ANY']
                },
                views: {
                    'content@': {
                        templateUrl: '/frontend/profile/view/profile.html',
                        controller: "ProfileController"
                    }
                },
                resolve: {
                    'profileData': ['ProfileService', '$stateParams', function(ProfileService, $stateParams) {
                        return ProfileService.GetUserData($stateParams.id).then(function(res){
                            return res.data;
                        });
                    }]
                }
            })
            .state('my-profile', {
                parent: 'profile-common',
                url: '/me/:id',
                data: {
                    roles: ['LOGGEDIN']
                },
                views: {
                    'content@': {
                        templateUrl: '/frontend/profile/view/profile.html',
                        controller: "ProfileController"
                    }
                },
                resolve: {
                    'profileData': ['ProfileService', 'userData', function(ProfileService, userData) {
                        return ProfileService.GetUserData(userData.id).then(function(res){
                            return res.data;
                        });
                    }]
                }
            })
            .state('edit-profile', {
                parent: 'profile-common',
                url: '/edit',
                views: {
                    'content@': {
                        templateUrl: '/frontend/profile/edit-profile/view/edit-profile.html',
                        controller: "EditProfileController"
                    }
                },
                data: {
                    roles: ['LOGGEDIN']
                },
                resolve: {
                    'Categories': ['EditProfileService', function(EditProfileService) {
                        return EditProfileService.getAllCategories().then(function(res) {
                            return res.data;
                        });
                    }]
                }
            });
    }
})();