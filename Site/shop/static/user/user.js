User = class{
    constructor(obj){
        //  User is the object to encapsulate status of the user
        // it should remember the id, username, and if user has logged in
        if (obj == undefined){
            this.username = undefined
            this.email = undefined
            this.loggedIn = false
        } else {
            this.username = obj.name
            this.email = obj.email
            this.loggedIn = true
        }
    }

    async sync(){
        try{
            let result = await axios({
                method: 'get',
                url: './user',
            })
            const u = await result.data['userinfo']
            this.username = u.name
            this.email = u.email
        } catch {
            console.log("Not logged in");
        }
    }

    async getAllPurchasedItems(){
        // fetch history order of current user from backend
        // for testing purporses pre-defined orders are returned
        try{
            let result = await axios({
                method: 'get',
                url: './user',
            })
            const u = await result.data['purchasedItems']
            return u
        } catch {
            console.log("not logged in");
            return []
        }
    }

    async login(email, password){
        // when the user desire to log in, send log in request to backend
        // depend on the backend's response, set loggedIn

        // for testing purposes, assume all login is successful for now

        // POST ./verifyuser
        //     data: {
        //         email: string,
        //         password: string
        //     }
        // Result:
        // ```
        // if already logged in:
        //     Return {success: True, exist: True, loggedin: True}
        //     if email not recognized:
        //     Http404("User does not exist")
        // else:
        //     if password match record: 
        //     Return {success: True, exist: True, loggedin: False}
        //     Local login status updated
        // else:
        //     Return {success: False, exist: True, loggedin: False}
        //     ```
        try{
            let result = await axios({
                method: 'post',
                url: './verifyuser',
                data: {
                        email: email,
                        password: password
                    },
                headers:{"X-CSRFToken":$.cookie('csrftoken')}
            })
            const success = result.data['success']
            if (success == true){
                await this.sync()
                this.loggedIn = true

            } else {
                this.loggedIn = false
            }
        } catch {
                this.loggedIn = false
        }
    }

    async logOut(){
        // when the user desire to log out, send log out request to backend
        // depend on the backend's response, set loggedIn.

        // for testing purposes, assume all logout is successful for now
        // ```
        // GET ./logout
        // ```

        // Result:
        // ```
        // If not logged in:
        //     Http404("Haven't Logged in")
        // else:
        //     Return {}
        //     Local login status updated
        // ```
        try{
            let result = await axios({
                method: 'get',
                url: './logout',
            }) 
            this.loggedIn = false
        } catch {
            this.loggedIn = false
        }
    }

    async changePassword(password){
        let result = await axios({
            method:"post",
            url:"./changepassword",
            data: {
                'password':password
            },
            headers:{"X-CSRFToken":$.cookie('csrftoken')}
        });
        
        // let result = await axios({

        // })
        // send change password request to backend
    }

    async register(email, username, password){
        // register a new user with backend

        // for testing purposes, assume for now that the new user returned from server is {username: 'ghflow', id: 1}

        // POST ./createuser
        // data: {
        //     name: string,
        //     password: string,
        //     email: string,
        // }
        // ```

        // Result: 
        // ```
        // If logged in: 
        //     Http404("Already logged in")
        // If email already registered:
        //     Return {success: False}
        // else:
        //     Return {success: True}
        //     Local login status updated
        // ```
        try{
            let result = await axios({
                method: 'post',
                url: './createuser',
                data: {
                    name: username,
                    password: password,
                    email: email
                },
                headers:{"X-CSRFToken":$.cookie('csrftoken')}
            }) 
            if (result.data['success'] == true){
                return true
            } else {
                return false
            }
        } catch {
            return false
        }

    }


}

User.fetchUser = async function(){
    // we will first check with backend if the user has logged in
    // the cookies are stored automatically by the browser, so
    // there is no particular things for us to do in the front end
    // if backend recognize the cookie, it should send back Json object with username and id encapsulated
    try{
        let result = await axios({
            method: 'get',
            url: './user',
        })
        const u = await result.data['userinfo']
        return u
    } catch {
        return undefined
    }
}
