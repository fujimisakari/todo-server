# -*- coding: utf-8 -*-

from swampdragon.serializers.model_serializer import ModelSerializer


class UserSerializer(ModelSerializer):

    class Meta:
        model = 'auth.User'
        publish_fields = ('username',)


class TodoListSerializer(ModelSerializer):

    class Meta:
        model = 'todo.TodoList'
        publish_fields = ('name', 'description')
        update_fields = ('name', 'description')


class TodoItemSerializer(ModelSerializer):

    class Meta:
        model = 'todo.TodoItem'
        publish_fields = ('todolist_id', 'done', 'name', 'updated_at')
        update_fields = ('todolist_id', 'done', 'name')
