$(function() {
    loadItems()
})

const loadItems = async function(){
    let obj = {
        id: 1,
        name: 'GH',
        publisher: 'xxx',
        price: 16,
        description: 'ddd',
        stock: 106,
        isMine: true,
        createdAt: 606,
        updatedAt: 218,
    }
    let item = new Item(obj)
    $('#root').empty()
    new ItemView(item, $('#root'), false)
}
