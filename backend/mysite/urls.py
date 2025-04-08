from django.urls import path
from .views import aboutListCreate,  registerListCreate ,login_view,register_view

urlpatterns = [
    path('about/', aboutListCreate.as_view(), name='details-list'),
    path('register/', register_view, name='register'),
    path('login/',login_view , name='login'),  
]
