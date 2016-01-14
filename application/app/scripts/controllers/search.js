'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:ContextController
 * @description
 * # ContextController
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('SearchController', ['$scope', '$routeParams', '$dragon', '$dataHandler', 'customSearch',
                              function ($scope, $routeParams, $dragon, $dataHandler, customSearch) {
    initializeJS();

    $scope.searchWord = $routeParams['searchWord'];

    $scope.todoLists = function() {
        return $dataHandler.todoLists;
    }

    $scope.getTodoItems = function(todoItems) {
        return customSearch.filter(todoItems, $scope.searchWord, 'name');
    }

    $scope.isExist = function(todoItems) {
        var items = customSearch.filter(todoItems, $scope.searchWord, 'name');
        var count = 0;
        for (var itemKey in items) {
            if (!items[itemKey].done) {
                count++;
            }
        }
        return (count > 0) ? true : false;
    }

    $scope.itemDone = function(item) {
        item.done = true != item.done;
        $dragon.update('todo-item', item);
    }

}]);
