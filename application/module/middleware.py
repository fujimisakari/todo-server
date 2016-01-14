# -*- coding: utf-8 -*-

from django.shortcuts import redirect


class AuthenticationMiddleware(object):

    def process_request(self, request):
        if request.path == '/' and not request.user.is_authenticated():
            return redirect('login')
