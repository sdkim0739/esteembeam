from django.db import models
from django.utils import timezone


class Message(models.Model):
    #author = models.ForeignKey('auth.User')
    mainCategory = models.CharField(max_length=500)
    subCategory = models.CharField(max_length=500)
    text = models.TextField()
    
    '''
    title = models.CharField(max_length=200)
    text = models.TextField()
    created_date = models.DateTimeField(
            default=timezone.now)
    published_date = models.DateTimeField(
            blank=True, null=True)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title
    '''
