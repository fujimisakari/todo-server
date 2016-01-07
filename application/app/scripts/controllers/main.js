'use strict';

/**
 * @ngdoc function
 * @name yoProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoProjectApp
 */
angular.module('yoProjectApp')
  .controller('MainCtrl', ['$scope', '$routeParams', '$dragon', function ($scope, $routeParams, $dragon) {
    // $scope.todoList = $scope.$parent.todoList;
    $scope.todoLists = $scope.$parent.todoLists;
    $scope.todoItems = $scope.$parent.todoItems;
    $scope.target_id = 0;

    if ('id' in $routeParams) {
        $scope.target_id = $routeParams['id'];
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

    $scope.itemDone = function(item) {
        item.done = true != item.done;
        $dragon.update('todo-item', item);
    }
}]);
