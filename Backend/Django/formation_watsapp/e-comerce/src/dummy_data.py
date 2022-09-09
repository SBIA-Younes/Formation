import os

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'project.settings')

import django
django.setup()


from faker import Faker
import random
from products.models import Product, Brand, Category

def seed_brand(n):
    fake = Faker()
    
    for _ in range(n):
        name = Faker.name(random)
    
def seed_category(n):
    pass

def seed_product(n):
    pass



