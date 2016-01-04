# -*- coding: utf-8 -*-

from django.db import models
from swampdragon.models import SelfPublishModel
from .schema import TodoListSchemaMixin, TodoItemSchemaMixin
from .serializers import TodoListSerializer, TodoItemSerializer


class TodoList(SelfPublishModel, TodoListSchemaMixin, models.Model):
    serializer_class = TodoListSerializer
    name = models.CharField(max_length=100)
    description = models.TextField()


class TodoItem(SelfPublishModel, TodoItemSchemaMixin, models.Model):
    serializer_class = TodoItemSerializer
    todo_list = models.ForeignKey(TodoList)
    done = models.BooleanField(default=False)
    text = models.CharField(max_length=100)
