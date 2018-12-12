(function () {
    'use strict';
    angular.module('taskoli').controller('AddTagsController', AddTagsController);

    AddTagsController.$inject = ['$scope', 'tags', 'TasksService', 'currentSkills', '$uibModalInstance', '$mdToast'];

    function AddTagsController($scope, tags, TasksService, currentSkills, $uibModalInstance, $mdToast) {
        $scope.selected = [];
        $scope.preSelected = [];
        $scope.tags = tags || [];
        $scope.toggleAll = toggleAll;
        $scope.toggle = toggle;
        $scope.exists = exists;
        $scope.isChecked = isChecked;
        $scope.isIndeterminate = isIndeterminate;
        $scope.addTags = addTags;
        $scope.checkAllMatches = checkAllMatches;

        fetchCurrentTags();

        function toggleAll() {
            if (!isChecked())
                $scope.selected = angular.copy(tags);
            else
                $scope.selected = [];
        }

        function toggle(tag, selected) {
            if (!exists(tag, selected))
                selected.push(tag);
            else
                selected = _.pull(selected, tag);
        }

        function exists(tag, selected) {
            var foundTag = _.indexOf(selected, tag);
            return foundTag < 0 ? false : true;
        }

        function isChecked() {
            return $scope.selected.length == $scope.tags.length;
        }

        function isIndeterminate() {
            return $scope.selected.length == 0 && $scope.selected.length !== $scope.tags.length;
        }

        function addTags(tags) {
            TasksService.submitTags(tags).then(function(res){
                $mdToast.show(
					$mdToast.simple()
					.textContent('Tags Added to your profile')
					.position('top right')
					.hideDelay(3000)
				);
            }, function(err) {
                $mdToast.show(
					$mdToast.simple()
					.textContent('Sorry, Please try again later')
					.position('top right')
					.hideDelay(3000)
				);
            });
            $uibModalInstance.dismiss();
        }

        function fetchCurrentTags() {
            if (currentSkills.data) {
                $scope.currentTags = _.map(currentSkills.data, function (skill) {
                    return skill.tag;
                });
            }
        }

        function checkAllMatches(tags, preSelected) {
            return _.difference(tags, preSelected).length <= 0;
        }

        function init() {
            if (currentSkills.data) {
                    $scope.preSelected  = _.map(currentSkills.data, function(skill) {return skill.tag;});
            }
        }

        init();
    }
})();