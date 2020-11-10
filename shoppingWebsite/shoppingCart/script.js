$(function() {
    const items = loadItems()
    let shoppingCart = new ShoppingCart(items)
    new ShoppingCartView(shoppingCart, $('#root'))
})

const loadItems = function(){
    let testItems = [{
        id: 1,
        name: 'Iphone 12 Pro',
        publisher: 'Apple Inc.',
        price: 1000,
        description: 'Iphone 12 adfgauyduagduavdas asdgjasgd asdasjd asdasjhdasd adgasgdjasd adgasjgdas asjdasjd asdj',
        stock: 106,
        isMine: true,
        createdAt: 606,
        updatedAt: 218,
        rating: 3
    },
    {
        id: 2,
        name: 'arc',
        publisher: 'xxx',
        price: 799,
        description: 'ddd',
        stock: 76,
        isMine: true,
        createdAt: 606,
        updatedAt: 218,
        rating: 3
    },{
        id: 3,
        name: 'the big lobowski',
        publisher: 'xxx',
        price: 16,
        description: 'ddd',
        stock: 99,
        isMine: true,
        createdAt: 606,
        updatedAt: 218,
        rating: 4
    },{
        id: 4,
        name: 'sony x950h',
        publisher: 'xxx',
        price: 1199,
        description: 'ddd',
        stock: 16,
        isMine: true,
        createdAt: 606,
        updatedAt: 679,
        rating: 4
    },{
        id: 5,
        name: 'bmx x5',
        publisher: 'xxx',
        price: 60000,
        description: 'ddd',
        stock: 46,
        isMine: true,
        createdAt: 606,
        updatedAt: 218,
        rating: 5
    },{
        id: 6,
        name: 'dell xps15',
        publisher: 'xxx',
        price: 1499,
        description: 'ddd',
        stock: 43,
        isMine: true,
        createdAt: 606,
        updatedAt: 218,
        rating: 4
    },{
        id: 7,
        name: 'corvette c8',
        publisher: 'xxx',
        price: 90000,
        description: 'ddd',
        stock: 22,
        isMine: true,
        createdAt: 606,
        updatedAt: 218,
        rating: 3
    },{
        id: 8,
        name: 'lindsburg',
        publisher: 'xxx',
        price: 560,
        description: 'ddd',
        stock: 31,
        isMine: true,
        createdAt: 606,
        updatedAt: 218,
        rating: 2
    },{
        id: 9,
        name: 'pop',
        publisher: 'xxx',
        price: 320,
        description: 'ddd',
        stock: 14,
        isMine: true,
        createdAt: 606,
        updatedAt: 218,
        rating: 0
    },{
        id: 10,
        name: 'nomin pack',
        publisher: 'xxx',
        price: 800,
        description: 'ddd',
        stock: 58,
        isMine: true,
        createdAt: 606,
        updatedAt: 218,
        rating: 5
    }]
    return testItems
}
