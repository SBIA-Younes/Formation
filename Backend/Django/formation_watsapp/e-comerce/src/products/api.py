# view api

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import generics
from .models import Product
from .serializers import ProductSerializer


@api_view(["GET"])
def product_list_api(request):
  objects = Product.objects.all()
  data = ProductSerializer(objects, many=True).data
  return Response({"status":200, "all products":data})



@api_view(["GET"])
def product_detail_api(request, id):
  objects = Product.objects.get(id=id)
  data = ProductSerializer(objects).data
  return Response({"status":200,"product detail":data})


class ProductListAPI(generics.ListCreateAPIView):
  queryset = Product.objects.all()
  serializer_class = ProductSerializer
  
class ProductDetailAPI(generics.RetrieveUpdateDestroyAPIView):
  queryset = Product.objects.all()
  serializer_class = ProductSerializer