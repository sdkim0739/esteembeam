from django.db import models

# Create your models here.
class Message(models.Model):
    text = models.TextField()
    category = models.CharField(max_length=200)
    subcategory = models.CharField(max_length=200)
    
    def __str__(self):
        return self.text