# Backend

### API
 - find_item - given an id, find a particular item - **Finished**
 - find_all - find all items under a category - *Partly finished*, need to add {csrf_token} to the template
 - find_all_category - find all categories - **Finished**
 - upload_item - POST item to the website - **Finished**
 - user_info: { customer:  purchased_items, account balance; merchants: merchandises{stock, price}, income }
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

 - [ ] User Log-in front-end functionality - for createuser and verifyUser(Front End Model Finished)
 - [ ] Communication between Front-back end
 - [ ] Back-end APIs - Yunzhou Liu: Not finished backend for HTTP request
 - [x] Third-party API usage
 - [x] Front-end: Shopping Cart
 - [x] Front-end: beautification using bulma (optional)(many CSS fixed)
 - [ ] Ratings POST to backend, handling in database and functions
 - [ ] Upload items to database
