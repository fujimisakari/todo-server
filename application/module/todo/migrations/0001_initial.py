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
                ('user_id', models.IntegerField()),
                ('name', models.CharField(max_length=100)),
                ('todolist_id', models.IntegerField()),
                ('done', models.BooleanField(default=False)),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='\u4f5c\u6210\u65e5\u6642')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='\u66f4\u65b0\u65e5\u6642')),
            ],
            bases=(swampdragon.models.SelfPublishModel, models.Model),
        ),
        migrations.CreateModel(
            name='TodoList',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('user_id', models.IntegerField()),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField(null=True, verbose_name='\u8aac\u660e', blank=True)),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='\u4f5c\u6210\u65e5\u6642')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='\u66f4\u65b0\u65e5\u6642')),
            ],
            bases=(swampdragon.models.SelfPublishModel, models.Model),
        ),
        migrations.AlterIndexTogether(
            name='todolist',
            index_together=set([('user_id', 'id')]),
        ),
        migrations.AlterIndexTogether(
            name='todoitem',
            index_together=set([('user_id', 'id')]),
        ),
    ]
