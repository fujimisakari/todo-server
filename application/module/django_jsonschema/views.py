# -*- coding: utf-8 -*-
import json

from django.views.generic.base import View
from django.http import HttpResponse
from django.utils.encoding import smart_text

from .schema import JSONSchema


class _PrettyFormat(object):
    """
    pprint を使うと, utf-8 が文字化ける
    indent も REST の :: と相性が悪い
    """
    indent = 4

    @classmethod
    def pformat(cls, obj, depth=1):
        # pprint を使うと, utf-8 が文字化ける
        # indent も REST の :: と相性が悪い
        depth += 1
        if isinstance(obj, dict):
            return cls._from_dict(obj, depth)
        elif isinstance(obj, list):
            return cls._from_list(obj, depth)
        elif isinstance(obj, basestring):
            return u"'{}'".format(smart_text(obj))
        elif isinstance(obj, (int, float)):
            return u'{}'.format(obj)
        else:
            return u"'{}'".format(repr(obj))

    @classmethod
    def _from_dict(cls, obj, depth):
        indent = u' ' * cls.indent * depth
        close_indent = u' ' * cls.indent * (depth - 1)
        result = u'{\n'
        for k, v in obj.iteritems():
            result += u'{}{}: {},\n'.format(
                indent, cls.pformat(k, depth), cls.pformat(v, depth))
        result += u'{}{}'.format(close_indent, u'}')
        return result

    @classmethod
    def _from_list(cls, obj, depth):
        indent = u' ' * cls.indent * depth
        close_indent = u' ' * cls.indent * (depth - 1)
        result = u'[\n'
        for v in obj:
            result += u'{}{},\n'.format(indent, cls.pformat(v, depth))
        result += u'{}{}'.format(close_indent, u']')
        return result


class _WrappedDocType(type):
    def __init__(cls, name, bases, dct):
        super(_WrappedDocType, cls).__init__(name, bases, dct)
        if not hasattr(cls, 'schema'):
            return

        if hasattr(cls.schema, 'request'):
            cls._add_doc(u'Request', cls.schema.request)

        if hasattr(cls.schema, 'response'):
            cls._add_doc(u'Response', cls.schema.response)

    def _add_doc(cls, title, schema):
        cls.__doc__ = smart_text(cls.__doc__) + u"""
{}
--------

::

    {}
""".format(title, _PrettyFormat.pformat(schema))


class JSONSchemaView(View):
    __metaclass__ = _WrappedDocType

    def __init__(self, **kwargs):
        schema = getattr(self, 'schema', None)
        if not isinstance(schema, JSONSchema):
            raise NotImplementedError('{}.{}.schema'.format(
                self.__module__, self.__class__.__name__))
        super(JSONSchemaView, self).__init__(**kwargs)

    def dispatch(self, request, *args, **kwargs):
        params = self._parse_json_request(request)
        return super(JSONSchemaView, self).dispatch(request, params=params,
                                                    *args, **kwargs)

    def _parse_json_request(self, request):
        if request.method not in ['POST', 'PUT'] or \
           request.META['CONTENT_TYPE'].lower() != 'application/json; charset=utf-8':
            return

        params = json.loads(request.body)
        self.schema.validate_request(params)
        return params

    def render_to_response(self, context, *args, **kwargs):
        self.schema.validate_response(context)
        return HttpResponse(json.dumps(context, ensure_ascii=False),
                            content_type='application/json; charset=UTF-8',
                            *args, **kwargs)
