# -*- coding: utf-8 -*-

from fabric.api import env, run, sudo
from fabric.context_managers import cd
from fabric.contrib.files import exists


env.hosts = ['www6096uf.sakura.ne.jp']
env.DEPLOY_DIR = '/var/www/'


def graceful():
    sudo('apache2ctl graceful')


def migrate():
    with cd(env.DEPLOY_DIR):
        with cd('todo'):
            run('./manage.py migrate')


def deploy():
    with cd(env.DEPLOY_DIR):
        if not exists('todo'):
            run('sudo -u www-data git clone git@github.com:fujimisakari/todo-server.git todo')

        with cd('todo'):
            run('sudo -u www-data git pull')
            sudo('apache2ctl graceful')
