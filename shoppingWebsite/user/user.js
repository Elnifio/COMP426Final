let User = class{
    constructor(obj){
        //  User is the object to encapsulate status of the user
        // it should remember the id, username, and if user has logged in
        if (obj == undefined){
            this.id = undefined
            this.username = undefined
            this.loggedIn = false
        } else {
            this.id = obj.id
            this.username = obj.username
            this.loggedIn = true
        }
    }

    async login(username, passWord){
        // when the user desire to log in, send log in request to backend
        // depend on the backend's response, set loggedIn

        // for testing purposes, assume all login is successful for now
        this.loggedIn = true
    }

    async logOut(){
        // when the user desire to log out, send log out request to backend
        // depend on the backend's response, set loggedIn.

        // for testing purposes, assume all logout is successful for now
        this.loggedIn = false
    }

    async changePassword(username, password){
        let result = await axios({

        })
        // send change password request to backend
    }

    async register(username, password){
        // register a new user with backend

        // for testing purposes, assume for now that the new user returned from server is {username: 'ghflow', id: 1}
        this.username = 'ghflow'
        this.id = 1
        this.loggedIn = true
    }

    async getOrder(){
        // fetch history order of current user from backend
    }


}
User.fetchUser = function(){
    // we will first check with backend if the user has logged in
    // the cookies are stored automatically by the browser, so
    // there is no particular things for us to do in the front end
    // if backend recognize the cookie, it should send back Json object with username and id encapsulated
    return {username: 'ghflow', id: 1}
}
