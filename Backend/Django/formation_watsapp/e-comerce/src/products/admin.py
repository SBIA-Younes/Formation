from django.contrib import admin
from .models import Product, ProductImages, ProductReview, Category, Brand

# Register your models here.

class ProductImagesInLine(admin.TabularInline):
    model = ProductImages

class ProductAdmin(admin.ModelAdmin):
    list_display = ["name", "price", 'flag']
    inlines= [ProductImagesInLine]

admin.site.register(Product, ProductAdmin)
admin.site.register(ProductImages)
admin.site.register(ProductReview)
admin.site.register(Category)
admin.site.register(Brand)