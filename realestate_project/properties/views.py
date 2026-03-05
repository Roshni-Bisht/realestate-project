from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from .models import Property
from .serializers import PropertySerializer

# ====================================================
# 👤 USER AUTH
# ====================================================

class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get("username")
        email = request.data.get("email")
        password = request.data.get("password")

        if not username or not password:
            return Response({"error": "Username and password required."}, status=400)

        if User.objects.filter(username=username).exists():
            return Response({"error": "Username already exists."}, status=400)

        user = User.objects.create_user(username=username, email=email, password=password)
        return Response({"message": f"✅ User {user.username} registered successfully!"}, status=201)


class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")

        if not username or not password:
            return Response({"error": "Username and password required."}, status=400)

        user = authenticate(username=username, password=password)
        if user:
            login(request, user)
            return Response({"message": "Login successful", "username": user.username})
        else:
            return Response({"error": "Invalid credentials"}, status=401)


class LogoutView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        logout(request)
        return Response({"message": "Logged out successfully"}, status=200)


# ====================================================
# 🏠 PROPERTY FILTER + DETAIL
# ====================================================

@api_view(['GET'])
@permission_classes([AllowAny])
def property_list(request):
    """
    GET /api/?location=Delhi&type=Villa
    """
    queryset = Property.objects.all()

    # Query params
    type_ = request.GET.get('type')
    location = request.GET.get('location')
    sqft = request.GET.get('sqft')
    price = request.GET.get('price')

    # Filters
    if type_:
        queryset = queryset.filter(property_type__icontains=type_)
    if location:
        queryset = queryset.filter(location__icontains=location)
    if sqft:
        queryset = queryset.filter(area_sqft__gte=sqft)
    if price:
        queryset = queryset.filter(price__lte=price)

    serializer = PropertySerializer(queryset, many=True)
    return Response(serializer.data)


class PropertyDetail(generics.RetrieveAPIView):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer
