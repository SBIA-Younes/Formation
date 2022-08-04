from django.shortcuts import render
from .models import Post_App


def all_posts(request):
    posts = Post_App.objects.all()
    return render(request, 'posts.html', {})


def single_post():
    pass
