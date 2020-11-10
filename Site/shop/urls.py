from django.urls import path, include

import shop.views

urlpatterns = [
    path('', shop.views.createUser),
    path("test", shop.views.getAllCategories),
    path("item/<int:itemid>", shop.views.getItem)
]