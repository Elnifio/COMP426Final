ShoppingCartView = class{
    constructor(shoppingCart, parentDiv){
        this.shoppingCart = shoppingCart
        this.parentDiv = parentDiv
        this.curDiv = this.createViewDiv()
        this.parentDiv.append(this.curDiv)
    }


    createViewDiv(){
        let div = $(`<div class='cart'>
                        <div class='cartItems'></div>
                        <div class='cartSummary'></div>
                        <button class='checkOutButton' type='button'>Check Out</button>
                        <button class='emptyCartButton' type='button'>Empty Cart</button>
                    <div>`)
        this.shoppingCart.items.forEach((item) => {
            let detailDiv = $(`<div class='shoppingCartItem'>
                                <img src='../icons/item1/426.4.PNG' class='itemImg'/>
                                <div class='itemText'>
                                <p>${item.name}  &#36;${item.price}</p>
                                <label for='amount'>Quantity:</label>
                                <select name='quantity' class='quantity'>
                                </select>
                                <button class='removeFromCartButton'>remove</button>
                                </div>
                             </div>`)
            for (let i = 0; i < item.stock; i ++){
                // need to add all the options to let user select which amount of 
                // item they would eventually purchase
                if (i == item.amount-1){
                    // note here that the default value is the amount that
                    // is encapsulated in the item, which means how many items
                    // has the user put in the cart. We depend on the BackEnd to
                    // remember that value and provide it for us here
                    detailDiv.find('.quantity').append(`<option selected='true' value="${i+1}">${i+1}</option>`)
                } else {
                    detailDiv.find('.quantity').append(`<option value='${i+1}'>${i+1}</option>`)
                }
            }
            detailDiv.find('.quantity').on('input', (e)=>{
                // when user change the number of items in the cart
                item.updateAmount(parseInt(detailDiv.find('.quantity').val()))
                const summary = this.shoppingCart.summary()
                this.curDiv.find('.cartSummary').empty().append(`<p>Total Quantity: ${summary.quantity} <strong>&#124;</strong> Total Price: &#36;${summary.price}</p>`)

            })
            detailDiv.find('.removeFromCartButton').on('click', async (e)=>{
                // when user delete an item from the cart
                await this.shoppingCart.remove(item)
                detailDiv.remove()
                const summary = this.shoppingCart.summary()
                this.curDiv.find('.cartSummary').empty().append(`<p>Total Quantity: ${summary.quantity} <strong>&#124;</strong> Total Price: &#36;${summary.price}</p>`)
            })
            div.find('.cartItems').append(detailDiv)
        })
        const summary = this.shoppingCart.summary()
        div.find('.cartSummary').empty().append(`<p>Total Quantity: ${summary.quantity} <strong>&#124;</strong> Total Price: &#36;${summary.price}</p>`)
        div.find('.emptyCartButton').on('click', async (e)=>{
            // to discard all items in the shopping cart
            // update the shopping cart div
            await this.shoppingCart.empty()
            let newDiv = this.createViewDiv()
            this.curDiv.replaceWith(newDiv)
            this.curDiv = newDiv
        })
        div.find('.checkOutButton').on('click', async (e)=>{
            // to purchase all the things in the shopping cart
            // update the shopping cart div
            await this.shoppingCart.purchase()
            let newDiv = this.createViewDiv()
            this.curDiv.replaceWith(newDiv)
            this.curDiv = newDiv
        })
        return div
    }
}