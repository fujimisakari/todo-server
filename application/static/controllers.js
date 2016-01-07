var TodoControllers = angular.module('TodoControllers', []);

TodoControllers.controller('TodoListCtrl', ['$scope', '$dragon', function ($scope, $dragon) {
    $scope.todoList = {};
    $scope.todoLists = [];
    $scope.todoItems = [];
    $scope.todoListChannel = 'todoListClient';
    $scope.todoItemChannel = 'todoItemClient';

    $dragon.onReady(function() {
        $dragon.subscribe('todo-list', $scope.todoListChannel, {}).then(function(response) {
            $scope.TodoListMapper = new DataMapper(response.data);
        });

        $dragon.subscribe('todo-item', $scope.todoItemChannel, {todo_list__id: 1}).then(function(response) {
            $scope.todoItemMapper = new DataMapper(response.data);
        });

        $dragon.getSingle('todo-list', {id:1}).then(function(response) {
            $scope.todoList = response.data;
        });

        $dragon.getList('todo-list', {list_id:1}).then(function(response) {
            $scope.todoLists = response.data;
        });

        $dragon.getList('todo-item', {list_id:1}).then(function(response) {
            $scope.todoItems = response.data;
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

    $scope.itemDone = function(item) {
        item.done = true != item.done;
        $dragon.update('todo-item', item);
    }
}]);
