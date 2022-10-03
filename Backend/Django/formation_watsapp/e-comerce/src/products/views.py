from itertools import product
from django.shortcuts import render
from django.views.generic import ListView, DetailView
from .models import Product, ProductImages, Brand, Category
from django.db.models import Count



def post_list(request):
    
    objects = Product.objects.all()
    return render(request, 'products/test_list.html', {'products': objects})
class ProductList(ListView):
    model = Product
    paginate_by = 10
    
class ProductDetail(DetailView):
    model= Product

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        myproduct = self.get_object()
        context["images"] = ProductImages.objects.filter(product=myproduct)
        context["related"] = Product.objects.filter(category=myproduct.category)
        return context
    

class BrandList(ListView):
    model = Brand
    # paginate_by = 10
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['brands'] = Brand.objects.all().annotate(product_count=Count('product_brand'))
        return context
    

class BrandDetail(DetailView):
    model =  Brand
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        brand =  self.get_object()
        context["brand_products"] = Product.objects.filter(brand=brand)
        return context
    

class CategoryList(ListView):
    model = Category
    # paginate_by = 10
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["categorys"] = Category.objects.all().annotate(product_count=Count('product_category')) 
        return context
    
    class CategoryDetail(DetailView):
        model = Category
        
        def get_context_data(self, **kwargs):
            context = super().get_context_data(**kwargs)
            category = self.get_object()
            context["category_products"] = Product.objects.filter(category=category)
            return context
    
