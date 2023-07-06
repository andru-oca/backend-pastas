from django                     import forms
from django.contrib.auth.forms  import UserCreationForm
from django.contrib.auth.models import User

class RegistrationForm(UserCreationForm):
    
    email   =   forms.EmailField(label = ("e-m@il"))
                
    class Meta:
        models  =   User
        fields  =   ["username","email", "password1","password2"]


