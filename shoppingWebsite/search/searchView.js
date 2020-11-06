SearchView = class{
    constructor(arr, parentDiv){
        this.arr = arr;
        this.curdiv = this.createSearchViewDiv()
        parentDiv.empty().append(this.curdiv)
    }

    createSearchViewDiv(){
        let div = $(`<div class='searchForm'>
                        <form>
                            <div class='searchIcon'><i class="fas fa-search-plus"></i></div>
                            <input class='searchInput' type='text' placeholder="search here..." name="search">
                            <button class='searchSubmit' type="submit">search</button>
                        </form>
                        <div class='dialog'></div>
                    </div>`)
        div.find('form').on('submit', (e)=>{
            e.preventDefault()
            // let newDiv = this.createSearchResultView()
            // this.curDiv.replaceWith(newDiv)
            // this.curDiv = newDiv
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
        // const items = loadItems()
        // $('.autocomplete input').on('input', (e)=>{
        //     const input = $('.autocomplete input').val()
        //     $('.dialog').empty()
        //     const dialog = items.filter((item)=>{return item.name.toLowerCase().startsWith(input.toLowerCase())})
        //     dialog.forEach((item)=>{
        //         const div = $(`<div>${item.name}</div>`)
        //         div.on('click', (e) => {
        //             console.log(item.name)
        //             $('.autocomplete input').val(item.name)
        //         })
        //         $('.dialog').append(div)
        //     })
        //     if (input == ''){
        //      $('.dialog').empty()
        //     }
        //    })
        return div
    }
}