'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:TodoListEditModalController
 * @description
 * # TodoListEditModalController
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('TodoListEditModalController', ['$scope', '$dragon', '$dataHandler',
                                        function ($scope, $dragon, $dataHandler) {

    $scope.$on('syncSelectTodoListId', function(event, todoListId) {
        $scope.selectTodoListId = todoListId;
    });

    $scope.todoLists = function() {
        return $dataHandler.todoLists;
    }

    $scope.editTodoList = {};

    $scope.setTodoList = function(todoList) {
        $scope.editTodoList.name = todoList.name;
        $scope.editTodoList.description = todoList.description;
    }

    $scope.edit = function(todoList) {
        todoList.name = $scope.editTodoList.name;
        todoList.description = $scope.editTodoList.description;
        $dragon.update('todo-list', todoList);
        $('#todoListEditModal').modal('hide');
    }
}]);
