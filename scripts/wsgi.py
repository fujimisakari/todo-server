# -*- coding: utf-8 -*-

import os
import sys

# import newrelic.agent
from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'application.settings')

paths = ('../application',)
current_path = os.path.dirname(__file__)
for path in paths:
    sys.path.insert(0, os.path.abspath(os.path.join(current_path, path)))

# newrelic.agent.initialize('/etc/newrelic/otherbu.ini')

application = get_wsgi_application()
# application = newrelic.agent.WSGIApplicationWrapper(application)
