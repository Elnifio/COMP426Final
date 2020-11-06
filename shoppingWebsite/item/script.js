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
    let obj2 = {
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
    let item2 = new Item(obj2)
    $('#root').empty()
    new ItemView(item, $('#root'), false)
    new ItemView(item2, $('#root'), false)
}
