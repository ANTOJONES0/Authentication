from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)

    # Resolve conflicts by adding a unique related_name
    groups = models.ManyToManyField(
        "auth.Group",
        related_name="customuser_groups",  # Unique related_name
        blank=True
    )
    user_permissions = models.ManyToManyField(
        "auth.Permission",
        related_name="customuser_permissions",  # Unique related_name
        blank=True
    )

    def __str__(self):
        return self.username
    
class about(models.Model):
    name = models.CharField(max_length=100)
    details = models.TextField()

    def __str__(self):
        return self.name


class register(models.Model):  
    username = models.CharField(max_length=100)
    email = models.EmailField(unique=True)  # ✅ Make email unique
    password = models.CharField(max_length=128)  # ✅ Keep, but ensure it's hashed before saving

    def __str__(self):
        return self.name
    
class login(models.Model):  
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=128)  

    def __str__(self):
        return self.name

    


