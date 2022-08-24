from django.urls import path
from .views import all_posts, post_detail, PostList, PostDetail


app_name = 'blog'

urlpatterns = [
    path('', all_posts),
    path('<int:id>', post_detail, name='post_detail'),

    path('cbv', PostList.as_view()),
    path('cbv/<int:pk>', PostDetail.as_view()),
]
