from django.contrib.auth.models import AbstractUser
from django.db import models

class Usuario(AbstractUser):
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    is_active = models.BooleanField(default=False)
    is_superuser =  models.BooleanField(default=False)
   
    
    def __str__(self):
        return self.username
