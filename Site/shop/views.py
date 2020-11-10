from django.shortcuts import render
from .models import Item, User, PurchasedItem, PublishedItem, SavedItem, Category
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt,csrf_protect #Add this
import json

# Create your views here.
def getItem(request, itemid):
    return Item.findItem(itemid)

# 
def getAllItems(request):
    return JsonResponse(Item.objects.all())

# 
def getCategory(request, categoryid, limit=50, skip=0):
    category = Category.getCategory(categoryid, skip, limit)
    return category

# 
@csrf_exempt #This skips csrf validation. Use csrf_protect to have validation
def getAllCategories(request):
    print(json.loads(request.body))
    return JsonResponse(Category.getAllCategories(), safe=False)


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
def createUser(request):
    return HttpResponse("""
    <html>
        <head>
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        </head>
        <body>
            {% csrf_token %}
            <button id="test">Button</button>
            <script>
                $("#test").on("click", async function(e) {
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
                })
            </script>
        </body>
    </html>
    """)

# POST request: 
# data:
#       name: username
#       password: user password
#       email: user email, mutually exclusive with name
# Return status:
#       200: Login success
#       404: Login fail
def verifyUser(request):
    pass



