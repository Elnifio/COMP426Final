$(function() {
    loadItems()
})

const loadItems = async function(){
    let obj = {
        id: 1,
        name: 'Iphone 12 Pro',
        publisher: 'Apple Inc.',
        price: 960,
        description: 'Iphone 12 adfgauyduagduavdas asdgjasgd asdasjd asdasjhdasd adgasgdjasd adgasjgdas asjdasjd asdj',
        stock: 106,
        isMine: true,
        createdAt: 606,
        updatedAt: 218,
        rating: 3
    }
    let item = new Item(obj)
    $('#root').empty()
    new ItemView(item, $('#root'), false)
}
