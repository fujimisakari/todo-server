'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:HeaderController
 * @description
 * # HeaderController
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('HeaderController', ['$scope', '$dataHandler', '$location', function ($scope, $dataHandler, $location) {

    $scope.$on('syncSelectTodoListId', function(event, todoListId) {
        $scope.selectTodoListId = todoListId;
    });

    $scope.username = function() {
        return $dataHandler.user['username'];
    }

    $scope.moveToSearchController = function() {
        if ($scope.searchWord) {
            $location.path('search/' + $scope.searchWord);
        } else {
            console.log($scope.selectTodoListId);
            if ($scope.selectTodoListId) {
                $location.path('todolist/' + $scope.selectTodoListId);
            } else {
                $location.path('/');
            }
        }
    }
}]);
