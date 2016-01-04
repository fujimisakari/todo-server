# -*- coding: utf-8 -*-

from __future__ import absolute_import
from __future__ import unicode_literals

from jsonschema.validators import Draft4Validator
from django.conf import settings

from .exceptions import JSONRequestError, JSONResponseError


class JSONSchema(object):

    def __init__(self):
        Draft4Validator.check_schema(self.request)
        self.request_validator = Draft4Validator(self.request)

        Draft4Validator.check_schema(self.response)
        self.response_validator = Draft4Validator(self.response)

    def validate_request(self, obj):
        self._validate(self.request_validator, obj, JSONRequestError)

    def validate_response(self, obj):
        if not getattr(settings, 'DEBUG', False):
            return
        self._validate(self.response_validator, obj, JSONResponseError)

    def _validate(self, validator, obj, error_cls):
        errors = [{'path': self._get_error_path(error), 'reason': error.message}
                  for error in validator.iter_errors(obj)]
        if len(errors) == 0:
            return

        raise error_cls(errors)

    def _get_error_path(self, error):
        paths = []
        try:
            while True:
                paths.append(error.path.pop())
        except IndexError:
            return '.'.join(paths)
