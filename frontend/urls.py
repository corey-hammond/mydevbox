from django.urls import path
from . import views

urlpatterns = [
    path("", views.index),
    path("toolbox/", views.toolbox_list, name="toolbox_list"),
    path("toolbox/<int:pk>", views.toolbox_detail, name="toolbox_detail"),
]

