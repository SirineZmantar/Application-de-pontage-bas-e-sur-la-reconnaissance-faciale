from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = ('id','image', 'lastname', 'firstname', 'email', 'pwd', 'tel', 'service', 'date_e', 'date_s')
   
