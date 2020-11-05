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
        let div = $(`<div class = 'itemView'>
                        <img src='./icons/426.4.PNG' class='itemImg'/>
                        <div class='itemText'>
                            <p class='itemName'><strong>${this.item.name}</strong></p>
                            <div class='itemRating'></div>
                            <p class='itemPublisher'>By: ${this.item.publisher}</p>
                            <p class='itemPrice'>&#36;${this.item.price}</p>
                        </div>
                    </div>`);
        // add rating stars to the simple itemView page
        let ratingDiv = div.find('.itemRating')
        let rating = this.item.rating;
        for (let i = 0; i<5; i++){
            if (i<rating){
                $(ratingDiv).append('&#9733;');
            } else {
                $(ratingDiv).append('&#9734;');
            }
        }
        div.find('.itemImg').on('click', (e) => {
            let newDiv = this.createDetailedView();
            this.curDiv.replaceWith(newDiv);
            this.curDiv = newDiv;
        })
        return div;
    }

    createDetailedView(){
        let div = $(`<div class = 'itemDetailView'>
                        <img src='./icons/426.4.PNG' class='itemDetailImg'/>
                        <div class='itemDetailText'>
                            <p class='itemDetailName'><strong>${this.item.name}</strong></p>
                                <div class='itemDetailRating'></div>
                            <p class='itemDetailPublisher'>By: ${this.item.publisher}</p>
                            <p class='itemDetailPrice'>&#36;${this.item.price}</p>
                            <p class='itemDetailDescription'>${this.item.description}</p>
                            <br>
                            <form class='purchaseForm'>
                                <label for='amount'>Amount:</label>
                                <select name='amount' class='amount'>
                                </select>
                                <button type = 'submit' class ='purchaseButton'>purchase</button>
                            </form>
                        </div>
                    </div>`)
        // fill in the rating stars
        let ratingDiv = div.find('.itemDetailRating')
        let rating = this.item.rating;
        for (let i = 0; i<5; i++){
            if (i<rating){
                $(ratingDiv).append('&#9733;');
            } else {
                $(ratingDiv).append('&#9734;');
            }
        }
        // fill in the options for the purchase form
        let stock = this.item.stock
        for (let i = 1; i <= stock; i++){
            div.find('.amount').append(`<option value="${i}">${i}</option>`)
        }
        div.find('form').on('submit', (event) => {
            event.preventDefault()
            this.item.purchase(purchaseDiv.find(`select[name='amount']`).val())
        })
        div.find('.itemDetailImg').on('click', (e)=> {
            let newDiv = this.createViewDiv()
            this.curDiv.replaceWith(newDiv)
            this.curDiv = newDiv
        })
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