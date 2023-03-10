from rest_framework import serializers;
from .models import Foods, Users;

class FoodsSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Foods
        fields  = '__all__'

        
class UsersSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Users
        fields  = '__all__'    