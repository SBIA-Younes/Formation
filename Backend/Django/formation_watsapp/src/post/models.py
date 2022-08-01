from django.db import models

class post_app(models.Model):
    def __init__(self, *args):
        super(post_app, self).__init__(*args)
    
    name = models.CharField(max_length=50)
    content = models.TextField(max_length=100)
        
