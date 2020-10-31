$(function() {
    $('.searchForm').on('submit', (e)=>{
        searchSubmit(e)
    })
    let items = loadItems()
    console.log(items)
    let alreadyFilled = false
    $('.autocomplete input').on('click', (e)=> {
        if(!alreadyFilled){
            $('.dialog').addClass('open')
        }
    })
    $('body').on('click', 'dialog>div', (e)=> {
        $('.autocomplete input').val($(this).text()).focus()
        alreadyFilled = true
    })
    $('.autocomplete input').on('input', (e)=>{
        $('.dialog').addClass('open');
        alreadyFilled = false
        match($(this).val, items)
    })
    $('body').click(function(e){
        if (!$(e.target).is("input .close")){
            $('.dialog').removeClass('open')
        }
    })
    initDialog(items)
})

const initDialog = function(items) {
    console.log(items)
    clearDialog();
    items.forEach((item) => {
        $('.dialog').append(`<div>${item.name}</dov>`)
   })       
}
const clearDialog = function(){
   $('.dialog').empty();
}

const searchSubmit= async function(e){
    e.preventDefault()
    $('.dialog').empty()
    console.log($('.autocomplete input').val())
}
 const match = function(str, items){
    str = str.toString().toLowerCase();
    clearDialog()
    items.forEach((item) => {
        if (item.name.toString().toLowerCase().startsWith(str)){
            $('.dialog').append(`<div>${item.name}</div>`)
        }
    })
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
