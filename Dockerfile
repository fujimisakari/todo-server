FROM python:2.7

RUN mkdir -p /usr/src/todo_dev
RUN mkdir -p /usr/src/todo_prod

ENV TZ Asia/Tokyo
ENV PYTHONDONTWRITEBYTECODE 1
ENV WERKZEUG_DEBUG_PIN off
ENV DOCKER true

RUN apt-get update
RUN apt-get install -y mysql-client vim net-tools telnet curl
ADD env/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
