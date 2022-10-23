from django.urls import path
from .views import ProductList, ProductDetail, BrandList, BrandDetail, CategoryList,post_list

from .api import product_detail_api, product_list_api, ProductListAPI, ProductDetailAPI


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

path("api/", product_list_api),
path("api/<int:id>", product_detail_api),
path("api/cbv/", ProductListAPI.as_view()),
path("api/cbv/<int:pk>", ProductDetailAPI.as_view()),
]

