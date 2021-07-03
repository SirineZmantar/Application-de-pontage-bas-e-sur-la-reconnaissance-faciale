from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets
from rest_framework import permissions
from .serializers import UserSerializer
from .models import User
from rest_framework.response import Response
from rest_framework.parsers import FileUploadParser
from rest_framework.views import APIView
from django.http import HttpResponse



class UserViewSet(viewsets.ModelViewSet):
  
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        lastname = request.data['lastname'] 
        firstname = request.data['firstname'] 
        email= request.data['email']
        #pwd= request.data['pwd']
        tel= request.data['tel']
        service= request.data['service']
        image= request.data['image'] 
      
        User.objects.Create(lastname =lastname ,firstname =firstname, email=email,  tel= tel, service=service,   image=  image)
        return HttpResponse({'message': 'ok'}, status=200)

    def delete():
        User.delete() 
        return JsonResponse({'message': 'Tutorial was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)

    def put(self, request):
        user_data = JSONParser().parse(request) 
        user_serializer = userSerializer(user, data=user_data) 
        if user_serializer.is_valid(): 
            user_serializer.save() 
            return JsonResponse(user_serializer.data) 
        return JsonResponse(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)