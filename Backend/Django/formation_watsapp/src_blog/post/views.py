from django.shortcuts import render

# Create your views here.

from .models import Post


def all_posts(request):
    post = Post.objects.all()
    context = {
        "posts": post
    }
    return render(request, "posts.html", context)


def single_post(request, id):
    post = Post.objects.get(id=id)
    context = {
      "single_post": post
    }
    return render(request, "single.html", context)
