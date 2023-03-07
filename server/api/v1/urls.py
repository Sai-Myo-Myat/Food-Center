from django.urls import path
from . import views

urlpatterns = [
    path('foods/',views.getAllFoods, name="all foods" )
]