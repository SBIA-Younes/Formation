from django import forms
from .models import Book, Category


class BookForm(forms.ModelForm):
    """Form definition for Book."""

    class Meta:
        """Meta definition for Bookform."""

        model = Book
        fields = "__all__"
        
