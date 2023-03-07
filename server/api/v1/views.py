from rest_framework.response import Response;
from rest_framework.decorators import api_view;
from .models import Foods;
from .serializer import FoodsSerializer;

# Create your views here.
@api_view(['GET'])
def getAllFoods(request):
    foods = Foods.objects.all();
    serializer = FoodsSerializer(foods,many=True);
    return Response(serializer.data);


