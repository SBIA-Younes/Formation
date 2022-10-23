from django.urls import path
from .views import ProductList, ProductDetail, BrandList, BrandDetail, CategoryList,post_list

from .api import BrandDetailAPI, BrandlistAPI, ProductListAPI, ProductDetailAPI, CategorylistAPI, CategoryDetailAPI


app_name = 'products'


urlpatterns = [
    path("testing", post_list),
    path('', ProductList.as_view(), name='product_list'),
    path("<int:pk>", ProductDetail.as_view(), name='product_details'),
    path('brands/', BrandList.as_view(), name='brand_list'),
    path("brands/<int:pk>", BrandDetail.as_view(), name='brand_detail'),
    path('category/', CategoryList.as_view(), name='category_list'),
    # path('category/<int:pk>', CategoryDetail.as_view(), name='category_detail'),
    
    
    
# api

path("api/", ProductListAPI.as_view()),
path("api/<int:pk>", ProductDetailAPI.as_view()),

path("api/brands/", BrandlistAPI.as_view()),
path("api/brands/<int:pk>", BrandDetailAPI.as_view()),

path("api/category/", CategorylistAPI.as_view()),
path("api/category/<int:pk>", CategoryDetailAPI.as_view()),
]

