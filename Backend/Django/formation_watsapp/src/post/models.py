from django.db import models


class Post_App(models.Model):
    # def __init__(self, *args):
    #     super(Post_App, self).__init__(*args)

    name = models.CharField(max_length=50)
    content = models.TextField(max_length=100)
    imgae = models.ImageField(upload_to="post/")

    def __str__(self):
        return self.name
