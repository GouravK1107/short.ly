from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('<str:shorten_code>/', views.redirect_url, name='redirect'),
]