let Item = class{
    constructor(obj){
        this.id = obj.id
        this.name = obj.name
        this.publisher = obj.publisher
        this.price = obj.price
        this.description = obj.description
        this.stock = obj.stock
        this.isMine = obj.isMine
        this.createdAt = obj.createdAt
        this.updatedAt = obj.updatedAt
    }

    async sync(){
        let result = await axios({
        })
        this.id = result.id
        this.name = result.name
        this.publisher = result.publisher
        this.price = result.price
        this.description = result.description
        this.stock = result.stock
        this.isMine = result.isMine
        this.createdAt = result.createdAt
        this.updatedAt = result.updatedAt
    }

    async update(name, description, price, stock){
        let result = await axios({

        })
        await this.sync
        return this

    }
    
    async purchase(amount){
        // let result = await axios({

        // })
        console.log(amount)
        // await this.sync()
        return this
    }

    async destroy(){
        let result = await axios({

        })
        return result.data
    }
}

Item.findall = async () => {
    let result = await axios({

    })
    return result.data
}

Item.create = async (name, author, price, stock, description) => {
    let result = await axios({

    })
    return new Item(result.data)
}