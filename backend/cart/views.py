from django.shortcuts import render
from .serializers import CartSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
# Create your views here.

class CartView(APIView):
    def post(self,request):
        print(request.data);
        serializer = CartSerializer(data = request.data)

        if serializer.is_valid():
            customer = serializer.validated_data['customerId']
            item_name = serializer.validated_data['item_name']
            price = serializer.validated_data['price']
            quantity = serializer.validated_data['quantity']


            serializer.save()
            return Response(serializer.data,status = status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)