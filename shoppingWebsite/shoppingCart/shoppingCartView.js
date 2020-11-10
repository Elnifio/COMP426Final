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
                detailDiv.find('.quantity').append(`<option value="${i+1}">${i+1}</option>`)
            }
            detailDiv.find('.quantity').append(`<option value="11" selected='selected'>test11</option>`)
            div.find('.cartItems').append(detailDiv)
            detailDiv.find('.removeFromCartButton').on('click', (e)=>{
                detailDiv.remove()
                this.shoppingCart.items = this.shoppingCart.items.filter((i) => {
                    return i != item})
            })
        })
        div.find('.emptyCartButton').on('click', (e)=>{})
        div.find('checkOutButton').on('click', (e)=>{})
        return div
    }
}