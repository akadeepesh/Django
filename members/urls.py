from django.urls import path
from . import views

urlpatterns = [
    path('', views.main, name='main'),
    path('form/', views.submit_form, name='submit_form'),
]