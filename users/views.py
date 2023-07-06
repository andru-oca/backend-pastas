from django.views.generic.edit  import FormView
from django.contrib.auth.forms  import UserCreationForm

from django.shortcuts   import render
from .forms             import RegistrationForm



class UserSignUp(FormView):
    template_name   =   "sign-up.html"
    forms_class     =   RegistrationForm
    success_url     =   reverse_lazy("login")
    extra
    def form_valid(self,form):
        
        user        =   form.save()

        if user is not None:
            login(self.request, user)
        
        return super(UserSignUp,self).form_valid(form)

    def get(self, *args,    **kwargs):
        if self.request.user.is_authenticated:
            return redirect('Index')
            
        return super(UserSignUp,self).get(*args,    **kwargs)


class UserLogin:
    ...

