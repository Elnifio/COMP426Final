SearchView = class{
    constructor(arr, parentDiv){
        this.arr = arr;
        this.curdiv = this.createSearchViewDiv()
        parentDiv.empty().append(this.curdiv)
    }

    createSearchViewDiv(){
        let div = $(`<div class='searchFormDiv'>
                        <form class='searchForm'>
                            <i class="fas fa-search-plus searchIcon"></i>
                            <input class='searchInput' type='text' placeholder="search here..." name="search"></input>
                            <button class='searchSubmit' type="submit">search</button>
                        </form>
                        <div class='dialog'></div>
                        <div class='result'></div>
                    </div>`)
        div.find('form').on('submit', (e)=>{
            e.preventDefault()
            let newDiv = this.createSearchResultView(this.curdiv.find('.searchInput').val())
            this.curdiv.replaceWith(newDiv)
            this.curdiv = newDiv
        })

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

    createSearchResultView(searchVal){
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
        div.find('.searchInput').val(searchVal)
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
        div.find('.resultStatistics').append($(`<p class='resultNumber'>Found <span>${searchResult.length}</span> Results</p>
        <label for="resultSort">Order By:</label>
        <select name="resultSort" class="resultSort">
            <option value='Default'>Default</option>
            <option value="Price Ascending">Price &#36;&#36;-&#36;&#36;&#36;</option>
            <option value="Price Descending">Price &#36;&#36;&#36;-&#36;&#36;</option>
            <option value="Ratings Ascending">Ratings &#9733;&#9733;-&#9733;&#9733;&#9733;</option>
            <option value="Ratings Descending">Ratings &#9733;&#9733;&#9733;-&#9733;&#9733;</option>
        </select>`))
        div.find('.resultSort').on('input', (e) => {
            if (div.find('.resultSort').val()== 'Price Ascending'){
                searchResult.sort((a, b) => {
                    if (a.price >= b.price){
                        return 1
                    } else {
                        return -1
                    }
                })
            } else if (div.find('.resultSort').val()== 'Price Descending'){
                searchResult.sort((a, b) => {
                    if (a.price <= b.price){
                        return 1
                    } else {
                        return -1
                    }
                })
            } else if (div.find('.resultSort').val()== 'Ratings Ascending'){
                searchResult.sort((a, b) => {
                    if (a.rating >= b.rating){
                        return 1
                    } else {
                        return -1
                    }
                })
            } else if (div.find('.resultSort').val()== 'Ratings Descending'){
                searchResult.sort((a, b) => {
                    if (a.rating <= b.rating){
                        return 1
                    } else {
                        return -1
                    }
                })
            }
            else if (div.find('.resultSort').val()== 'Default'){
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
        div.find('form').on('submit', (e)=>{
            e.preventDefault()
            let newDiv = this.createSearchResultView(this.curdiv.find('.searchInput').val())
            this.curdiv.replaceWith(newDiv)
            this.curdiv = newDiv
        })
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