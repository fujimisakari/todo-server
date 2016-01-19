'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:ContextController
 * @description
 * # ContextController
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('ContextController', ['$scope', '$routeParams', '$dragon', '$dataHandler', '$location',
                              function ($scope, $routeParams, $dragon, $dataHandler, $location) {

    $scope.todoLists = function() {
        return $dataHandler.todoLists;
    }

    initializeJS();
    $scope.newTodoItem = {};
    $scope.selectTodoListId = ('listId' in $routeParams) ? $routeParams['listId'] : 0;
    $scope.$parent.setTodoListId($scope.selectTodoListId);

    if ('itemId' in $routeParams) {
        $scope.todoItem = $dataHandler.getTodoItemById($routeParams['itemId']);
    }

    $scope.itemCreate = function(e) {
        if (e.which !== 13) {
            $scope.newTodoItem['todolist_id'] = $scope.selectTodoListId;
            $dragon.create('todo-item', $scope.newTodoItem);
            $scope.newTodoItem = {};
        }
    }

    $scope.itemDone = function(item) {
        item.done = true != item.done;
        $dragon.update('todo-item', item);
    }

    $scope.isExistByDone = function(todoItems) {
        for (var key in todoItems) {
            if (todoItems[key]['done']) {
                return true;
            }
        }
        return false;
    }

    $scope.isExistByNotDone = function(todoItems) {
        for (var key in todoItems) {
            if (!todoItems[key]['done']) {
                return true;
            }
        }
        return false;
    }

    $scope.showDetail = function(itemListId, itemId) {
        $location.path('todoitem/' + itemListId + '/' + itemId);
    }

}]);
