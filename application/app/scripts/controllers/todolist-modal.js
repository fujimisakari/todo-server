'use strict';

/**
 * @ngdoc function
 * @name TodoApp.controller:TodoListModalCtrl
 * @description
 * # TodoListModalCtrl
 * Controller of the TodoApp
 */
angular.module('TodoApp')
  .controller('TodoListModalCtrl', ['$scope', '$dragon', function ($scope, $dragon) {

      //init
      $scope.todoList = {};
      $scope.todoList.name = "";
      $scope.todoList.description = "";

      $scope.create = function() {
          $dragon.create('todo-list', $scope.todoList);
          $scope.todoList = {};
          $('#todoListModal').modal('hide');
      }

      $scope.close = function() {
          $scope.todoList = {};
      }
}]);
