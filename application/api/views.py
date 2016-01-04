# -*- coding: utf-8 -*-

from __future__ import absolute_import
from __future__ import unicode_literals

from module.django_jsonschema import JSONSchemaView
from module.todo.models import TodoList, TodoItem
from .schema import TodoListSchema, TodoItemSchema


class TodoListView(JSONSchemaView):

    schema = TodoListSchema()

    def get(self, request, params):
        tl = TodoList.objects.get(id=1)
        context = {
            'todolist_list': [tl.to_dict()],
        }
        return self.render_to_response(context)


class TodoItemView(JSONSchemaView):

    schema = TodoItemSchema()

    def get(self, request, params):
        ti = TodoItem.objects.get(id=1)
        context = {
            'todoitem_list': [ti.to_dict()],
        }
        return self.render_to_response(context)
