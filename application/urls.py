# -*- coding: utf-8 -*-

from django.conf.urls import include, url
from django.contrib import admin
from django.views.generic import TemplateView

urlpatterns = [
    url(r'^$', TemplateView.as_view(template_name='index.html'), name='index'),
    url(r'^login', 'django.contrib.auth.views.login', kwargs={'template_name': 'login.html'}, name='login'),
    url(r'^logout', 'django.contrib.auth.views.logout_then_login', kwargs={'login_url': 'login'}, name='logout'),
    url(r'^admin/', include(admin.site.urls)),
]
