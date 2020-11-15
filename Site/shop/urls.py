from django.urls import path, include

import shop.views

urlpatterns = [
    path('', shop.views.get_Index),
    path('index', shop.views.get_Index),
    path('covid19', shop.views.get_Covid19Page),
    path('item', shop.views.get_ItemsPage),
    path('search', shop.views.get_SearchPage),
    path('shoppingCart', shop.views.get_ShoppingCartPage),
    path('user', shop.views.get_UserPage),
    path('about', shop.views.get_AboutPage),

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