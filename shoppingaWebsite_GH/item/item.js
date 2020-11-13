let Item = class{
    // Item support 3 kinds of operations
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
    }

    async saveToCart(amount){
        //  save item to shopping cart
        // provide the amount of items user desired to add to shopping cart
    }
    
    async purchase(amount){
        // purchase the items
        // provide the amount of items user want to purchase

        // let result = await axios({

        // })
        console.log(amount)
        // await this.sync()
        return this
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