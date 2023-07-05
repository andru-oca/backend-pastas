from django.contrib import admin
from django.urls import path

from .views import LandingPage , MenuPage , NosotrosPage , ReservasPage


urlpatterns = [
    path('admin/', admin.site.urls),
    path("", LandingPage.as_view(), name="Index"),
    path("Menu", MenuPage.as_view(), name="Menu"),
    path("Nosotros", NosotrosPage.as_view(), name="Nosotros"),
    path("Reservas", ReservasPage.as_view(), name="Reservas"),
]
