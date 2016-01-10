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

    $scope.$on('syncTodoLists', function(event, data) {
        $scope.todoLists = data;
    });
    $scope.$on('syncTodoItems', function(event, data) {
        $scope.todoItems = data;
    });
    $scope.$on('syncSelectTodoListId', function(event, todoListId) {
        $scope.selectTodoListId = todoListId;
    });

    $scope.getTodoItemsCount = function(targetId) {
        var todoItems = $dataHandler.getDataListById($scope.todoItems, 'todolist_id', targetId);
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
        for (var key in $scope.todoItems) {
            if (!$scope.todoItems[key]['done']) {
                count++;
            }
        }
        return count;
    }

}]);
