# Generated by Django 4.0.6 on 2022-08-19 15:16

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='content',
            field=models.TextField(max_length=1000000),
        ),
        migrations.AlterField(
            model_name='post',
            name='publish_date',
            field=models.DateTimeField(default=datetime.datetime(2022, 8, 19, 15, 16, 37, 612425, tzinfo=utc)),
        ),
    ]
