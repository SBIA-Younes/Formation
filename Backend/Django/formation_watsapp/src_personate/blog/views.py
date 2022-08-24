from django.shortcuts import render
from .models import Post
from django.views.generic import ListView, DetailView

# Create your views here.


def all_posts(request):
    objects = Post.objects.all()
    context = {"posts": objects}
    return render(request, 'blog/post_list.html', context)


def post_detail(request, id):
    object = Post.objects.get(id=id)
    context = {"post": object}
    return render(request, 'blog/post_detail.html', context)


class PostList(ListView):
    model = Post


class PostDetail(DetailView):
    model = Post
    # template_name = ".html"
