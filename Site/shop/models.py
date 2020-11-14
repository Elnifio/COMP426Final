from django.db import models

# Create your models here.
import json

class User(models.Model):
    userid = models.AutoField(primary_key=True, db_index=True)
    username = models.TextField(db_index=True)
    useremail = models.EmailField(db_index=True)
    userimage = models.ImageField(upload_to="images/Users")
    userpassword = models.TextField()

    # Throw Error: 
    #           User.DoesNotExist
    @classmethod
    def findUser(cls, queryid):
        user = cls.objects.get(userid=queryid)
        return {
            "id": user.userid,
            "name": user.username,
            "email": user.useremail,
            "image": user.userimage.url
        }
    
    # Check if a user with username and email already registered. 
    # Returns True if not registered
    # False otherwise
    @classmethod
    def identifyRegister(cls, email):
        count = cls.objects.filter(useremail=email).count()
        return count == 0

    @classmethod
    def findUserID(cls, email):
        userid = cls.objects.get(useremail=email).userid
        return userid

    @classmethod
    def check_login(cls,email, password):
        try:
            usr = cls.objects.get(useremail=email)
            return password == usr.userpassword
        except User.DoesNotExist as e:
            return False


    # Throws: 
    #           User.DoesNotExist
    #           Item.DoesNotExist
    # Returns: JSON formatted User Info
    @classmethod
    def queryInfo(cls, queryid):
        published = [Item.find_item(x.itemid) for x in PublishedItem.objects.filter(userid=queryid)]
        purchased = [Item.find_item(x.itemid) for x in PurchasedItem.objects.filter(userid=queryid)]
        saved = [Item.find_item(x.itemid) for x in SavedItem.objects.filter(userid=queryid)]
        out = {
            "userinfo": cls.findUser(queryid),
            "publishedItems": json.dumps(published),
            "purchasedItems": json.dumps(purchased),
            "savedItems": json.dumps(saved)
        }
        return out

class Item(models.Model):
    itemid = models.AutoField(primary_key=True)                                 # item id
    itemname = models.CharField(max_length=100, db_index=True) # item name
    itemdescription = models.CharField(max_length=300)                  # item description
    stock = models.IntegerField()                                                            # Stock of this item
    price = models.FloatField()                                                                # Price of this item
    picture = models.ImageField(upload_to="images/Items")            # An image of this item
    publisher = models.IntegerField(db_index=True)                          # Publisher (user who published this item)
    categoryid = models.IntegerField()                                                 # Category of an item

    # Throw Error: Item.DoesNotExist; User.DoesNotExist
    @classmethod
    def find_item(cls, queryid):
        item = cls.objects.get(itemid=queryid)
        return item.getJSON()

    @classmethod
    def exists(cls, itemid):
        return cls.objects.filter(itemid=itemid).count() != 0

    @classmethod
    def get_all(cls, limit, skip):
        items = cls.objects.all().order_by('-itemid')[skip:skip+limit]
        return items

    # Throw Error: User.DoesNotExist
    def getJSON(self):
        publisher = User.findUser(self.publisher)
        ratings = [x.rating for x in Rating.objects.filter(itemid=self.itemid)]
        rating_response = None
        if len(ratings) == 0:
            rating_response = -1
        else: 
            rating_response = sum(ratings) / len(ratings)
        return {
            "id": self.itemid,
            "name": self.itemname,
            "description": self.itemdescription,
            "stock": self.stock,
            "price": self.price,
            "picture": self.picture.url,
            "publisher": publisher,
            "category": self.categoryid,
            "rating": rating_response
        }
        
    def __str__(self):
        return "Item id: %s; Publisher id: %s" % (self.itemid, self.publisher)

class PublishedItem(models.Model):
    itemid = models.IntegerField(db_index=True)
    userid = models.IntegerField(db_index=True)
    date = models.DateField(auto_now = True)

    def __str__(self):
        return "Item id: %s, User id: %s, Date: %s" % (self.itemid, self.userid, self.date)
    
class PurchasedItem(models.Model):
    itemid = models.IntegerField(db_index=True)
    userid = models.IntegerField(db_index=True)
    purchaseCount = models.IntegerField()
    date = models.DateField(auto_now=True)

class SavedItem(models.Model):
    itemid = models.IntegerField(db_index=True)
    userid = models.IntegerField(db_index=True)
    count = models.IntegerField(default=0)
    date = models.DateField(auto_now = True)

    @classmethod
    def query_all_saved(cls, itemid, userid):
        query_result = cls.objects.filter(itemid=itemid).filter(userid=userid)
        return query_result

class Category(models.Model):
    categoryid = models.IntegerField(primary_key=True)
    categoryname = models.CharField(max_length=100)
    categoryimage = models.ImageField(upload_to="images/Categories")
    def toJSON(self):
        return {
            "id": self.categoryid,
            "name": self.categoryname,
            "image": self.categoryimage.url
        }

    @classmethod
    def getCategory(cls, categoryid, skip=0, limit=50):
        items = [x.getJSON() for x in Item.objects.filter(categoryid=categoryid).order_by(itemid).all()[skip:skip+limit]]
        return {"result":items}

    @classmethod
    def getAllCategories(cls):
        categories = [x.toJSON() for x in cls.objects.all()]
        return {"result":categories}
        

class Rating(models.Model):
    userid = models.IntegerField(db_index=True)
    itemid = models.IntegerField(db_index=True)
    rating=models.IntegerField()

