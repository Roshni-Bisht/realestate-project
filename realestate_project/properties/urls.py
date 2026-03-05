from django.urls import path
from .views import RegisterView, LoginView, LogoutView, property_list, PropertyDetail

urlpatterns = [
    # 👤 Auth routes
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),

    # 🏠 Property routes
    path('', property_list, name='property_list'),  # ✅ /api/?location=Delhi&type=Villa
    path('<int:pk>/', PropertyDetail.as_view(), name='property_detail'),
]
