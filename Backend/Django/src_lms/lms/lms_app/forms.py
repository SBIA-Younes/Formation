from django import forms
from .models import Book, Category


class CategoryForm(forms.ModelForm):
    """Form definition for Category."""

    class Meta:
        """Meta definition for Categoryform."""

        model = Category
        fields = ('name',)
        
        widgets = {
            "name" : forms.TextInput(attrs={"class":"form-control"})
            }


class BookForm(forms.ModelForm):
    """Form definition for Book."""

    class Meta:
        """Meta definition for Bookform."""

        model = Book
        fields = [
            "title", 
            "author",
            "photo_book",
            "photo_author",
            "pages",
            "price",
            "retal_price_day",
            "retal_period",
            "status",
            "category",
            
            ]
        
        widgets = {
            "title": forms.TextInput(attrs={"class":"form-control"}),
            "author": forms.TextInput(attrs={"class":"form-control"}),
            "photo_book": forms.FileInput(attrs={"class":"form-control"}),
            "photo_author": forms.FileInput(attrs={"class":"form-control"}),
            "pages": forms.NumberInput(attrs={"class":"form-control"}),
            "price": forms.NumberInput(attrs={"class":"form-control"}),
            "retal_price_day": forms.NumberInput(attrs={"class":"form-control"}),
            "retal_period": forms.NumberInput(attrs={"class":"form-control"}),
            "status": forms.Select(attrs={"class":"form-control"}),
            "category": forms.Select(attrs={"class":"form-control"}),
            
            }
        
