from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .Serializers import ShopSerializer
from .models import Shop
# Create your views here.

class Shop_items(APIView):
    def get(self,request):
        items = Shop.objects.all()
        serializer = ShopSerializer(items,many = True)
        return Response(serializer.data)
