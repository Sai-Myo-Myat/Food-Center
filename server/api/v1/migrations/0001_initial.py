# Generated by Django 4.0 on 2023-03-06 09:12

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Foods',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('price', models.CharField(max_length=10)),
                ('rating', models.CharField(choices=[(1, '1 stars'), (2, '2 stars'), (3, '3 stars'), (4, '4 stars'), (5, '5 stars')], max_length=1)),
                ('description', models.CharField(max_length=300)),
                ('add_at', models.DateField()),
            ],
        ),
    ]