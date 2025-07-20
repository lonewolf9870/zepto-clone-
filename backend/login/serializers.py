from rest_framework import serializers
from .models import LoginTable
class LoginSerializer(serializers.Serializer):
    class Meta:
        model = LoginTable;
        fields = ['mobile','password']