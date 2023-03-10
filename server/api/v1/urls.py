from django.urls import path
from . import views

urlpatterns = [
    path('foods/',views.getAllFoods, name="all foods" ),
    path('foods/<int:id>', views.getOneFood, name="detail"),
    # path('foods/add',views.addFood, name="add food" ),
    path('foods/category', views.chooseCategory, name = "get by category"),
    path('auth/sign-up', views.signUp, name = "sign up"),
    path('auth/sign-in',views.signIn, name="sign in")
]