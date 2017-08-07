from django.shortcuts import render

# Create your views here.
def message_list(request):
    return render(request, 'eb_messages/message_list.html', {})