# Generated by Django 5.1 on 2024-08-30 13:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('estoque', '0006_produto_codigo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='produto',
            name='codigo',
            field=models.CharField(editable=False, max_length=4, unique=True),
        ),
    ]
