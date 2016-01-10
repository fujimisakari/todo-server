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
    // $scope.todoList = $scope.$parent.todoList;
    $scope.todoLists = $scope.$parent.todoLists;
    $scope.todoItems = $scope.$parent.todoItems;
    $scope.todoList_id = 0;
    $scope.newTodoItem = {};
    $scope.newTodoItem.text = "";

    if ('id' in $routeParams) {
        $scope.todoList_id = $routeParams['id'];
    }

    // $scope.$on('syncTodoList', function(event, data) {
    //     $scope.todoList = data;
    // });
    $scope.$on('syncTodoLists', function(event, data) {
        $scope.todoLists = data;
    });
    $scope.$on('syncTodoItems', function(event, data) {
        $scope.todoItems = data;
    });

    $scope.itemCreate = function(e) {
        if (e.which !== 13) {
            $scope.newTodoItem['todolist_id'] = $scope.todoList_id;
            $dragon.create('todo-item', $scope.newTodoItem);
            $scope.newTodoItem = {};
        }
    }

    $scope.itemDone = function(item) {
        item.done = true != item.done;
        $dragon.update('todo-item', item);
    }

    $scope.TodolistDelete = function(targetId) {
        var todoItems = $scope.getTodoItems(targetId);
        for (var item in todoItems) {
            $dragon.delete('todo-item', todoItems[item]);
        }
        $dragon.delete('todo-list', $scope.getTodoList(targetId));
        $('.modal-backdrop').remove();
        $location.path('/');
    }

    $scope.getTodoList = function(targetId) {
        return $dataHandler.getDataById($scope.todoLists, targetId);
    }

    $scope.getTodoItems = function(targetId) {
        return $dataHandler.getDataListById($scope.todoItems, 'todolist_id', targetId);
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
