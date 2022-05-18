from multiprocessing import context
from django.shortcuts import render
from .forms import BookForm, CategoryForm

from .models import *
# Create your views here.


def index(request):
    
    if request.method == 'POST':
        add_book = BookForm(request.POST, request.FILES)
        if add_book.is_valid():
            add_book.save()
    context = {
        "category" : Category.objects.all(),
        "books": Book.objects.all(),
        "form" : BookForm,
        "formCat" : CategoryForm,
    }
    return render(request, 'pages/index.html',context=context)

def books(request):
    context = {
        "category" : Category.objects.all(),
        "books": Book.objects.all(),
        "formCat" : CategoryForm,
    }
    return render(request, 'pages/books.html',context=context)