# -*- coding: utf-8 -*-

import platform

from settings.base_settings import *

if platform.system() == 'Darwin':
    DRAGON_URL = 'http://localhost:9999/'
else:
    DRAGON_URL = 'http://ws.fujimisakari.com/'
    SESSION_COOKIE_DOMAIN = '.fujimisakari.com'
    LANGUAGE_COOKIE_DOMAIN = '.fujimisakari.com'
    CSRF_COOKIE_DOMAIN = '.fujimisakari.com'
