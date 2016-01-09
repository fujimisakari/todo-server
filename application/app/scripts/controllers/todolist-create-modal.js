'use strict';

/**
 * @ngdoc function
 * @name TodoApp.controller:TodoListCreateModalCtrl
 * @description
 * # TodoListCreateModalCtrl
 * Controller of the TodoApp
 */
angular.module('TodoApp')
  .controller('TodoListCreateModalCtrl', ['$scope', '$dragon', function ($scope, $dragon) {

    $scope.todoList = {};
    $scope.todoList.name = "";
    $scope.todoList.description = "";

    $scope.create = function() {
        $dragon.create('todo-list', $scope.todoList);
        $scope.todoList = {};
        $('#todoListCreateModal').modal('hide');
    }

    $scope.close = function() {
        $scope.todoList = {};
    }
}]);
