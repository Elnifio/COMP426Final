let OrderView = class{
    constructor(order, root){
        this.order = order
        this.root = root
        this.curDiv = this.createViewDiv()
        this.root.empty().append(this.curDiv)
    }

    createViewDiv = function(){
        let div = $(`<div class='orderDiv'>
                        <div class='info'></div>
                        <button>view details</button>
                    </div>`)
        let number = this.order.items.length()
        let totalPrice = 0
        this.order.items.forEach((item)=> {totalPrice + item.number*item.price})
        div.find('info').append(`<p>Order No.${this.order.id}</p>
                                <p>number of items purchased: ${number}</p>
                                <p>total price: ${totalPrice}</p>`)
        return div
    }

    createDetailViewDiv = function(){
        let div = $(`<div class='orderDetailDiv'>
                        <div></div>
                        <button>hide details</button>
                    </div`)
    }
}