# Generated by Django 2.2.5 on 2020-11-09 15:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0003_auto_20201109_1442'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='userimage',
            field=models.ImageField(default=123, upload_to='images/Users'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='item',
            name='itemname',
            field=models.CharField(db_index=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='item',
            name='publisher',
            field=models.IntegerField(db_index=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='useremail',
            field=models.EmailField(db_index=True, max_length=254),
        ),
        migrations.AlterField(
            model_name='user',
            name='userid',
            field=models.AutoField(db_index=True, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='user',
            name='username',
            field=models.TextField(db_index=True),
        ),
    ]
