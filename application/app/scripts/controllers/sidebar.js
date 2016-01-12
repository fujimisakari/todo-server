'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:SidebarController
 * @description
 * # SidebarController
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('SidebarController', ['$scope', '$dataHandler', function ($scope, $dataHandler) {

    $scope.todoLists = function() {
        return $dataHandler.todoLists;
    }

    $scope.getTodoItemsCount = function(todoItems) {
        var count = 0;
        for (var key in todoItems) {
            if (!todoItems[key]['done']) {
                count++;
            }
        }
        return count;
    }

    $scope.getAllTodoItemsCount = function() {
        var count = 0;
        for (var key in $dataHandler.todoItems) {
            if (!$dataHandler.todoItems[key]['done']) {
                count++;
            }
        }
        return count;
    }

}]);
