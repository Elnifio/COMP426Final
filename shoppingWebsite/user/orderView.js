let OrderView = class{
    constructor(order, parent){
        this.order = order
        this.parent = parent
        this.curDiv = this.createViewDiv()
        this.parent.append(this.curDiv)
    }

    createViewDiv = function(){
        let div = $(`<div class='orderDiv'>
                        <div class='info'></div>
                    </div>`)
        let number = 0;
        let price = 0;
        this.order.items.forEach((item)=> {price += item.amount*item.price; number +=item.amount})
        div.find('.info').append(`<p>Order No.${this.order.id}</p>
                                <p>number of items purchased: ${number}</p>
                                <p>total price: ${price}</p>`)
        // probably going to add a archieve order button
        return div
    }

    createDetailViewDiv = function(){
        // under my thoughts
        // on what level to present the order's content
        let div = $(`<div class='orderDetailDiv'>
                        <div></div>
                        <button>hide details</button>
                    </div`)
    }
}