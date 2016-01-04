# -*- coding: utf-8 -*-

from __future__ import absolute_import
from __future__ import unicode_literals

from module.django_jsonschema import JSONSchema
from module.todo.models import TodoList, TodoItem


class TodoListSchema(JSONSchema):
    """
    TodoList
    """
    request = {
        'title': 'TodoList request',
        'description': '',
        'type': 'object',
        'properties': {},
        'additionalProperties': False,
    }

    response = {
        'title': 'TodoList response',
        'description': '',
        'type': 'object',
        'properties': {
            'todolist_list': {
                'type': 'array',
                'items': TodoList.schema(),
            },
        },
        'required': [
            'todolist_list',
        ],
        'additionalProperties': False,
    }


class TodoItemSchema(JSONSchema):
    """
    TodoItem
    """
    request = {
        'title': 'TodoItem request',
        'description': '',
        'type': 'object',
        'properties': {},
        'additionalProperties': False,
    }

    response = {
        'title': 'TodoItem response',
        'description': '',
        'type': 'object',
        'properties': {
            'todoitem_list': {
                'type': 'array',
                'items': TodoItem.schema(),
            },
        },
        'required': [
            'todoitem_list',
        ],
        'additionalProperties': False,
    }
