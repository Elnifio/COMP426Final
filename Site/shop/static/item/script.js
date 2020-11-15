$(function() {
    loadItems()
})

const loadItems = async function(){
    // load two imagined items for test purposes
    const allitems = await axios({
        method: 'get',
        url: './allitems',
        withCredentials: true,
    });
    let items_tmp = allitems.data['result'].map((item) => new Item(item));

    $('#root').empty()

    for(let i=0; i<items_tmp.length; i++){
        new ItemView(items_tmp[i], $('#root'), false);
    }
}
