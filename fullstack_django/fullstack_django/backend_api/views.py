from django_filters.rest_framework import DjangoFilterBackend

from .models import Recipe, Category
from .serializer import RecipeSerializer, CategorySerializer
from rest_framework import viewsets


class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
