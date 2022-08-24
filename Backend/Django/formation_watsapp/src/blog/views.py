from django.shortcuts import render
from .models import Post


def home(request):
  objects = Post.objects.all()
  context = {
    "post": objects}
  return render(request, "home.html", context)

# Create your views here.
