'use strict';

angular.module('todoApp')
  .factory('$dataHandler', [function () {
    return {
        todoLists: [],
        todoListMap: {},
        todoItems: [],

        formatData: function () {
            this.todoListMap = {};
            for (var listKey in this.todoLists) {
                var items = []
                for (var itemKey in this.todoItems) {
                    if (this.todoItems[itemKey]['todolist_id'] == this.todoLists[listKey]['id']) {
                        items.push(this.todoItems[itemKey]);
                    }
                }
                this.todoLists[listKey]['items'] = items;
                this.todoListMap[this.todoLists[listKey]['id']] = this.todoLists[listKey];
            }
        },

        getTodoListById: function (todoListId) {
            if (todoListId in this.todoListMap) {
                return this.todoListMap[todoListId];
            }
            return {};
        },
    };
}]);

