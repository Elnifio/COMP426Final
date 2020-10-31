$(function() {
    $('#itemsButton').on("click", async (e) => {
        loadItems()
    })
    $('#managementButton').on("click", async (e) => {
        alert('managementInfo')
    })
    $('#userButton').on("click", async (e) => {
        alert('userInfo')
    })
    $('#aboutButton').on("click", async (e) => {
        alert('aboutInfo')
    })
})

const loadItems = async function(){
    alert('loading items')
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
    new ItemView(item, $('#root'), false)
}
