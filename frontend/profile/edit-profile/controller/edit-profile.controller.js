(function () {
    'use strict';
    var app = angular.module('taskoli');
    app.controller('EditProfileController', EditProfileController);

    EditProfileController.$inject = ['$scope', '$mdToast', '$uibModal', '$filter', 'EditProfileService', 'siteURL', 'apiURL', '$timeout', 'userData', 'NgMap', 'Upload', '$q', 'filterFilter', 'Categories'];

    function EditProfileController($scope, $mdToast, $uibModal, $filter, EditProfileService, siteURL, apiURL, $timeout, userData, NgMap, Upload, $q, filterFilter, Categories) {

        $scope.current_user_id = userData ? userData.id : 0;
        $scope.apiURL = apiURL;
        $scope.siteURL = siteURL;

        var categories = Categories;

        console.log($scope.current_user_id)
        EditProfileService.user_data($scope.current_user_id).then(function (res) {
            $scope.form.user = res.data['user_info'][0];
            $scope.form.peace_of_mind = res.data['peace_of_mind'][0];
            $scope.form.transportation = res.data['transportation'][0];
            $scope.form.skills = res.data['skills'];
            $scope.form.education = res.data['education'];
            $scope.form.certifications = res.data['certifications'];

        }, function (err) {
            console.error(err.statusText + ' at ' + err.config.url);
        });
        

        $scope.getMatchesForSkills = function (searchText) {
            return filterRecords(searchText, categories.skills);
        }

        // for autcomplete
        $scope.getMatchesForEdu = function (searchText) {
            return filterRecords(searchText, categories.education);
        }

        // for autcomplete
        $scope.getMatchesForCert = function (searchText) {
            return filterRecords(searchText, categories.certifications);
        }

        function filterRecords(text, tags) {
            return _.filter(tags, function (tag) {
                return tag.tag.toLowerCase().includes(text.toLowerCase())
            });
        }
        // Auto Completet Places
        $scope.autocompleteOptions = {
            types: ['address'],
            componentRestrictions: {
                country: 'ca'
            }
        }

        $scope.newTag = function (chip) {
            var returnTag = null;
            if (chip.tag) {
                returnTag = {
                    tag: chip.tag
                };
            } else {
                returnTag = {
                    tag: chip
                };
            }
            return returnTag;
        };

        $scope.form = {
            skills: [],
            education: [],
            certifications: [],
        };

        $scope.upload = function (files) {
            if (files && files.length) {
                if (files) {
                    var taskData = {
                        file: files[0],
                        userprofile: 'profile'
                    }
                    Upload.upload({
                        url: apiURL + '/upload',
                        data: taskData
                    }).then(function (resp) {
                        $scope.form.user.user_image = '/api/file/' + resp.data.filename
                        $scope.log = 'file: ' +
                            resp.config.data.file.name +
                            ', Response: ' + JSON.stringify(resp.data) +
                            '\n' + $scope.log;
                    }, null, function (evt) {
                        var progressPercentage = parseInt(100.0 *
                            evt.loaded / evt.total);
                        $scope.log = 'progress: ' + progressPercentage +
                            '% ' + evt.config.data.file.name + '\n' +
                            $scope.log;
                    });
                }
            }
        }

        $scope.cancelPhoto = function () {
            $scope.imageUrl = null;
            $scope.form.user.user_image = userData.photo;
        }

        $scope.savePhoto = function () {
            EditProfileService.savePhoto($scope.form.user.user_image, $scope.current_user_id).then(function (res) {
                $scope.imageUrl = null;
                $scope.form.user.user_image = res.data.imageUrl;
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('Your Photo updated, Please logout and login again to see effected changes.')
                    .position('top right')
                    .hideDelay(3000)
                );
            });
        }

        $scope.edit_user = function (user, current_user_id) {
            EditProfileService.editProfile(user).then(function (res) {
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('Your Profile updated')
                    .position('top right')
                    .hideDelay(3000)
                );
            }, function (err) {
                console.error(err.statusText + ' at ' + err.config.url);
            });
        }

        $scope.update = function () {
            try {
                var location = {};
                angular.copy($scope.form.user.streetaddress, location);

                var streetAddress = _.find(location.address_components, function (comp) {
                    return comp.types.includes('street_number')
                });
                var route = _.find(location.address_components, function (comp) {
                    return comp.types.includes('route')
                });
                var locality = _.find(location.address_components, function (comp) {
                    return comp.types.includes('locality')
                });
                var prov = _.find(location.address_components, function (comp) {
                    return comp.types.includes('administrative_area_level_1')
                });
                var zip = _.find(location.address_components, function (comp) {
                    return comp.types.includes('postal_code')
                });
                var country = _.find(location.address_components, function (comp) {
                    return comp.types.includes('country')
                });
            
                $scope.form.user.streetaddress = (streetAddress ? streetAddress.short_name : '') + ' ' + (route ? route.short_name : '');
                $scope.form.user.location = (locality ? locality.short_name : '') + ', ' + (prov ? prov.short_name : '') + ' ' + (zip ? zip.short_name.slice(0, 3) : '') + ', ' + country.short_name;
            } catch(err) {
                $scope.form.user.streetaddress= null;
            }
        }

        $scope.$watchCollection('form', function (newVal, oldVal) {
            console.log(newVal)
        });
    } // END of EditProfileController //
})();