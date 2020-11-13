from django.shortcuts import render
from .models import Item, User, PurchasedItem, PublishedItem, SavedItem, Category
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt,csrf_protect #Add this
import json

# Create your views here.
def get_item(request, itemid):
    return Item.findItem(itemid)

def test_homepage(request):
    return render(request, """
    <html>
        <head>
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        </head>
        <body>
            <button id="test">Button</button>
            <script>
                $("#test").on("click", async function(e) {
                    e.preventDefault();
                    console.log("querying..");
                    const request = await axios({
                        method: "post",
                        url: "./test",
                        params: {
                            "a01": 1
                        },
                        data: {
                            "a02": 2
                        }
                    })
                    console.log(request);
                })
            </script>
        </body>
    </html>
    """, {})

# 
@csrf_exempt #This skips csrf validation. Use csrf_protect to have validation
def get_all_items(request):
    return JsonResponse({"result":[x.getJSON() for x in Item.objects.all()]})

# 
def get_categories(request, categoryid, limit=50, skip=0):
    category = Category.getCategory(categoryid, skip, limit)
    return category

# 
@csrf_exempt #This skips csrf validation. Use csrf_protect to have validation
def get_all_categories(request):
    print(json.loads(request.body))
    print(Category.getAllCategories())
    return JsonResponse(Category.getAllCategories())


# POST 
# data: 
#       username
#       password
#       email
#       (Optional) image
# Return status:
#       200: Create success
#       404: Create Fail
@csrf_exempt #This skips csrf validation. Use csrf_protect to have validation
def create_user(request):
    pass

# POST request: 
# data:
#       name: username
#       password: user password
#       email: user email, mutually exclusive with name
# Return status:
#       200: Login success
#       404: Login fail
def verify_user(request):
    pass



