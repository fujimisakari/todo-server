'use strict';

angular.module('todoApp')
  .factory('$dataHandler', [function () {
    return {
        user: {},
        todoLists: [],
        todoListMap: {},
        todoItems: [],
        todoItemMap: {},

        formatData: function () {
            this.todoListMap = {};
            this.todoItemMap = {};
            for (var listKey in this.todoLists) {
                var items = []
                for (var itemKey in this.todoItems) {
                    if (this.todoItems[itemKey]['todolist_id'] == this.todoLists[listKey]['id']) {
                        items.push(this.todoItems[itemKey]);
                        this.todoItemMap[this.todoItems[itemKey]['id']] = this.todoItems[itemKey];
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

        getTodoItemById: function (todoItemId) {
            if (todoItemId in this.todoItemMap) {
                return this.todoItemMap[todoItemId];
            }
            return {};
        },
    };
}]);

