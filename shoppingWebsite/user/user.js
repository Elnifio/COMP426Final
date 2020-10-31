let User = class{
    constructor(obj){
        this.id = obj.id
        this.name = obj.name
        this.balance = obj.balance
        this.loggedin = obj.loggedIn
        this.purchased = this.purchased
    }

    async sync(){
        let result = await axios({

        })
        this.id = result.data.id
        this.name = result.data.name
        this.balance = result.data.balance
        this.loggedIn = result.data.loggedIn
        return this
    }

    // async login(uname, password){
    //     let result = await axios({

    //     })
    //     this.id = result.data.id
    //     this.name = result.data.name
    //     this.balance = result.data.balance
    //     this.loggedIn = result.data.loggedIn
    //     return this
    // }

    async purchase(balance){
        let result = await axios({
            
        })
        await this.sync()
        return this
    }

    async topUp(balance){
        let result = await axios({

        })
        await this.sync()
        return this
    }
}

User.createUser = function(){

}

User.login = function(){

}

User.register = function(){

}
