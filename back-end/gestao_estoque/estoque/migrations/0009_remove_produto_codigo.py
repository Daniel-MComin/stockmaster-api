# Generated by Django 5.1 on 2024-08-30 13:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('estoque', '0008_alter_produto_codigo'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='produto',
            name='codigo',
        ),
    ]
