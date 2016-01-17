# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='todoitem',
            name='note',
            field=models.TextField(null=True, verbose_name='\u30ce\u30fc\u30c8', blank=True),
        ),
        migrations.AlterField(
            model_name='todoitem',
            name='done',
            field=models.BooleanField(default=False, verbose_name='\u5b8c\u4e86\u30d5\u30e9\u30b0'),
        ),
    ]
