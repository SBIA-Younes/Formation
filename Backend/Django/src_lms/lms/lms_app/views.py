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
            
        add_category = CategoryForm(request.POST)
        if add_category.is_valid():
            add_category.save()
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

def update(request, id):
    book_id = Book.objects.get(id=id)
    if request.method == 'POST':
        book_save = BookForm(request.POST, request.FILES, instance=book_id)
        if book_save.is_valid():
            book_save.save()
    else:
        book_save = BookForm(instance=book_id)
    context = {
        "from":book_save,
        }
    return render(request, "pages/update.html", context)