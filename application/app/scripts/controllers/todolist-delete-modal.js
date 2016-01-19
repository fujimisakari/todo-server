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

    $scope.$on('syncSelectTodoListId', function(event, todoListId) {
        $scope.selectTodoListId = todoListId;
    });

    $scope.todoLists = function() {
        return $dataHandler.todoLists;
    }

    $scope.TodolistDelete = function(todoList) {
        for (var key in todoList.items) {
            $dragon.delete('todo-item', todoList.items[key]);
        }
        $dragon.delete('todo-list', todoList);
        $('.modal-backdrop').remove();
        $location.path('/');
    }

}]);
