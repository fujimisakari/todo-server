# -*- coding: utf-8 -*-


class JSONSchemaViewError(Exception):
    default_message = None

    def __init__(self, validation_errors):
        super(JSONSchemaViewError, self).__init__()
        self.message = self.default_message
        self.validation_errors = validation_errors


class JSONRequestError(JSONSchemaViewError):
    default_message = 'Request Validation Error'


class JSONResponseError(JSONSchemaViewError):
    default_message = 'Response Validation Error'
