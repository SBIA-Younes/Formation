from audioop import reverse
from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Post(models.Model):

    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_posts')
    title = models.CharField(max_length=100)
    content = models.TextField(max_length=10000)
    image = models.ImageField(upload_to="image/")
    category = models.ForeignKey("Category",on_delete=models.CASCADE, related_name="post_category")

    class Meta:
        verbose_name = ("post")
        verbose_name_plural = ("posts")

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("post_detail", kwargs={"pk": self.pk})


class Category(models.Model):
    name = models.CharField(max_length=30)
    
    def __str__(self):
        return self.name