let Item = class{
    // Item support 4 kinds of operations
    // to remove item from shopping cart
    // to save the item to shopping cart
    // to purchase the item
    // to fetch the newest version of the item from backend
    constructor(obj){
        this.id = obj.id
        this.name = obj.name
        this.publisher = obj.publisher
        this.price = obj.price
        this.description = obj.description
        this.stock = obj.stock
        this.category = obj.category
        this.rating = obj.rating
        this.picture = obj.picture
        this.amount = obj.amount
    }

    async sync(){
        let result = await axios({
        })
        this.id = obj.id
        this.name = obj.name
        this.publisher = obj.publisher
        this.price = obj.price
        this.description = obj.description
        this.stock = obj.stock
        this.category = obj.category
        this.rating = obj.rating
        this.picture = obj.picture
        this.amount = obj.amount
    }

    async saveToCart(amount){
        //  save item to shopping cart
        // provide the amount of items user desired to add to shopping cart
    }

    async updateAmount(amount){
        // a unique property to items in the shopping cart
        // update the amount of items in the front end
        // when purchase the item, 
        this.amount = amount
    }
    
    async purchase(){
        // purchase the items
        // provide the amount of items user want to purchase
        // note that in the shopping cart section we encapsulate information
        // of how much item are in the cart in the front end
        // to reduce the communications with the backend
        // when we make the final purchase
        // we just send the request to backend with the amount encapsulated in the object


        // let result = await axios({

        // })
        // await this.sync()
    }

    async removeFromCart(){
        // remove item from cart
    }

}

Item.findall = async () => {
    //  get all items in a JSON file
    // used when showing all items
    let result = await axios({

    })
    return result.data
}

// no longer plan to implement the the function for user to create their own item
// Item.create = async (name, author, price, stock, description) => {
//     let result = await axios({

//     })
//     return new Item(result.data)
// }