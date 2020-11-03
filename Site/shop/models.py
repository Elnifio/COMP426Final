from django.db import models

# Create your models here.
class User(models.Model):
    userid = models.AutoField(primary_key=True)
    username = models.TextField()
    useremail = models.EmailField()
    userpassword = models.TextField()

class Item(models.Model):
    itemid = models.AutoField(primary_key=True)
    stock = models.IntegerField()
    price = models.FloatField()
    picture = models.ImageField()
    publisher = models.IntegerField()

class PublishedItem(models.Model):
    itemid = models.IntegerField()
    userid = models.IntegerField()
    date = models.DateField(auto_now = True)
    
class PurchasedItem(models.Model):
    itemid = models.IntegerField()
    userid = models.IntegerField()
    date = models.DateField(auto_now=True)

class SavedItem(models.Model):
    itemid = models.IntegerField()
    userid = models.IntegerField()
    date = models.DateField(auto_now = True)



