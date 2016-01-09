'use strict';

/**
 * @ngdoc function
 * @name TodoApp.controller:TodoListEditModalCtrl
 * @description
 * # TodoListEditModalCtrl
 * Controller of the TodoApp
 */
angular.module('TodoApp')
  .controller('TodoListEditModalCtrl', ['$scope', '$dragon', '$dataHandler',
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
