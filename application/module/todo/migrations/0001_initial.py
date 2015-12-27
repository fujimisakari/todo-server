# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import swampdragon.models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='TodoItem',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('done', models.BooleanField(default=False)),
                ('text', models.CharField(max_length=100)),
            ],
            bases=(swampdragon.models.SelfPublishModel, models.Model),
        ),
        migrations.CreateModel(
            name='TodoList',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField()),
            ],
            bases=(swampdragon.models.SelfPublishModel, models.Model),
        ),
        migrations.AddField(
            model_name='todoitem',
            name='todo_list',
            field=models.ForeignKey(to='todo.TodoList'),
        ),
    ]
