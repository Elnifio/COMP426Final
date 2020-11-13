from django.urls import path, include

import shop.views

urlpatterns = [
    path('', shop.views.test_homepage),
    path("test", shop.views.get_all_items),
    path("item/<int:itemid>", shop.views.get_item)
]