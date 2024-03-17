from django.shortcuts import render
from rest_framework import generics
from .models import Project
from .serializers import ProjectSerializer

# Create your views here.


class ProjectListAPIView(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


def home(request):
    return render(request, 'base.html')
