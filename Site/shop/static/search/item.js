let Item = class{
    constructor(obj){
        // Item support 3 kinds of operations
        // to remove item from shopping cart
        // to save the item to shopping cart
        // to purchase the item
        // to fetch the newest version of the item from backend
        this.id = obj.id
        this.name = obj.name
        this.publisher = obj.publisher
        this.price = obj.price
        this.description = obj.description
        this.stock = obj.stock
        this.category = obj.category
        this.rating = obj.rating
        this.picture = obj.picture
    }

    async sync(){
        // after user made a purchase to the item
        // use sync to update the information of item to ensure consistency
        let result = await axios({
            method: 'get',
            url: './allitems/'+this.id,
        })
        this.id = result.id
        this.name = result.name
        this.publisher = result.publisher
        this.price = result.price
        this.description = result.description
        this.stock = result.stock
        this.category = result.category
        this.rating = result.rating
        this.picture = result.picture
    }

    async purchase(amount){
        // POST ./purchase
        // data: {
        //     itemid: int,
        //     amount: int
        // }
        // ```

        // Result:
        // ```
        // If not logged-in:
        //     Http404("Not logged in")
        // If invalid userid:
        //     Http404("User not found")
        // If itemid invalid (cannot be parsed as integer, or does not exist):
        //     Http404("Item id error")
        // If amount invalid (cannot be parsed as integer, or <= 0):
        //     Http404("Amount error")
        // If item stock <= 0:
        //     Http404("Item out of stock")
        // else if item.stock < amount:
        //     Return {success: False, Remaining: item.stock} with Status Code 403
        // else:
        //     Return {success: True}
        try {
            let result = await axios({
                method: 'post',
                url: './purchase',
                data: {
                    itemid: this.id,
                    amount: amount
                }
            })
        } catch {
        }
        await this.sync()
    }
    
    async saveToCart(amount){
        // purchase the items
        // provide the amount of items user want to purchase

        // let result = await axios({

        // })
        // POST ./save
        // data: {
        //     itemid: int,
        //     amount: int
        // }
        // ```

        // Result:
        // ```
        // If not logged in:
        //     Http404("Not logged in")
        // If invalid user:
        //     Http404("User not found")
        // If itemid invalid:
        //     Http404("Item id error")
        // If amount invalid:
        //     Http404("Amount error")
        // else:
        //     Return {success: True}
        // ```
        try {
            let result = await axios({
                method: 'post',
                url: './save',
                data: {
                    itemid: this.id,
                    amount: amount
                }
            })
        } catch {
        }
        await this.sync()
    }
    async removeFromCart(){
        // remove item from cart
    }

}

Item.findall = async () => {
    let result = await axios({
        method: 'get',
        url: './allitems',
        params: {
            limit: 50,
            skip: 0
        }
    })
    const items = result.data['result'].map((item) => new Item(item))
    return items
}

// no longer trying to implement the function for user to generate their own item
// Item.create = async (name, author, price, stock, description) => {
//     let result = await axios({

//     })
//     return new Item(result.data)
// }