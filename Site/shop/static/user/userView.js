let UserView = class{
    constructor(user, parentDiv){
        this.user = user
        // we need to first confirm with server if we have logged in
        // the loggedIn state of user will reflect that
        // this part of functionality will be implemented in script.js / user.js
        if (this.user.loggedIn == true){
            this.curDiv = this.createUserViewDiv()
        } else {
            this.curDiv = this.createLoginDiv()
        }
        parentDiv.append(this.curDiv)
    }

    createLoginDiv = function(){
        let div = $(`<div class="loginView">
                        <p class='loginTitle'>Welcome to <span>Item Hub<span></p>
                        <p class='loginSubtitle'><i class="fas fa-user"></i>Login</p> 
                        <form class='loginForm'>    
                        <input class='emailInput' type="text" placeholder="Email">  
                        <br>  
                        <input class='passwordInput' type="Password"  placeholder="Password">    
                        <br>  
                        <div class='errorMessage'></div>
                        <button class='loginButton' type='button'>login</button>     
                        <button class='registerButton' type='button'>register</button>  
                        <br>
                        </form>     
                    </div>`) 
        if (this.user.email!= undefined){
            // if the front-end has record of a previously logged in user
            // automatically fill in the username field
            div.find('.emailInput').val(this.user.email)
        }
        div.find('.loginButton').on('click', async (e)=>{
            let re=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (this.curDiv.find('.passwordInput').val() == '' || this.curDiv.find('.emailInput').val() == ''){
                this.curDiv.find('.errorMessage').empty().append('<p>You need to fill in both Email and Password!</p>')
            } else if (!re.test(this.curDiv.find('.emailInput').val())){
                this.curDiv.find('.errorMessage').empty().append('<p>Invalid Email Address!</p>')
            } else {
                await this.user.login(this.curDiv.find('.emailInput').val(), this.curDiv.find('.passwordInput').val())
                if (this.user.loggedIn == true){
                    let newDiv = this.createUserViewDiv()
                    this.curDiv.replaceWith(newDiv)
                    this.curDiv = newDiv
                } else{
                    this.curDiv.find('.errorMessage').empty().append('<p>Either your userName or Password is incorrect</p>')
                }
            }
        })
        div.find('.registerButton').on('click', (e)=>{
            // click on the register button, switch to registration page
            let newDiv = this.createRegisterDiv()
            this.curDiv.replaceWith(newDiv)
            this.curDiv = newDiv
        })
        return div  
    }

    createUserViewDiv = function(){
        let div = $(`<div class="loginView">
                        <p class='loginTitle'>Welcome to <span>Item Hub<span></p>
                        <p class='loginSubtitle'><i class="fas fa-user"></i>${this.user.username}</p> 
                        <br>
                        <div class='orderHistoryDiv'></div>
                        <button class='logOut'>Log Out</button>
                        <button class='changePassword'>changePassword</button>
                        <button class='orderHistory'>Order History</button>
                    </div>`) 
        div.find('.logOut').on('click', async (e)=>{
            // user logout request
            await this.user.logOut()
            let newDiv = this.createLoginDiv()
            this.curDiv.replaceWith(newDiv)
            this.curDiv = newDiv
        })
        div.find('.changePassword').on('click', (e)=>{
            // render user change password page
            let newDiv = this.createPasswordResetDiv()
            this.curDiv.replaceWith(newDiv)
            this.curDiv = newDiv
        })
        div.find('.orderHistory').on('click', async (e)=>{
            // user click on order history button
            // this.curDiv.find('.buttons').css('display', 'none')
            // let orders = this.user.getOrders()
            // this.curDiv.find('.orderHistoryDiv').empty
            // orders.forEach((order) => {
            //     new OrderView(order, this.curDiv.find('.orderHistoryDiv'))
            // })
            // let closeButton = $('<button>close</button>')
            // closeButton.on('click', (e) =>{
            //     this.curDiv.find('.orderHistoryDiv').empty()
            //     this.curDiv.find('.buttons').css('display', 'inline')
            // })
            // this.curDiv.find('.orderHistoryDiv').append(closeButton)
            let newDiv = await this.createOrdersHistoryView()
            this.curDiv.replaceWith(newDiv)
            this.curDiv = newDiv
            // render div to show order information
        })
        return div  
    }

    createPasswordResetDiv = function(){
        let div = $(`<div class="loginView">
                        <p class='loginTitle'>Welcome to <span>Item Hub<span></p>
                        <p class='loginSubtitle'><i class="fas fa-user"></i>Reset Your Password</p> 
                        <form class='loginForm'>    
                        <input class='emailInput' type="text" placeholder="Email Address">  
                        <br>    
                        <input class='passwordInput firstPassword' type="Password"  placeholder="Password">    
                        <br>  
                        <input class='passwordInput confirmPassword' type="Password"  placeholder="Confirm Password">
                        <br>   
                        <div class='errorMessage'></div>
                        <button class='createAccountButton' type='button'>Reset</button>   
                        <button class='cancelButton' type='button'>Cancel</button>     
                        </form>     
                    </div>`)
        if (this.user.email!= undefined){
            // if the front-end has record of a previously logged in user
            // automatically fill in the username field
            div.find('.emailInput').val(this.user.email)
        }
        div.find('.cancelButton').on('click', (e)=>{
            // if user is already logged in, go to the main user view
            // else, go to the login page
            let newDiv = null
            if (this.user.loggedIn == true){
                newDiv = this.createUserViewDiv()
            } else {
                newDiv = this.createLoginDiv()
            }
            this.curDiv.replaceWith(newDiv)
            this.curDiv = newDiv
        })
        div.find('.createAccountButton').on('click', async (e)=>{
            let re=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (this.curDiv.find('.emailInput').val() == '' || this.curDiv.find('.firstPassword').val() == '' || this.curDiv.find('.confirmPassword').val() == ''){
                this.curDiv.find('.errorMessage').empty().append('<p>You need to fill in both Username and Password!</p>')
            } else if (this.curDiv.find('.firstPassword').val() != this.curDiv.find('.confirmPassword').val()){
                this.curDiv.find('.errorMessage').empty().append('<p>Password does not match!</p>')
            } else if (!re.test(this.curDiv.find('.emailInput').val())){
                this.curDiv.find('.errorMessage').empty().append('<p>Invalid Email Address!</p>')
            } else {
                await this.user.changePassword(this.curDiv.find('.firstPassword').val())
                if (this.user.loggedIn == true){
                    let newDiv = this.createUserViewDiv()
                    this.curDiv.replaceWith(newDiv)
                    this.curDiv = newDiv
                } else{
                    let newDiv = this.createLoginDiv()
                    this.curDiv.replaceWith(newDiv)
                    this.curDiv = newDiv
                }
            }
        })
        return div
    }

    createRegisterDiv = function(){
        let div = $(`<div class="loginView">
                        <p class='loginTitle'>Welcome to <span>Item Hub<span></p>
                        <p class='loginSubtitle'><i class="fas fa-user"></i>Create Account</p> 
                        <form class='loginForm'>    
                        <input class='usernameInput' type="text" placeholder="Username">  
                        <br>
                        <input class='emailInput' type="text" placeholder="Email Address">  
                        <br>    
                        <input class='passwordInput firstPassword' type="Password"  placeholder="Password">    
                        <br>  
                        <input class='passwordInput confirmPassword' type="Password"  placeholder="Confirm Password">
                        <br>   
                        <div class='errorMessage'></div>
                        <button class='createAccountButton' type='button'>Create</button>   
                        <button class='cancelButton' type='button'>Cancel</button>     
                        </form>     
                    </div>`)
        div.find('.cancelButton').on('click', (e)=>{
            let newDiv = this.createLoginDiv()
            this.curDiv.replaceWith(newDiv)
            this.curDiv = newDiv
        })
        div.find('.createAccountButton').on('click', async (e)=>{
            // create account
            // first check if user has entered username and password, and if password matches
            let re=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (this.curDiv.find('.usernameInput').val() == '' || this.curDiv.find('.emailInput').val() == '' || this.curDiv.find('.firstPassword').val() == '' || this.curDiv.find('.confirmPassword').val() == ''){
                this.curDiv.find('.errorMessage').empty().append('<p>You need to fill in both Username and Password!</p>')
            } else if (this.curDiv.find('.firstPassword').val() != this.curDiv.find('.confirmPassword').val()){
                this.curDiv.find('.errorMessage').empty().append('<p>Password does not match!</p>')
            } else if (!re.test(this.curDiv.find('.emailInput').val())){
                this.curDiv.find('.errorMessage').empty().append('<p>Invalid Email Address!</p>')
            } else {
                // if all good, create user and switch to login page
                await this.user.register(this.curDiv.find('.emailInput').val(), this.curDiv.find('.usernameInput').val(), this.curDiv.find('.firstPassword').val())
                let newDiv = this.createLoginDiv()
                this.curDiv.replaceWith(newDiv)
                this.curDiv = newDiv
            }
        })
        return div
    }

    createOrdersHistoryView = async function(){
        let div = $(`<div class="loginView">
                        <p class='loginTitle'><span>Order History</span></p>
                        <div class='orders'></div>
                        <button class='cancelButton'>Cancel</button>
                    </div>`)
        const orders = await this.user.getAllPurchasedItems()
        orders.forEach((item) => {
            div.find('.orders').append(`<p>${item.item.name}: ${item.amount} bought on ${item.date}</p>`)
        })
        div.find('.cancelButton').on('click', (e)=>{
            let newDiv = this.createUserViewDiv()
            this.curDiv.replaceWith(newDiv)
            this.curDiv = newDiv
        })
        return div
    }
}