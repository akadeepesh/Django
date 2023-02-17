from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from django.shortcuts import redirect
from django.template import RequestContext
from django.contrib.auth import authenticate, login


def submit_form(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        if name == 'John':
            options = ['Option 1', 'Option 2', 'Option 3']
        elif name == 'Jane':
            options = ['Option A', 'Option B', 'Option C']
        else:
            options = ['Option a', 'Option b', 'Option c']
        return render(request, 'form.html', {'options': options})
    else:
        return render(request, 'form.html')
    
def main(request):
    template = loader.get_template('Login.html')
    return HttpResponse(template.render())
