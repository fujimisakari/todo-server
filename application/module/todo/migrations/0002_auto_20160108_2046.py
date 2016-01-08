# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todolist',
            name='description',
            field=models.TextField(null=True, verbose_name='\u8aac\u660e', blank=True),
        ),
    ]
