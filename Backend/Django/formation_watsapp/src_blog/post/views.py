from django.shortcuts import render, redirect

# Create your views here.

from .models import Post
from .forms import PostForm


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


def new_post(request):

    if request.method == "POST":
        form = PostForm(request.POST)
        if form.is_valid():
            myForms = form.save(commit=False)
            myForms.author = request.user
            myForms.save()
    else:
        form = PostForm()
    return render(request, "new.html", {'form': form})


def edit_post(request, id):
    post = Post.objects.get(id=id)
    if request.method == 'POST':
        form = PostForm(request.POST, instance=post)
        if form.is_valid():
            form.save()
    else:
        form = PostForm(instance=post)
    return render(request, "edit.html", {'form': form})


def delete_post(request, id):
    post = Post.objects.get(id=id)
    post.delete()
    return redirect('/blog/')
