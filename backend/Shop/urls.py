from django.urls import path
from .views import Shop_items

urlpatterns = [
    path("shop-items/",Shop_items.as_view(),name="shop"),
]
