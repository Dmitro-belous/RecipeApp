from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.name}'


class Recipe(models.Model):
    title = models.CharField(max_length=100)
    category = models.ForeignKey(Category, related_name='recipe', on_delete=models.CASCADE)
    text = models.TextField()

    def __str__(self):
        return f'{self.title}'
