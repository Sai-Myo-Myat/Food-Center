
from rest_framework.response import Response;
from rest_framework.decorators import api_view;
from .models import Foods, Users;
from .serializer import FoodsSerializer, UsersSerializer;

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


#user

@api_view(['POST'])
def signUp(request):
    form = request.data;
    if (form["password"] == form["confirm_password"]):
        serializer = UsersSerializer(data = form, many=False)
        if serializer.is_valid():
            serializer.save()
    else:
        return Response("password and confirm must be the same")
    return Response(serializer.data);


@api_view(['POST'])
def signIn(request):
    form = request.data;
    users = Users.objects.all()
    user = users.filter(email = form['email'])
    serializer = UsersSerializer(user, many=True)
    response = serializer.data
    print(type(form['password']))
    print(response['password'])
    return Response(serializer.data)
    if user:
        print(user, "htis is user")
       
    return Response("There is No user with this email")