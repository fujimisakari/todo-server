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
    $scope.todoList = {};
    $scope.todoList.name = "";
    $scope.todoList.description = "";

    $scope.setTodoList = function(targetId) {
        var todoList = $dataHandler.getDataById($scope.$parent.todoLists, targetId);
        $scope.todoList.name = todoList.name;
        $scope.todoList.description = todoList.description;
    }

    $scope.edit = function(targetId) {
        var todoList = $dataHandler.getDataById($scope.$parent.todoLists, targetId);
        todoList.name = $scope.todoList.name;
        todoList.description = $scope.todoList.description;
        $dragon.update('todo-list', todoList);
        $('#todoListEditModal').modal('hide');
    }
}]);
