'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:ItemDetailController
 * @description
 * # ItemDetailController
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('ItemDetailController', ['$scope', '$dragon', '$location', function ($scope, $dragon, $location) {

    $scope.todoItem = $scope.$parent.todoItem;
    $scope.editTodoItem = {};
    $scope.editTodoItem['name'] = $scope.todoItem.name;
    $scope.editTodoItem['note'] = $scope.todoItem.note;

    $scope.redirect = function () {
        if ($scope.$parent.selectTodoListId > 0) {
            $location.path('todolist/' + $scope.$parent.selectTodoListId);
        } else {
            $location.path('/');
        }
    }

    $scope.todoItemEdit = function () {
        $scope.todoItem.name = $scope.editTodoItem.name;
        $scope.todoItem.note = $scope.editTodoItem.note;
        $dragon.update('todo-item', $scope.todoItem);
        $scope.redirect();
    }

    $scope.todoItemDelete = function () {
        $dragon.delete('todo-item', $scope.todoItem);
        $('.modal-backdrop').remove();
        $scope.redirect();
    }

    $scope.todoItemClose = function () {
        $scope.redirect();
    }

}]);
