from django.views.generic import TemplateView



class LandingPage(TemplateView):
    template_name = "Index.html"
    extra_context = {
        "titulo":"pagina de inicio"
    }

class MenuPage(TemplateView):
    template_name = "Menu.html"
    extra_context = {
        "titulo":"pagina de menu"
    }

class NosotrosPage(TemplateView):
    template_name = "Nosotros.html"
    extra_context = {
        "titulo":"pagina de nosotros"
    }
    
class ReservasPage(TemplateView):
    template_name = "Reservas.html"
    extra_context = {
        "titulo":"pagina de reservas"
    }