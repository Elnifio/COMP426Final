from django.urls import path, include

import shop.views

urlpatterns = [
    path('', shop.views.test_homepage),
    path("allitems", shop.views.get_all_items),
    path("item/<int:itemid>", shop.views.get_item),
    path("categories", shop.views.get_all_categories),
    path("category/<int:categoryid>", shop.views.get_categories),
    path("createuser", shop.views.create_user),
    path("verifyuser", shop.views.verify_user),
    path("logout", shop.views.logout),
    path("postitem", shop.views.post_item),
    path("verifylogin", shop.views.verify_login),
    path("save", shop.views.save_item),
    path("user", shop.views.get_complete_info)
]