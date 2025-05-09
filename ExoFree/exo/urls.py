from django.urls import path
from .import views

urlpatterns = [
    path('', views.home, name='index'),  # ou views.index si tu as nommé ta vue "index"
]
urlpatterns = [
    path('', views.home, name='base'),
    path('suite-ia/', views.suite_ia, name='suite_ia'),
    path('images/', views.images, name='images'),
    path('icones/', views.icones, name='icones'),
    path('videos/', views.videos, name='videos'),
    path('audio/', views.audio, name='audio'),
    path('modeles/', views.modeles, name='modeles'),
    path('mockups/', views.mockups, name='mockups'),
    path('plus/', views.plus, name='plus'),
    path('login/', views.login_view, name='login'),
    # je vais au champs
]