'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:PageController
 * @description
 * # PageController
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('PageController', ['$scope', '$routeParams', '$dragon', function ($scope, $routeParams, $dragon) {
    $scope.todoList = {};
    $scope.todoLists = [];
    $scope.todoItems = [];
    $scope.todoListChannel = 'todoListClient';
    $scope.todoItemChannel = 'todoItemClient';

    $dragon.onReady(function() {
        $dragon.subscribe('todo-list', $scope.todoListChannel, {}).then(function(response) {
            $scope.TodoListMapper = new DataMapper(response.data);
        });

        $dragon.subscribe('todo-item', $scope.todoItemChannel, {}).then(function(response) {
            $scope.todoItemMapper = new DataMapper(response.data);
        });

        $dragon.getSingle('todo-list', {id: 1}).then(function(response) {
            $scope.todoList = response.data;
            $scope.$broadcast('syncTodoList', $scope.todoList);
        });

        $dragon.getList('todo-list', {list_id: 1}).then(function(response) {
            $scope.todoLists = response.data;
            $scope.$broadcast('syncTodoLists', $scope.todoLists);
        });

        $dragon.getList('todo-item', {list_id: 1}).then(function(response) {
            $scope.todoItems = response.data;
            $scope.$broadcast('syncTodoItems', $scope.todoItems);
        });
    });

    $dragon.onChannelMessage(function(channels, message) {
        console.log(channels);
        console.log(message);
        if (indexOf.call(channels, $scope.todoListChannel) > -1) {
            $scope.$apply(function() {
                $scope.TodoListMapper.mapData($scope.todoLists, message);
            });
        }

        if (indexOf.call(channels, $scope.todoItemChannel) > -1) {
            $scope.$apply(function() {
                $scope.todoItemMapper.mapData($scope.todoItems, message);
            });
        }
    });
}]);
