# Generated by Django 4.0.3 on 2022-04-26 17:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lms_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='category',
            options={},
        ),
        migrations.AlterField(
            model_name='book',
            name='status',
            field=models.CharField(blank=True, choices=[('availble', 'availble'), ('rental', 'rental'), ('solid', 'solid')], max_length=50, null=True),
        ),
    ]
