from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name='home-page'),
    path('api/projects/', views.ProjectListAPIView.as_view(), name='project-list'),
]
