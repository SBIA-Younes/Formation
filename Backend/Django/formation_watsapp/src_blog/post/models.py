from audioop import reverse
from django.db import models

# Create your models here.


class Post(models.Model):

    title = models.CharField(max_length=100)
    content = models.TextField(max_length=10000)
    image = models.ImageField(upload_to="post/")

    class Meta:
        verbose_name = ("post")
        verbose_name_plural = ("posts")

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("post_detail", kwargs={"pk": self.pk})
