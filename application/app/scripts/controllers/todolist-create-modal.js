'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:TodoListCreateModalController
 * @description
 * # TodoListCreateModalController
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('TodoListCreateModalController', ['$scope', '$dragon', function ($scope, $dragon) {

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
