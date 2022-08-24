from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from ckeditor.fields import RichTextField

# Create your models here.

class Post(models.Model):

    author = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    content = RichTextField(blank=True, null=True)
    # content = models.TextField(max_length=10000)
    publish_date = models.DateTimeField(default=timezone.now())
    image = models.ImageField(upload_to="images/")

    # class Meta:
    #     verbose_name = _("Post")
    #     verbose_name_plural = _("Posts")

    def __str__(self):
        return self.title + " | " + str(self.author)

    # def get_absolute_url(self):
    #     return reverse("Post_detail", kwargs={"pk": self.pk})
