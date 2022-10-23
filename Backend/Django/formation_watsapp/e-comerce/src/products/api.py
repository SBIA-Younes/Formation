# view api

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import generics
from .models import Brand, Category, Product
from .serializers import ProductSerializer, CategoryListSerializer, CategoryDetailSerializer,BrandListSerializer, BrandDetailSerializer



class ProductListAPI(generics.ListCreateAPIView):
  queryset = Product.objects.all()
  serializer_class = ProductSerializer
  
class ProductDetailAPI(generics.RetrieveUpdateDestroyAPIView):
  queryset = Product.objects.all()
  serializer_class = ProductSerializer
  
  
  
  
  
class CategorylistAPI(generics.ListAPIView):
  serializer_class = CategoryListSerializer
  queryset = Category.objects.all()
  
class CategoryDetailAPI(generics.RetrieveAPIView):
  queryset = Category.objects.all()
  serializer_class = CategoryDetailSerializer
  
  
  
class BrandlistAPI(generics.ListAPIView):
  serializer_class = BrandListSerializer
  queryset = Brand.objects.all()
  
class BrandDetailAPI(generics.RetrieveAPIView):
  queryset = Brand.objects.all()
  serializer_class = BrandDetailSerializer