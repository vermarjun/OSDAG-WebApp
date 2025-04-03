from django.urls import path
from . import views

urlpatterns = [
    path('api/calculate-end-plate/', views.calculate_end_plate_connection, name='calculate_end_plate'),
    path('api/gemini/', views.gemini_query, name='gemini_query'),
]