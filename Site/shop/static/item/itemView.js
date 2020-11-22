let ItemView = class{
    constructor(item, parentDiv, startInEdit){
        // startInEdit is essentially useless now because 
        // we no longer plan to let user do their modify 
        // or publish items
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
        // the normal view div for each item
        let div = $(`<div class = 'itemView'>
                        <img src=${this.item.picture} class='itemImg'/>
                        <div class='itemText clickZone'>
                            <p class='itemName'><strong>${this.item.name}</strong></p>
                            <div class='itemRating'></div>
                            <p class='itemPublisher'>Seller: ${this.item.publisher}</p>
                            <p class='itemPrice'>&#36;${this.item.price}</p>
                            <p class="itemStock">Remaining:${this.item.stock}</p>
                        </div>
                        <i class="fas fa-arrow-circle-down fa-2x dropDownButton"></i>
                    </div>`);
        // add rating stars to the simple itemView page
        let ratingDiv = div.find('.itemRating')
        let rating = Math.floor(Math.random() * 6);
        for (let i = 0; i<5; i++){
            if (i<rating){
                $(ratingDiv).append('&#9733;');
            } else {
                $(ratingDiv).append('&#9734;');
            }
        }
        // click on the drop down button reveals more details in the item
        div.find('.dropDownButton').on('click', (e) => {
            let newDiv = this.createDetailedView();
            this.curDiv.replaceWith(newDiv);
            this.curDiv = newDiv;
        })
        return div;
    }

    createDetailedView(){
        // the detailed view div for each item
        let div = $(`<div class = 'itemDetailView'>
                        <div class='img-zoom'>
                            <img src=${this.item.picture} class='itemDetailImg'/>
                        </div>
                        <div class='itemDetailText'>
                            <div class= 'clickZone'>
                            <p class='itemDetailName'><strong>${this.item.name}</strong></p>
                                <div class='itemDetailRating'></div>
                            <p class='itemDetailPublisher'>Seller: ${this.item.publisher}</p>
                            <p class='itemDetailPrice'>&#36;${this.item.price}</p>
                            <p class='itemDetailDescription'>${this.item.description}</p>
                            </div>
                            <br>
                            <form class='purchaseForm'>
                                <label for='amount'>Amount:</label>
                                <select name='amount' class='amount'>
                                </select>
                                <button type = 'submit' class ='purchaseButton'><i class="fas fa-cart-arrow-down fa-2x"></i></button>
                            </form>
                        </div>
                        <div class='dropUpButton'><i class="fas fa-arrow-circle-up fa-3x"></i></div>
                    </div>`)
        // fill in the rating stars
        let ratingDiv = div.find('.itemDetailRating')
        let rating = Math.floor(Math.random() * 6);
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
        div.find('form').on('submit', async (event) => {
            // when user add item to shoppingcart
            event.preventDefault()
            await this.item.saveToCart(this.curDiv.find(`select[name='amount']`).val())
            // grab newest version of item from backend
            // rerender the itemView Div so that the updated information is reflected
            let newDiv = this.createDetailedView()
            this.curDiv.replaceWith(newDiv)
            this.curDiv=newDiv
        })
        // click on the drop up button switch back to the simplifies item view
        div.find('.dropUpButton').on('click', (e)=> {
            let newDiv = this.createViewDiv()
            this.curDiv.replaceWith(newDiv)
            this.curDiv = newDiv
        })
        // here is the code to implement image zoom in function using css
        div.find('.itemDetailImg').on('mousemove', function(event) {
                let offset = div.find('.img-zoom').offset();
                let x = (event.pageX- offset.left) / div.find('.itemDetailImg').width() *100
                let y = (event.pageY- offset.top) / div.find('.itemDetailImg').height() *100
                div.find('.itemDetailImg').css({'transform-origin': x+'% '+y+'%', 'transform': 'scale(2.5)'})
        });
        div.find('.itemDetailImg').on('mouseout', function(event) {
            div.find('.itemDetailImg').css({'transform': 'scale(1)'})
    });
        return div
    }

}