$(function() {
    $('.searchForm').on('submit', (e)=>{
        searchSubmit(e)
    })
    const items = loadItems()
    $('.autocomplete input').on('input', (e)=>{
        const input = $('.autocomplete input').val()
        $('.dialog').empty()
        const dialog = items.filter((item)=>{return item.name.toLowerCase().startsWith(input.toLowerCase())})
        dialog.forEach((item)=>{
            const div = $(`<div>${item.name}</div>`)
            div.on('click', (e) => {
                console.log(item.name)
                $('.autocomplete input').val(item.name)
            })
            $('.dialog').append(div)
        })
        if (input == ''){
            $('.dialog').empty()
        }
    })
})

const match = function(){
    
}

const searchSubmit= async function(e){
    e.preventDefault()
    $('.dialog').empty()
    console.log($('.autocomplete input').val())
}

const loadItems = function(){
    let testItems = [{
        id: 1,
        name: 'GH',
        publisher: 'xxx',
        price: 16,
        description: 'ddd',
        stock: 106,
        isMine: true,
        createdAt: 606,
        updatedAt: 218,
    },
    {
        id: 2,
        name: 'scscscscd',
        publisher: 'xxx',
        price: 16,
        description: 'ddd',
        stock: 106,
        isMine: true,
        createdAt: 606,
        updatedAt: 218,
    },{
        id: 3,
        name: 'asasdfdsc',
        publisher: 'xxx',
        price: 16,
        description: 'ddd',
        stock: 106,
        isMine: true,
        createdAt: 606,
        updatedAt: 218,
    },{
        id: 4,
        name: 'fvzdsfSD',
        publisher: 'xxx',
        price: 16,
        description: 'ddd',
        stock: 106,
        isMine: true,
        createdAt: 606,
        updatedAt: 218,
    },{
        id: 5,
        name: 'dfszvsfv',
        publisher: 'xxx',
        price: 16,
        description: 'ddd',
        stock: 106,
        isMine: true,
        createdAt: 606,
        updatedAt: 218,
    },{
        id: 6,
        name: 'qwsvsfvfv',
        publisher: 'xxx',
        price: 16,
        description: 'ddd',
        stock: 106,
        isMine: true,
        createdAt: 606,
        updatedAt: 218,
    },{
        id: 7,
        name: 'dfsdfvsdbdsf',
        publisher: 'xxx',
        price: 16,
        description: 'ddd',
        stock: 106,
        isMine: true,
        createdAt: 606,
        updatedAt: 218,
    },{
        id: 8,
        name: 'sdcxczvbtrtydfxg',
        publisher: 'xxx',
        price: 16,
        description: 'ddd',
        stock: 106,
        isMine: true,
        createdAt: 606,
        updatedAt: 218,
    },{
        id: 9,
        name: 'iuoiugjdhs',
        publisher: 'xxx',
        price: 16,
        description: 'ddd',
        stock: 106,
        isMine: true,
        createdAt: 606,
        updatedAt: 218,
    },{
        id: 10,
        name: 'poiyuyguy',
        publisher: 'xxx',
        price: 16,
        description: 'ddd',
        stock: 106,
        isMine: true,
        createdAt: 606,
        updatedAt: 218,
    }]
    return testItems
}
