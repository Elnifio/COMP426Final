# Backend

## API

##### find_item: finished

```
GET ./item/<int:itemid>
```

Return:
```
If itemid exists: 
    {
        "id": self.itemid,
        "name": self.itemname,
        "publisher": publisher['name'],
        "price": self.price,
        "description": self.itemdescription,
        "stock": self.stock,
        "category": self.categoryid,
        "rating": rating_response,
        "picture": self.picture.url,
    }
Else:
    Http404("Item does not exist")
```

##### find_all: Finished

```
GET ./allitems
params: {skip = 0, limit = 100} - similar to Tweet
```

Returns: 
```
{result: [list of items in JSON format]}
```

##### find_category: Finished

```
GET ./category/<int:categoryid>
params: {skip=0, limit=100} - similar to Tweet
```

Returns: 
```
if categoryid exists:
    {result: [list of items in JSON format]}
else:
    {result: []}
```

##### find_all_category: Finished, Category functionality not implemented

```
GET ./categories
```

Returns: 
```
{result: [list of categories]}
```

##### upload_item: Finished

**DO NOT SUPPORT AJAX & Axios Submission!** After a form is submitted, you will automatically be re-directed to ./postitem page. 

Should not change: 
 - \<form\>: 

```
POST ./postitem
form structure:
<form id="postitem" enctype="multipart/form-data" action="/postitem" method="post">
    <!-- must include this csrf token -->
    {% csrf_token %}
    Item name: <input id="itemname" name="name"><br />
    Item description: <textarea id="itemdescription" name="description"></textarea><br />
    Item price: <input id="itemprice" type="number" name="price"><br />
    Item stock: <input id="itemstock" type="number" name="stock"><br />
    Item image: <input id="itemimage" type="file" name="image"><hr />
    <button type="submit">Submit</button>
</form>
```



 - find_item - given an id, find a particular item - **Finished**
 - find_all - find all items under a category - *Partly finished*, need to add {csrf_token} to the template
 - find_all_category - find all categories - **Finished**
 - upload_item - POST item to the website - **Finished**
 - user_info: { customer:  purchased_items, account balance; merchants: merchandises{stock, price}, income } - **Finished**
 - Purchase_item - POST <item, userid> to website, (stock <= 0)?404:200
 - Send message to Merchant - optional
 - Normal Message sent by customer - optional
 - Purchase_item message sent by system - optional
 - Add & Remove & Edit Saved items
 - Post & Delete & Edit Published items
 - CreateUser - *Partly finished*, need to handle images
 - Log-in - **Finished**
 - Log-out - **Finished**

### Model
 - User model: - finished
 - Username - string
 - Email - string - Email field
 - Password - dstring
 - Saved items - string - json(item ids)
 - Purchased items - string - json(item ids)
 - Published items - string - json(item ids)
 - Item model: - finished
 - Item name - string
 - Published date - date field
 - Stock - Integer field
Price - Float field
Picture - File field
Publisher - id field



View:
merchandise - {name, price, stock, description, picture}
user_settings - {user_name, Password, email, balance, Saved_items}


Frontend:
register.html
index
login
user_settings
product page


customer:
shopping cart
check out
order history*
merchant:
item management page
order management*
Product:
name
image
description
price
stock
user_settings:
user_name
password

### Still not finished: 

 - [x] User Log-in front-end functionality - for createuser and verifyUser(Front End Model Finished)
 - [ ] Communication between Front-back end
 - [ ] Back-end APIs - Yunzhou Liu: Not finished backend for HTTP request
 - [x] Third-party API usage
 - [x] Front-end: Shopping Cart
 - [x] Front-end: beautification using bulma (optional)(many CSS fixed)
 - [ ] Ratings POST to backend, handling in database and functions
 - [ ] Upload items to database


### After Migrating Front End To Django Framework

 - [ ] Async functions in item.py (under folder item, search, and shoppingCart)
 - [ ] Async functions in User.py (under folder user)
 - [ ] user / userView model change to accomadate email address (under folder user)
 - [ ] Page for posting new items (presumably under folder user)
