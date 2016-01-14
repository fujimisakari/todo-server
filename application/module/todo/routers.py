# -*- coding: utf-8 -*-

from swampdragon import route_handler
from swampdragon.route_handler import ModelRouter
from module.todo.models import TodoList, TodoItem
from module.todo.serializers import UserSerializer, TodoListSerializer, TodoItemSerializer


class UserRouter(ModelRouter):
    route_name = 'user'
    serializer_class = UserSerializer

    def get_object(self, **kwargs):
        return self.connection.user

    def get_query_set(self, **kwargs):
        pass


class TodoListRouter(ModelRouter):
    route_name = 'todo-list'
    serializer_class = TodoListSerializer
    model = TodoList

    def get_initial(self, verb, **kwargs):
        kwargs['user_id'] = self.connection.user.id
        return kwargs

    def get_object(self, **kwargs):
        user_list = self.model.objects.filter(id=kwargs['id'], user_id=self.connection.user.id)
        return user_list[0] if user_list else None

    def get_query_set(self, **kwargs):
        user_id = self.connection.user.id
        return self.model.objects.filter(user_id=user_id)


class TodoItemRouter(ModelRouter):
    route_name = 'todo-item'
    serializer_class = TodoItemSerializer
    model = TodoItem

    def get_initial(self, verb, **kwargs):
        kwargs['user_id'] = self.connection.user.id
        return kwargs

    def get_object(self, **kwargs):
        user_list = self.model.objects.filter(id=kwargs['id'], user_id=self.connection.user.id)
        return user_list[0] if user_list else None

    def get_query_set(self, **kwargs):
        user_id = self.connection.user.id
        return self.model.objects.filter(user_id=user_id)


route_handler.register(UserRouter)
route_handler.register(TodoListRouter)
route_handler.register(TodoItemRouter)
