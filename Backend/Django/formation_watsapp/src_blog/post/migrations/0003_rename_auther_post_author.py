# Generated by Django 4.0.6 on 2022-08-14 15:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0002_post_auther_alter_post_image'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='auther',
            new_name='author',
        ),
    ]
