# -*- coding: utf-8 -*-

from swampdragon import route_handler
from swampdragon.route_handler import ModelRouter
from module.todo.models import TodoList, TodoItem
from module.todo.serializers import TodoListSerializer, TodoItemSerializer


class TodoListRouter(ModelRouter):
    route_name = 'todo-list'
    serializer_class = TodoListSerializer
    model = TodoList

    def get_object(self, **kwargs):
        return self.model.objects.get(pk=kwargs['id'])

    def get_query_set(self, **kwargs):
        return self.model.objects.all()


class TodoItemRouter(ModelRouter):
    route_name = 'todo-item'
    serializer_class = TodoItemSerializer
    model = TodoItem

    def get_object(self, **kwargs):
        return self.model.objects.get(pk=kwargs['id'])

    def get_query_set(self, **kwargs):
        return self.model.objects.all()
        # return self.model.objects.filter(todo_list__id=kwargs['list_id'])


route_handler.register(TodoListRouter)
route_handler.register(TodoItemRouter)
