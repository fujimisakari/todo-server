# -*- coding: utf-8 -*-

from django.db import models
from swampdragon.models import SelfPublishModel
from .schema import TodoListSchemaMixin, TodoItemSchemaMixin
from .serializers import TodoListSerializer, TodoItemSerializer


class TodoList(SelfPublishModel, TodoListSchemaMixin, models.Model):
    serializer_class = TodoListSerializer
    name = models.CharField(max_length=100)
    description = models.TextField(u'説明', blank=True, null=True)
    created_at = models.DateTimeField(u'作成日時', auto_now_add=True)
    updated_at = models.DateTimeField(u'更新日時', auto_now=True)


class TodoItem(SelfPublishModel, TodoItemSchemaMixin, models.Model):
    serializer_class = TodoItemSerializer
    text = models.CharField(max_length=100)
    todolist_id = models.IntegerField()
    done = models.BooleanField(default=False)
    created_at = models.DateTimeField(u'作成日時', auto_now_add=True)
    updated_at = models.DateTimeField(u'更新日時', auto_now=True)
