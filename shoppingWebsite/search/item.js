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

    async purchase(amount){
        // called when user make a purchase of item
        // need to provide the amount that user want to purchase


        // let result = await axios({

        // })
        console.log(amount)
        // await this.sync()
        return this
    }

    async saveToCart(amount){
        // called when user save an item to cart
        // need to provide the amount that the user want to add to cart

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
    // fetch information for all the items in a Json file
    let result = await axios({

    })
    return result.data
}

// no longer trying to implement the function for user to generate their own item
// Item.create = async (name, author, price, stock, description) => {
//     let result = await axios({

//     })
//     return new Item(result.data)
// }