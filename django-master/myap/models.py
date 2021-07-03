from django.db import models
from datetime import datetime
# Create your models here.

class User(models.Model):
    lastname = models.CharField(max_length=32)
    firstname = models.CharField(max_length=256) 
    email= models.CharField(max_length=32)
    pwd= models.CharField(max_length=32)
    tel= models.IntegerField()
    service= models.CharField(max_length=32)
    image = models.FileField(blank=True, null=False)
    date_e = models.DateTimeField(auto_now_add=False, auto_now=False, default=datetime.now)
    date_s = models.DateTimeField(auto_now_add=False, auto_now=False, default=datetime.now)
    def __str__(self):
        return self.lastname
