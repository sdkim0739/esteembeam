from tastypie.resources import ModelResource
from eb_messages.models import Message


class MessageResource(ModelResource):
    class Meta:
        queryset = Message.objects.all()
        resource_name = 'message'