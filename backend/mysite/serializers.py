from rest_framework import serializers
from .models import about,register,login

class aboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = about
        fields = '__all__'

class registerSerializer(serializers.ModelSerializer):
    class Meta:
        model = register
        fields = '__all__'

class loginSerializer(serializers.ModelSerializer):
    class Meta:
        model = login
        fields = '__all__'