# -*- coding: utf-8 -*-

from django.contrib import admin
from module.todo.models import TodoList, TodoItem

admin.site.register(TodoList)
admin.site.register(TodoItem)
