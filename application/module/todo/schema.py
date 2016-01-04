# -*- coding: utf-8 -*-

from module.django_jsonschema import JSONSchemaModel


class TodoListSchemaMixin(JSONSchemaModel):

    schema_base = {
        'title': 'todo list',
        'description': '',
        'type': 'object',
        'properties': {
            'id': {
                'type': 'integer',
            },
            'name': {
                'type': 'string',
            },
            'description': {
                'type': 'string',
            },
        },
    }

    def to_dict(self):
        name_list = ['id', 'name', 'description']
        return {x: getattr(self, x) for x in name_list}


class TodoItemSchemaMixin(JSONSchemaModel):

    schema_base = {
        'title': 'todo item',
        'description': '',
        'type': 'object',
        'properties': {
            'id': {
                'type': 'integer',
            },
            'text': {
                'type': 'string',
            },
        },
    }

    def to_dict(self):
        name_list = ['id', 'text']
        return {x: getattr(self, x) for x in name_list}
