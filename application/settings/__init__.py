# -*- coding: utf-8 -*-

import os

from settings.base_settings import *

if os.environ.get('APP_ENV') == 'local':
    DRAGON_URL = 'http://localhost:9999/'
elif os.environ.get('APP_ENV') == 'dev':
    DRAGON_URL = 'http://ws.dev-fujimisakari.com/'
    SESSION_COOKIE_DOMAIN = '.dev-fujimisakari.com'
    LANGUAGE_COOKIE_DOMAIN = '.dev-fujimisakari.com'
    CSRF_COOKIE_DOMAIN = '.dev-fujimisakari.com'
elif os.environ.get('APP_ENV') == 'production':
    DRAGON_URL = 'http://ws.fujimisakari.com/'
    SESSION_COOKIE_DOMAIN = '.fujimisakari.com'
    LANGUAGE_COOKIE_DOMAIN = '.fujimisakari.com'
    CSRF_COOKIE_DOMAIN = '.fujimisakari.com'
