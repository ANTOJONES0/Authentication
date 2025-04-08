from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.contrib.auth.hashers import make_password
from mysite.models import CustomUser
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken





from rest_framework import generics
from .models import about,register,login
from .serializers import aboutSerializer,registerSerializer,loginSerializer

# class RegisterView(APIView):
#     permission_classes = [AllowAny]

#     def post(self, request):
#         username = request.data.get("username")
#         email = request.data.get("email")
#         password = request.data.get("password")

#         if not username or not email or not password:
#             return Response({"error": "All fields are required"}, status=400)

#         if CustomUser.objects.filter(username=username).exists():
#             return Response({"error": "Username already taken"}, status=400)

#         if CustomUser.objects.filter(email=email).exists():
#             return Response({"error": "Email already registered"}, status=400)

#         user = CustomUser.objects.create(
#             username=username,
#             email=email,
#             password=make_password(password)  # Hash the password
#         )

#         return Response({"message": "User registered successfully!"}, status=201)
    
class aboutListCreate(generics.ListCreateAPIView):
    queryset = about.objects.all()
    serializer_class = aboutSerializer

class registerListCreate(generics.ListCreateAPIView):
    queryset = register.objects.all()
    serializer_class = registerSerializer

# class loginListCreate(generics.ListCreateAPIView):
#     queryset = login.objects.all()
#     serializer_class = loginSerializer

#     permission_classes = [AllowAny]

# #     def post(self, request):
# #         username = request.data.get("username")
# #         email = request.data.get("email")
# #         password = request.data.get("password")

# #         if not username or not email or not password:
# #             return Response({"error": "All fields are required"}, status=400)

# #         if CustomUser.objects.filter(username=username).exists():
# #             return Response({"error": "Username already taken"}, status=400)

# #         if CustomUser.objects.filter(email=email).exists():
# #             return Response({"error": "Email already registered"}, status=400)

# #         user = CustomUser.objects.create(
# #             username=username,
# #             email=email,
# #             password=make_password(password)  # Hash the password
# #         )

# #         return Response({"message": "User registered successfully!"}, status=201)

@api_view(['POST'])
def login_view(request):
    email = request.data.get("email")
    password = request.data.get("password")

    user_obj=User.objects.get(email=email)
    user = authenticate(request, username=user_obj.username, password=password)

    if user is not None:
        refresh = RefreshToken.for_user(user)  # Generate JWT Token
        return Response({
            "message": "Login successful",
            "access": str(refresh.access_token),  # Return JWT Token
            "refresh": str(refresh),
            "redirect": "/home"
        }, status=200)
    else:
        return Response({"error": "Invalid username or password"}, status=400)


from django.contrib.auth.models import User


@api_view(['POST'])
def register_view(request):
    username = request.data.get("username")
    email = request.data.get("email")
    password = request.data.get("password")

    if User.objects.filter(username=username).exists():
        return Response({"error": "Username already exists"}, status=400)

    register = User.objects.create_user(username=username, email=email, password=password)

    # Generate JWT Token after registration (optional)
    refresh = RefreshToken.for_user(register)

    return Response({
        "message": "User registered successfully",
        "access": str(refresh.access_token),  # Return JWT Token
        "refresh": str(refresh),
        "redirect": "/login"
    }, status=201)
