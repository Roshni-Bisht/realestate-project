from django.db import models
from django.db import models
from django.contrib.auth.models import User

class Property(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    location = models.CharField(max_length=100)
    image = models.ImageField(upload_to='properties/', null=True, blank=True)

    def __str__(self):
        return self.title


class BlogPost(models.Model):
    # This field is for images uploaded via the Django admin (recommended for a blog)
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True) 
    author = models.CharField(max_length=100)
    content = models.TextField()
    image = models.ImageField(upload_to='blog_images/', blank=True, null=True) 
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title
    
    # ____________________________________/
    # backend/properties/models.py

class Property(models.Model):
    title = models.CharField(max_length=200)
    property_type = models.CharField(max_length=100)   # e.g., Apartment, Villa
    location = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=12, decimal_places=2)
    area_sqft = models.PositiveIntegerField(default=1000)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='property_images/', blank=True, null=True)
    latitude = models.FloatField(null=True, blank=True)
    longitude = models.FloatField(null=True, blank=True)

    def __str__(self):
        return self.title

