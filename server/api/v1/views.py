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

@api_view(['GET'])
def getOneFood(request,id):
    food = Foods.objects.get(id = id); 
    serializer = FoodsSerializer(food,many=False)
    return Response(serializer.data)

@api_view(['GET'])
def chooseCategory(request):
    form = request.data;
    foods = Foods.objects.all();
    categorized = foods.filter(category=form["category"])
    serializer = FoodsSerializer(categorized,many=True)
    return Response(serializer.data)


# @api_view(['POST'])
# def addFood(request):
#     serializer = FoodsSerializer(data=request.data, many=False)
#     if serializer.is_valid():
#         serializer.save();
#     return Response(serializer.data)