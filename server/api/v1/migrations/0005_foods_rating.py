# Generated by Django 4.0 on 2023-03-07 03:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('v1', '0004_remove_foods_rating'),
    ]

    operations = [
        migrations.AddField(
            model_name='foods',
            name='rating',
            field=models.CharField(choices=[(1, '1 stars'), (2, '2 stars'), (3, '3 stars'), (4, '4 stars'), (5, '5 stars')], default='1', max_length=1),
        ),
    ]
