# Generated by Django 3.0.5 on 2020-04-16 14:54

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myap', '0004_auto_20200416_1521'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='date_e',
            field=models.DateTimeField(default=datetime.datetime.now),
        ),
        migrations.AlterField(
            model_name='user',
            name='date_s',
            field=models.DateTimeField(default=datetime.datetime.now),
        ),
    ]
