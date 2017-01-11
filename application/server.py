#!/usr/bin/env python

import os
import sys
import dotenv

from swampdragon.swampdragon_server import run_server

if not os.environ.get('DOCKER'):
    dotenv.load_dotenv(os.path.join(os.path.dirname(__file__), '../.env.local'))

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'settings')

host_port = sys.argv[1] if len(sys.argv) > 1 else None

run_server(host_port=host_port)
