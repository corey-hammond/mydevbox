# Generated by Django 3.0b1 on 2019-11-17 04:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('toolbox', '0004_remove_tool_pub_date'),
    ]

    operations = [
        migrations.RenameField(
            model_name='toolbox',
            old_name='language',
            new_name='name',
        ),
    ]