# -*- coding: utf-8 -*-

from django.shortcuts import redirect


class AuthenticationMiddleware(object):

    def process_request(self, request):
        if request.user.is_authenticated():
            if request.path.startswith('/login'):
                return redirect('/')
        else:
            if not request.path.startswith('/login'):
                return redirect('login')
