# Generated by Django 2.2.5 on 2020-11-17 11:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0008_saveditem_count'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='balance',
            field=models.FloatField(default=0.0),
        ),
    ]
