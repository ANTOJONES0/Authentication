from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('mysite.urls')),  # ✅ Make sure this is correctly included
]
