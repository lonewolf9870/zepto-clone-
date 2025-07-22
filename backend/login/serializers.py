from rest_framework import serializers
from .models import LoginTable
class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = LoginTable
        fields = ['CustomerName','password','customerId']