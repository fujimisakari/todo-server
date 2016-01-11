'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:ContextController
 * @description
 * # ContextController
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('ContextController', ['$scope', '$routeParams', '$dragon', '$dataHandler', '$location',
                              function ($scope, $routeParams, $dragon, $dataHandler, $location) {
    $scope.$on('syncTodoLists', function(event, data) {
        $scope.todoLists = data;
    });
    $scope.$on('syncTodoItems', function(event, data) {
        $scope.todoItems = data;
    });

    $scope.newTodoItem = {};
    $scope.selectTodoListId = $routeParams['id'];
    $scope.$parent.setTodoListId($scope.selectTodoListId);

    $scope.itemCreate = function(e) {
        if (e.which !== 13) {
            $scope.newTodoItem['todolist_id'] = $scope.selectTodoListId;
            $dragon.create('todo-item', $scope.newTodoItem);
            $scope.newTodoItem = {};
        }
    }

    $scope.itemDone = function(item) {
        item.done = true != item.done;
        $dragon.update('todo-item', item);
    }

    $scope.getTodoList = function(todoListId) {
        return $dataHandler.getDataById($scope.todoLists, todoListId);
    }

    $scope.getTodoItems = function(todoListId) {
        return $dataHandler.getDataListById($scope.todoItems, 'todolist_id', todoListId);
    }

    $scope.isExistByDone = function(dataList) {
        for (var key in dataList) {
            if (dataList[key]['done']) {
                return true;
            }
        }
        return false;
    }

    $scope.isExistByNotDone = function(dataList) {
        for (var key in dataList) {
            if (!dataList[key]['done']) {
                return true;
            }
        }
        return false;
    }

}]);
