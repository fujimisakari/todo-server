var TodoControllers = angular.module('TodoControllers', []);

TodoControllers.controller('TodoListCtrl', ['$scope', '$dragon', function ($scope, $dragon) {
    $scope.todoList = {};
    $scope.todoItems = [];
    $scope.channel = 'todos';

    $dragon.onReady(function() {
        $dragon.subscribe('todo-item', $scope.channel, {todo_list__id: 1}).then(function(response) {
            $scope.dataMapper = new DataMapper(response.data);
        });

        $dragon.getSingle('todo-list', {id:1}).then(function(response) {
            $scope.todoList = response.data;
        });

        $dragon.getList('todo-item', {list_id:1}).then(function(response) {
            $scope.todoItems = response.data;
        });
    });

    $dragon.onChannelMessage(function(channels, message) {
        if (indexOf.call(channels, $scope.channel) > -1) {
            $scope.$apply(function() {
                $scope.dataMapper.mapData($scope.todoItems, message);
            });
        }
    });

    $scope.itemDone = function(item) {
        item.done = true != item.done;
        $dragon.update('todo-item', item);
    }
}]);
