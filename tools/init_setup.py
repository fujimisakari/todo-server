#! /usr/bin/env python
# -*- coding:utf-8 -*-

import os
from os import system
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "settings")

db_name = 'todo'
db_user = 'root'

system("echo 'DB setup'")
system("echo \"DROP DATABASE IF EXISTS {};\" | mysql -u{}".format(db_name, db_user))
system("echo \"CREATE DATABASE {} DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;\" | mysql -u{}".format(db_name, db_user))
system("python ./manage.py migrate")
system("echo 'DB Initialzing was completed'")
