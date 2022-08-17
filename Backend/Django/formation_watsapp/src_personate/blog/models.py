from django.db import models
from django.utils import timezone

# Create your models here.

class Post(models.Model):
    
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to="posts/")
    publish_date = models.DateTimeField(default=timezone.now())
    content = models.TextField(max_length=10000)

    def __str__(self):
        return self.title

