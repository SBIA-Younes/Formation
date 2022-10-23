from rest_framework import serializers
from .models import Product, Category, Brand



# class CategorySerializer(serializers.ModelSerializer):
#   class Meta:
#     model = Category
#     fields = ("__all__")


# class BrandSerializer(serializers.ModelSerializer):
#   class Meta:
#     model = Brand
#     fields = "__all__"


class ProductSerializer(serializers.ModelSerializer):
  # category = CategorySerializer()
  # category = serializers.SerializerMethodField()
  # brand = BrandSerializer()
  # brand = serializers.SerializerMethodField()
  
  price_with_tax = serializers.SerializerMethodField(method_name="price_with_tax_1")
  
  
  def price_with_tax_1(self, product:Product):
    return product.price*1.1
  
  class Meta:
    model  = Product
    fields = "__all__"
    
    
    