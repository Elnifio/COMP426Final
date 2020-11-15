let ShoppingCart = class{
    constructor(items){
        this.items = items
    }

    summary(){
        // return the summary information of the cart
        // how many items are currently saved in the cart
        // how much netWorth is the cart
        let p = 0;
        let q = 0;
        this.items.forEach((item)=>{
            p = p + item.amount*item.price
            q = q + item.amount
        })
        return {quantity: q, price: p}
    }

    async remove(item){
        // remove a specific item from cart
        const index = this.items.indexOf(item)
        await item.removeFromCart()
        this.items.splice(index, 1)
    }

    async empty(){
        // remove all items from cart
        this.items.forEach(async (item) => {
            await item.removeFromCart()
        })
        // empty the shopping cart
        this.items = []
        
    }

    async purchase(){
        // purchase all items saved in cart
        this.items.forEach(async (item) => {
           await item.purchase()
        })
        // note that after we purchase every item in the cart
        // we also need to empty the cart
        await this.empty()
    }
}