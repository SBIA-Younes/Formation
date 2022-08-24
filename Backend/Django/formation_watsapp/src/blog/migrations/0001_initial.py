# Generated by Django 4.0.6 on 2022-08-19 07:50

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('content', models.TextField(max_length=10000)),
                ('publish_date', models.DateTimeField(default=datetime.datetime(2022, 8, 19, 7, 50, 47, 528487, tzinfo=utc))),
                ('image', models.ImageField(upload_to='images/')),
            ],
        ),
    ]