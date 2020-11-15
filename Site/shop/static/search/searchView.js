SearchView = class{
    constructor(arr, parentDiv){
        // provide a list of items to be searched from
        // and the parent Div to add this searchDiv to the parentDiv
        this.arr = arr;
        this.curdiv = this.createSearchViewDiv()
        parentDiv.empty().append(this.curdiv)
    }
    
    createSearchViewDiv(){
        // this div includes the entiraty of the search function
        let div = $(`<div class='searchFormDiv'>
                        <form class='searchForm'>
                            <i class="fas fa-search-plus searchIcon"></i>
                            <input class='searchInput' type='text' name="search" placeholder="search here..."></input>
                            <button class='searchSubmit' type="submit">search</button>
                        </form>
                        <div class='dialog'></div>
                        <br>
                        <div class='resultStatistics'></div>
                        <br>
                        <div class='result'></div>
                    </div>`)
        div.find('.searchForm').on('submit', (e)=>{
            // if we hit the search button
            // find and sort the array of items 
            // create a viewDiv for each item and add 
            // them all to the result div
            e.preventDefault()
            this.curdiv.find('.dialog').empty()
            this.curdiv.find('.resultStatistics').empty()
            this.curdiv.find('.result').empty()
            const searchVal = this.curdiv.find('.searchInput').val()
            let searchResult = this.arr.filter((item) => {
                return item.name.toLowerCase().startsWith(searchVal.toLowerCase())
            })
            searchResult.sort((a, b) => {
                if (a.name.length <= b.name.length){
                    return 1
                } else {
                    return -1
                }
            })
            searchResult.forEach((item) => {
                new ItemView(item, div.find('.result'))
            })
            // append the result statistics (how many result found)
            // and build the function for options sorting the results
            this.curdiv.find('.resultStatistics').append($(`<p class='resultNumber'>Found <span>${searchResult.length}</span> Results</p>
            <label for="resultSort">Order By:</label>
            <select name="resultSort" class="resultSort">
                <option value='Default'>Default</option>
                <option value="Price Ascending">Price &#36;&#36;-&#36;&#36;&#36;</option>
                <option value="Price Descending">Price &#36;&#36;&#36;-&#36;&#36;</option>
                <option value="Ratings Ascending">Ratings &#9733;&#9733;-&#9733;&#9733;&#9733;</option>
                <option value="Ratings Descending">Ratings &#9733;&#9733;&#9733;-&#9733;&#9733;</option>
            </select>`))
            this.curdiv.find('.resultSort').on('input', (e) => {
                // if user specify a desired order of sorting results
                // rebuild the result div to show results
                // in the new order
                if (this.curdiv.find('.resultSort').val()== 'Price Ascending'){
                searchResult.sort((a, b) => {
                    if (a.price >= b.price){
                        return 1
                    } else {
                        return -1
                    }
                })
                } else if (this.curdiv.find('.resultSort').val()== 'Price Descending'){
                    searchResult.sort((a, b) => {
                        if (a.price <= b.price){
                            return 1
                        } else {
                            return -1
                        }
                    })
                } else if (this.curdiv.find('.resultSort').val()== 'Ratings Ascending'){
                    searchResult.sort((a, b) => {
                        if (a.rating >= b.rating){
                            return 1
                        } else {
                            return -1
                        }
                    })
                } else if (this.curdiv.find('.resultSort').val()== 'Ratings Descending'){
                    searchResult.sort((a, b) => {
                        if (a.rating <= b.rating){
                            return 1
                        } else {
                            return -1
                        }
                    })
                }
                else if (this.curdiv.find('.resultSort').val()== 'Default'){
                    searchResult.sort((a, b) => {
                        if (a.name.length <= b.name.length){
                            return 1
                        } else {
                            return -1
                        }
                    })
                }
                this.curdiv.find('.result').empty()
                searchResult.forEach((item) => {
                    new ItemView(item, this.curdiv.find('.result'))
                })
            })
        })
        // this part is used to implement the autocomplete search function
        div.find('.searchInput').on('input', (e)=>{
            const input = this.curdiv.find('.searchInput').val()
            this.curdiv.find('.dialog').empty()
            const dialog = this.arr.filter((item)=> {
                return item.name.toLowerCase().startsWith(input.toLowerCase())
            })
            dialog.forEach(
                (item) => {
                    let div = $(`<div class = 'dialogItemView'>${item.name}</div>`)
                    div.on('click',(e)=>{
                        this.curdiv.find('.searchInput').val(item.name)
                    })
                    this.curdiv.find('.dialog').append(div)
                }
            )
            if (input == ''){
                this.curdiv.find('.dialog').empty()
            }
        })
        return div
    }

}