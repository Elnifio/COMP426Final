from django.contrib import admin

# Register your models here.
from .models import User, Item, PublishedItem, PurchasedItem, SavedItem

admin.site.register(User)
admin.site.register(Item)
admin.site.register(PublishedItem)
admin.site.register(PurchasedItem)
admin.site.register(SavedItem)