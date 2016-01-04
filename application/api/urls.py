# -*- coding: utf-8 -*-

from django.conf.urls import url
from .views import TodoListView, TodoItemView

urlpatterns = [
    url(r'^todolist$', TodoListView.as_view()),
    url(r'^todoitem$', TodoItemView.as_view()),
]
