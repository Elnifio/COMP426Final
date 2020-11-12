$(function() {
    loadItems()
})

const loadItems = async function(){
    // load two imagined items for test purposes
    let obj = {
        id: 1,
        picture: '../icons/item1/426.4.PNG',
        name: 'Iphone 12 Pro',
        publisher: 'Apple Inc.',
        price: 960,
        description: 'Iphone 12 adfgauyduagduavdas asdgjasgd asdasjd asdasjhdasd adgasgdjasd adgasjgdas asjdasjd asdj',
        stock: 106,
        category: 'electronics',
        rating: 3
    }
    let obj2 = {
        picture: '../icons/item1/426.4.PNG',
        id: 1,
        name: 'Iphone 12 Pro',
        publisher: 'Apple Inc.',
        price: 960,
        category: 'electronics',
        description: 'Iphone 12 adfgauyduagduavdas asdgjasgd asdasjd asdasjhdasd adgasgdjasd adgasjgdas asjdasjd asdj',
        stock: 106,
        rating: 3
    }
    let item = new Item(obj)
    let item2 = new Item(obj2)
    $('#root').empty()
    new ItemView(item, $('#root'), false)
    new ItemView(item2, $('#root'), false)
}
