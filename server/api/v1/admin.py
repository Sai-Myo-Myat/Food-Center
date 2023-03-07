from django.contrib import admin
from .models import Foods

class imageAdmin(admin.ModelAdmin):
    list_display = ["title", "image"]

admin.site.register(Foods, imageAdmin)