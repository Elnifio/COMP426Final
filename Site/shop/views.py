from django.shortcuts import render
from .models import Item, User, PurchasedItem, PublishedItem, SavedItem, Category
from django.http import JsonResponse, HttpResponse
from django.core.files import File
from django.views.decorators.csrf import csrf_exempt,csrf_protect #Add this
import json
from django.http import Http404

# Create your views here.

def test_homepage(request):
    return render(request, "./homepage.html", {})

# GET ./item/${itemid}
def get_item(request, itemid):
    return JsonResponse(Item.find_item(itemid))

# GET ./allitems
# Returns Json encoded list of items with skip and limit
def get_all_items(request):
    skip = 0
    limit = 100
    if "skip" in request.GET and "limit" in request.GET:
        try:
            skip = int(request.GET['skip'])
            limit = int(request.GET['limit'])
        except ValueError:
            raise Http404("Invalid Parameters")
    return JsonResponse({"result":[x.getJSON() for x in Item.get_all(limit, skip)]})

# return JSON encoded list of items under category
# GET ./category/${categoryid}
# params: 
#       skip: number of items that needs to be skipped
#       limit: number of 
def get_categories(request, categoryid):
    skip = 0
    limit = 100
    if "skip" in request.GET and "limit" in request.GET:
        try:
            skip = int(request.GET['skip'])
            limit = int(request.GET['limit'])
            if limit > 100:
                limit = 100
            elif limit < 50:
                limit = 50
            if skip < 0:
                skip = 0
        except ValueError:
            raise Http404("Invalid Parameters")
    category = Category.getCategory(categoryid, skip, limit)
    return JsonResponse(category)

# Return JSON encoded all category lists
def get_all_categories(request):
    return JsonResponse(Category.getAllCategories())


# POST ./createuser
# data: 
#       username
#       password
#       email
#       (Optional) image
# Return status:
#       200: Create success and login complete
#       404: Create Fail
# @csrf_exempt #This skips csrf validation. Use csrf_protect to have validation
def create_user(request):
    if request.COOKIES.get("login"):
        raise Http404("Already Logged in")

    values = json.loads(request.body)
    username = values['name']
    password = values['password']
    useremail = values['email']

    # TODO: MODIFY THIS
    # userimage = values['image']
    if not User.identifyRegister(useremail):
        return JsonResponse({"success":False})

    user = User()
    user.username = username
    user.userpassword = password
    user.useremail = useremail
    user.save()
    response = JsonResponse({"success": True})
    response.set_cookie("login", useremail)
    return response

# POST ./verifyuser
# data:
#       email: user email
#       password: user password
# Return status:
#       200: Login success
#       404: Login fail
@csrf_exempt
def verify_user(request):
    values = json.loads(request.body)

    if request.COOKIES.get("login"):
        response = JsonResponse({"success":True, "exist": True, "loggedin": True})
        return response

    password = values['password']
    useremail = values['email']
    out = {"success":False, "exist":False, "loggedin": False}
    
    if not User.identifyRegister(useremail):
        if User.check_login(useremail, password):
            out['success'] = True
            out['exist'] = True
        else:
            out['success'] = False
    else:
        raise Http404("User does not exist")
    response = JsonResponse(out)
    response.set_cookie("login",useremail)
    return response

# GET ./logout
# Returns:
#     200: Success logout
#     404: Already logged-out
def logout(request):
    if not request.COOKIES.get("login"):
        raise Http404("Haven't Logged In")
    response = JsonResponse({})
    response.delete_cookie("login")
    return response

# POST ./postitem
# data:
#     name: item name, no longer than 100 characters. Longer characters will be automatically stripped
#     description: item description, no longer than 300 characters
#     stock: integer, a non-integer stock will create a 403 error
#     price: float, a non-float price will create a 403 error
#     picture: optional, picture encodings of the item posted
#     category: optional, must be chosen from one of the category ids. Other ids will cause a 404 error
# Return:
#     itemid: the id of the item     
# @csrf_exempt
def post_item(request):
    def return_bad_request(code=403):
        response = JsonResponse({})
        response.status_code=403
        return response

    if not request.COOKIES.get("login"):
        return return_bad_request()
    
    returndict = {}
    useremail = request.COOKIES.get("login")
    print(request.POST)
    print(request.FILES)
    print(request.FILES['image'])
    print(request.FILES['image'].chunks())

    values = request.POST
    name = values['name'][0][:100]
    description = values['description'][0][:300]
    stock = values['stock'][0]

    try:
        stock = int(stock)
    except ValueError:
        return return_bad_request()
    price = values['price']
    try:
        price = float(price)
    except ValueError:
        return return_bad_request()
    
    if not "image" in request.FILES:
        return return_bad_request()
    
    item = Item()
    item.itemname = name
    item.itemdescription = description
    item.stock = stock
    item.price = price
    item.picture = request.FILES['image']

    userid = User.findUserID(useremail)
    item.publisher = userid

    # TODO: Include the category here
    item.categoryid = 0
    item.save()

    with open(item.picture.path, "wb+") as f:
        img = request.FILES['image'].chunks()
        for chunk in img:
            f.write(chunk)

    pitem = PublishedItem()
    pitem.itemid = item.itemid
    pitem.userid = userid
    pitem.save()
    
    returndict['itemid'] = item.itemid

    response = JsonResponse(returndict)
    return response



