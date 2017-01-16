FROM python:2.7

ENV TZ Asia/Tokyo
ENV PYTHONDONTWRITEBYTECODE 1
ENV WERKZEUG_DEBUG_PIN off
ENV DOCKER true

RUN mkdir /usr/src/todo
RUN mkdir /var/run/todo

WORKDIR /usr/src/todo

RUN apt-get update
RUN apt-get install -y mysql-client vim net-tools telnet curl
ADD env/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
