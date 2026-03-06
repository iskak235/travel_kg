from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('about/', views.about, name='about'),
    path('tours/', views.tours_list, name='tours'),
    # Ушул жерди текшериңиз: name='contact' болушу шарт!
    path('contact/', views.contact, name='contact'),
    path('tour/<int:pk>/', views.tour_detail, name='tour_detail'),
    path('callback/', views.callback_request, name='callback_request'),
]