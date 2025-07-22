from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path("login/",include('login.urls')),
    path('shop/',include("Shop.urls")),
    path('cart/',include("cart.urls")),
]
