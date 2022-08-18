from django.shortcuts import render
from .models import Post

# Create your views here.

def all_posts(request):
  objects = Post.objects.all()
  context = {"posts" : objects}
  return render(request, 'blog/post_list.html', context)


def post_detail(request, id):
  pass
