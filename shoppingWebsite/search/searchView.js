let SearchView = class{
    // implementation of autocomplete on the front end
    constructor(parentDiv, arr){
        this.arr = arr
        this.alreadyFilled = false
        let newDiv = $(`<form class='searchForm'>
                            <div class='autocomplete'>
                                <input type='text' placeholder="search.." name="search">
                            </div>
                            <button type="submit">item</button>
                        </form>
                        <div class='dialog'></div>`)
        this.curDiv = newDiv
        this.curDiv.find('form').on('submit', (e) => {
            e.preventDefault()
            // could be later implemented to interact with backend to fetch results matching the
            // search input
        })
        this.curDiv.find('input').on('click', (e) => {
            if (!this.alreadyFilled){
                this.curDiv.find('.dialog').addClass('open')
            }
        })
        $(parentDiv).append(this.curDiv)
    }

    initDialog(){
        this.clearDialog();
        for (let i=0; i<this.arr.length; i++){
            this.curDiv.find('.dialog').append($(`<div>${this.arr[i].name}</div>`))
        }
    }

    clearDialog(){
        this.curDiv.find('.dialog').empty()
    }
}