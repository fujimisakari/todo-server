'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:TodoListDeleteModalController
 * @description
 * # TodoListDeleteModalController
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('TodoListDeleteModalController', ['$scope', '$dragon', '$dataHandler', '$location',
                                        function ($scope, $dragon, $dataHandler, $location) {

    $scope.$on('syncTodoLists', function(event, data) {
        $scope.todoLists = data;
    });

    $scope.$on('syncSelectTodoListId', function(event, todoListId) {
        $scope.selectTodoListId = todoListId;
    });

    $scope.getTodoList = function(todoListId) {
        return $dataHandler.getDataById($scope.todoLists, todoListId);
    }

    $scope.getTodoItems = function(todoListId) {
        return $dataHandler.getDataListById($scope.todoItems, 'todolist_id', todoListId);
    }

    $scope.TodolistDelete = function(todoList) {
        var todoItems = $scope.getTodoItems(todoList.id);
        for (var item in todoItems) {
            $dragon.delete('todo-item', todoItems[item]);
        }
        $dragon.delete('todo-list', todoList);
        $('.modal-backdrop').remove();
        $location.path('/');
    }

}]);
