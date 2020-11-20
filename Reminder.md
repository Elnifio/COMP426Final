# Backend

## API

If not otherwise specified (./postitem), all POST request could (and is expected) to use Axios to make requests. 

### find_item: finished

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

### find_all: Finished

```
GET ./allitems
params: {skip = 0, limit = 100} - similar to Tweet
```

Returns: 
```
{result: [list of items in JSON format]}
```

### find_category: Finished

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

### find_all_category: Finished, Category functionality not implemented

```
GET ./categories
```

Returns: 
```
{result: [list of categories]}
```

### upload_item: Finished

**DO NOT SUPPORT AJAX & Axios Submission!** After a form is submitted, you will automatically be re-directed to ./postitem page. 

Should not change: 
 - \<form\>: 
   - enctype
   - action
   - method
 - \<inputs\>:
   - name - the form should contain inputs with the same names
   - type="file" - for <input> with name="image", its type should be set to "file"
 - \<button\>: should have a submit button
 - csrf token

Other properties of this form could be changed. 

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

### user_info: Finished

```
GET ./user
```

Returns:
```
if not login:
    Http404("Not logged in")
else if invalid user:
    Http404("User does not exist")
else:
    {
        "userinfo": {
            "id": user.userid,
            "name": user.username,
            "email": user.useremail,
            "image": user.userimage.url,
            "balance": user.balance
        },
        "publishedItems": [List of items that user published],
        "purchasedItems": [List of items that user purchased],
        "savedItems": [List of items that user saved]
    }
```

### purchase_item: Finished, not tested

```
POST ./purchase
data: {
    itemid: int,
    amount: int
}
```

Result:
```
If not logged-in:
    Http404("Not logged in")
If invalid userid:
    Http404("User not found")
If itemid invalid (cannot be parsed as integer, or does not exist):
    Http404("Item id error")
If amount invalid (cannot be parsed as integer, or <= 0):
    Http404("Amount error")
If item stock <= 0:
    Http404("Item out of stock")
else if item.stock < amount:
    Return {success: False, Remaining: item.stock} with Status Code 403
else:
    Return {success: True}
```

### Save_item: Finished

```
POST ./save
data: {
    itemid: int,
    amount: int
}
```

Result:
```
If not logged in:
    Http404("Not logged in")
If invalid user:
    Http404("User not found")
If itemid invalid:
    Http404("Item id error")
If amount invalid:
    Http404("Amount error")
else:
    Return {success: True}
```

### create_user: Finished

```
POST ./createuser
data: {
    name: string,
    password: string,
    email: string,
}
```

Result: 
```
If logged in: 
    Http404("Already logged in")
If email already registered:
    Return {success: False}
else:
    Return {success: True}
    Local login status updated
```

### verify_login

```
POST ./verifyuser
data: {
    email: string,
    password: string
}
```

Result:
```
if already logged in:
    Return {success: True, exist: True, loggedin: True}
if email not recognized:
    Http404("User does not exist")
else:
    if password match record: 
        Return {success: True, exist: True, loggedin: False}
        Local login status updated
    else:
        Return {success: False, exist: True, loggedin: False}
```

### Logout - Finished

```
GET ./logout
```

Result:
```
If not logged in:
    Http404("Haven't Logged in")
else:
    Return {}
    Local login status updated
```

### Verify login - Finished

```
GET ./verifylogin
```

Result: 
```
If logged in:
    Return {login: True}
Else:
    Return {login: False}
```

- - -

### TODO

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
