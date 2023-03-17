
from rest_framework.response import Response;
from rest_framework.decorators import api_view;
from .models import Foods,Users;
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
    users = Users.objects.all()
    user = users.filter(email = form['email'])
    if user:
        return Response({"status": "error", "message": "Email already exits"})
    elif(form["password"] == form["confirm_password"]):
        serializer = UsersSerializer(data = form, many=False)
        if serializer.is_valid():
            serializer.save()
    else:
        return Response({"status": "error", "message": "Password and Confirm Password must be the same"})
    return Response({"status": "success", "user": serializer.data});


@api_view(['POST'])
def signIn(request):
    form = request.data;
    users = Users.objects.all()
    user = users.filter(email = form['email']).values()[0]
    if user:
        if user["password"] == form["password"]:
            return Response({"status": "success", "user": user})
        else:
            return Response({"status": "error","message": "Incorrect password"})

       
    return Response({"status": "error",  "message": "There is no user with this email"})