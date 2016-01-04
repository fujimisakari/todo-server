# -*- coding: utf-8 -*-


class JSONSchemaModel(object):

    schema_base = {}

    @classmethod
    def schema(cls, null=False):
        result = {
            'type': 'object',
            'additionalProperties': False,
        }
        result.update(cls.schema_base)

        if null:
            result['type'] = ['object', 'null']

        result = cls._add_required(result)

        return result

    @classmethod
    def _add_required(cls, result):

        if result['type'] == 'array':
            result['items'] = cls._add_required(result['items'])

        elif result['type'] == 'object':
            if 'required' not in result:
                # required追加
                result['required'] = result['properties'].keys()

            if 'additionalProperties' not in result:
                # additionalProperties追加
                result['additionalProperties'] = False

            for key, value in result['properties'].items():
                result['properties'][key] = cls._add_required(value)

        return result
