$(async function() {
    const items = await loadItems()
    let shoppingCart = new ShoppingCart(items)
    new ShoppingCartView(shoppingCart, $('#root'))
})

const loadItems = async function(){
    try{
        let result = await axios({
            method: 'get',
            url: './user',
        })
        const u = result.data['savedItems'].map((item)=>{
            return new Item(item)
        })
        return u
    } catch {
        return []
    }
}
