from rest_framework import serializers
from .models import Recipe, Category


class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        depth = 1
        fields = ['id', 'title', 'category', 'text']


class CategorySerializer(serializers.ModelSerializer):
    recipe = RecipeSerializer(many=True)

    class Meta:
        model = Category
        fields = ['id', 'name', 'recipe']
