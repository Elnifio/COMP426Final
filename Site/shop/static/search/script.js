$(async function() {
    const items = await Item.findall()
    // load an array of Item objects for test purposes
    // in real implementation should use the Item.fetchall()
    // function to fetch the items in a JSON file
    new SearchView(items, $('#root'))
})

// const loadItems = function(){
//     let testItems = [{
//         id: 1,
//         name: 'Iphone 12 Pro',
//         publisher: 'Apple Inc.',
//         price: 1000,
//         description: 'Iphone 12 adfgauyduagduavdas asdgjasgd asdasjd asdasjhdasd adgasgdjasd adgasjgdas asjdasjd asdj',
//         stock: 106,
//         rating: 3,
//         category: 'electronics',
//         picture: '../icons/item1/426.4.PNG'
//     },
//     {
//         id: 2,
//         name: 'arc',
//         publisher: 'xxx',
//         price: 799,
//         description: 'ddd',
//         stock: 76,
//         rating: 3,
//         category: 'electronics',
//         picture: '../icons/item1/426.4.PNG'
//     },{
//         id: 3,
//         name: 'the big lobowski',
//         publisher: 'xxx',
//         price: 16,
//         description: 'ddd',
//         stock: 99,
//         rating: 4,
//         category: 'movie',
//         picture: '../icons/item1/426.4.PNG'
//     },{
//         id: 4,
//         name: 'sony x950h',
//         publisher: 'xxx',
//         price: 1199,
//         description: 'ddd',
//         stock: 16,
//         rating: 4,
//         category: 'electronics',
//         picture: '../icons/item1/426.4.PNG'
//     },{
//         id: 5,
//         name: 'bmx x5',
//         publisher: 'xxx',
//         price: 60000,
//         description: 'ddd',
//         stock: 46,
//         rating: 5,
//         category: 'car',
//         picture: '../icons/item1/426.4.PNG'
//     },{
//         id: 6,
//         name: 'dell xps15',
//         publisher: 'xxx',
//         price: 1499,
//         description: 'ddd',
//         stock: 43,
//         rating: 4,
//         category: 'electronics',
//         picture: '../icons/item1/426.4.PNG'
//     },{
//         id: 7,
//         name: 'corvette c8',
//         publisher: 'xxx',
//         price: 90000,
//         description: 'ddd',
//         stock: 22,
//         rating: 3,
//         category: 'car',
//         picture: '../icons/item1/426.4.PNG'
//     },{
//         id: 8,
//         name: 'apple macbook pro',
//         publisher: 'xxx',
//         price: 560,
//         description: 'ddd',
//         stock: 31,
//         rating: 2,
//         category: 'electronics',
//         picture: '../icons/item1/426.4.PNG'
//     },{
//         id: 9,
//         name: 'pop',
//         publisher: 'xxx',
//         price: 320,
//         description: 'ddd',
//         stock: 14,
//         rating: 0,
//         category: 'music',
//         picture: '../icons/item1/426.4.PNG'
//     },{
//         id: 10,
//         name: 'nomin pack',
//         publisher: 'xxx',
//         price: 800,
//         description: 'ddd',
//         stock: 58,
//         rating: 5,
//         category: 'clothing',
//         picture: '../icons/item1/426.4.PNG'
//     }]
//     let items = testItems.map((item) => {
//         return new Item(item)})
//     return items
// }
