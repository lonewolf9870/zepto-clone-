from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import LoginSerializer
from rest_framework.response import Response
from .models import LoginTable

class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        
        if serializer.is_valid():
            mobile = serializer.validated_data['mobile']
            password = serializer.validated_data['password']

            try:
                user = LoginTable.objects.get(mobile=mobile, password=password)
                return Response({'message': 'Login successful', 'user_id': user.id})
            except LoginTable.DoesNotExist:
                return Response({'error': 'Invalid credentials'}, status=401)
        
        return Response(serializer.errors, status=400)
