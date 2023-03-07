# Generated by Django 4.0 on 2023-03-07 02:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('v1', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='foods',
            name='image',
            field=models.ImageField(null=True, upload_to='./uploads/item_images'),
        ),
        migrations.AlterField(
            model_name='foods',
            name='add_at',
            field=models.DateField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='foods',
            name='description',
            field=models.TextField(blank=True),
        ),
    ]