'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:PageController
 * @description
 * # PageController
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('PageController', ['$scope', '$dragon', '$dataHandler',
                                 function ($scope, $dragon, $dataHandler) {
    $scope.selectTodoListId = 0;
    $scope.todoListChannel = 'todoListClient';
    $scope.todoItemChannel = 'todoItemClient';

    $scope.setTodoListId = function(todoListId) {
        $scope.selectTodoListId = todoListId;
        $scope.$broadcast('syncSelectTodoListId', $scope.selectTodoListId);
    };

    $dragon.onReady(function() {
        $dragon.subscribe('todo-list', $scope.todoListChannel, {}).then(function(response) {
            $scope.TodoListMapper = new DataMapper(response.data);
        });

        $dragon.subscribe('todo-item', $scope.todoItemChannel, {}).then(function(response) {
            $scope.todoItemMapper = new DataMapper(response.data);
        });

        $dragon.getList('todo-list', {list_id: 1}).then(function(response) {
            $dataHandler.todoLists = response.data;
        });

        $dragon.getList('todo-item', {list_id: 1}).then(function(response) {
            $dataHandler.todoItems = response.data;
            $dataHandler.formatData();
        });
    });

    $dragon.onChannelMessage(function(channels, message) {
        if (indexOf.call(channels, $scope.todoListChannel) > -1) {
            $scope.$apply(function() {
                $scope.TodoListMapper.mapData($dataHandler.todoLists, message);
            });
        }

        if (indexOf.call(channels, $scope.todoItemChannel) > -1) {
            $scope.$apply(function() {
                $scope.todoItemMapper.mapData($dataHandler.todoItems, message);
            });
        }

        $scope.$apply(function() {
            $dataHandler.formatData();
        });
    });

}]);
