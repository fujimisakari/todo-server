# -*- coding: utf-8 -*-

from swampdragon.serializers.model_serializer import ModelSerializer


class TodoListSerializer(ModelSerializer):

    class Meta:
        model = 'todo.TodoList'
        publish_fields = ('name', 'description')


class TodoItemSerializer(ModelSerializer):

    class Meta:
        model = 'todo.TodoItem'
        publish_fields = ('todolist_id', 'done', 'text')
        update_fields = ('done', )
