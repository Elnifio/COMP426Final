let ItemView = class{
    constructor(item, parentDiv, startInEdit){
        this.item = item
        this.parentDiv = $(parentDiv)
        if(!startInEdit){
            this.curDiv = this.createViewDiv()
            this.parentDiv.append(this.curDiv)
        } else {
            this.curDiv = this.createEditDiv()
            this.parentDiv.append(this.curDiv)
        }
    }
    createViewDiv(){
        let div = $(`<div class = 'itemView card'>
                            <div class='card-content'>
                                <div class='content has-text-centered'>
                                    <p class='title is-4'>Name: ${this.item.name}</p>
                                    <p class='title is-6'>Publisher: ${this.item.publisher}</p>
                                    <div class ='extraInfo'>
                                        <p class='subtitle is-7'>Stock: ${this.item.stock}</p>
                                        <p class='subtitle is-7'>Price: ${this.item.price}</p>
                                        <p class='subtitle is-7'>Description ${this.item.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>`)
        let purchaseDiv = $(`<form class='purchaseForm'>
                                <label for='amount'>Choose an amount:</label>
                                <select name='amount' class='amount'>
                                </select>
                                <br>
                                <button type = 'submit' class ="purchaseButton button is-medium">purchase</button>
                            </form>`)
        let stock = this.item.stock
        for (let i = 1; i <= stock; i++){
            purchaseDiv.find('.amount').append(`<option value="${i}">${i}</option>`)
        }
        purchaseDiv.on('submit', (event) => {
            event.preventDefault()
            this.item.purchase(purchaseDiv.find(`select[name='amount']`).val())
            // let newDiv = this.createViewDiv()
            // this.curDiv.replaceWith(newDiv)
            // this.curDiv = newDiv
        })
        div.find('.extraInfo').append(purchaseDiv)
        return div
    }

    createEditDiv(){
        let div = $()
        return div

    }

    createManagementDiv(){
        let div = $()
        return div
    }
}