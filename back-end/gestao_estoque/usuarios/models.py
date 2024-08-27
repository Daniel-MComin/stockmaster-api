from django.contrib.auth.models import AbstractUser
from django.db import models

class Usuario(AbstractUser):
    email = models.EmailField(unique=True)
    is_approved = models.BooleanField(default=False)
   
    
    def __str__(self):
        return self.username
