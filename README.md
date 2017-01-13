# Todo Application

## Overview
Todo management site using Django and SwampDragon, AngularJS, Websocket


## How to setup

1\. Prepare an .env file suitable for your environment.
```
$ cp .env.example .env.local
$ vim .env.local
```

2\. Create database and migrate.
```
$ ./env/todo_init.sh local pip
```

3\. Server run as debug.
```
$ cd todo/application

# app server
$ ./manage.py runserver

# websocket server
$ ./server.py
```

