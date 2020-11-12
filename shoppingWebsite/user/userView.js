let UserView = class{
    constructor(user, parentDiv){
        this.user = user
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
                        <input class='usernameInput' type="text" placeholder="Username">  
                        <br>    
                        <input class='passwordInput' type="Password"  placeholder="Password">    
                        <br>  
                        <div class='errorMessage'></div>
                        <button class='loginButton' type='button'>login</button>     
                        <button class='registerButton' type='button'>register</button>  
                        <br>
                        <a>forget your password?</a>
                        </form>     
                    </div>`) 
        if (this.user.username!= undefined){
            // if the front-end has record of a previously logged in user
            // automatically fill in the username field
            div.find('.usernameInput').val(this.user.username)
        }
        div.find('.loginButton').on('click', (e)=>{
            if (this.curDiv.find('.usernameInput').val() == '' || this.curDiv.find('.passwordInput').val() == ''){
               this.curDiv.find('.errorMessage').empty().append('<p>You need to fill in both Username and Password!</p>')
            } else {
                this.user.login(this.curDiv.find('.usernameInput').val(), this.curDiv.find('.passwordInput').val())
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
            let newDiv = this.createRegisterDiv()
            this.curDiv.replaceWith(newDiv)
            this.curDiv = newDiv
        })
        div.find('a').on('click', (e)=>{
            let newDiv = this.createPasswordResetDiv()
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
                        <button class='logOut'>Log Out</button>
                        <button class='changePassword'>changePassword</button>
                        <button class='orderHistory'>Order History</button>     
                    </div>`) 
        div.find('.logOut').on('click', (e)=>{
            // user logout request
            this.user.logOut()
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
        div.find('.orderHistory').on('click', (e)=>{
            let order = this.user.getOrder()
            // render div to show order information
        })
        return div  
    }

    createPasswordResetDiv = function(){
        let div = $(`<div class="loginView">
                        <p class='loginTitle'>Welcome to <span>Item Hub<span></p>
                        <p class='loginSubtitle'><i class="fas fa-user"></i>Reset Your Password</p> 
                        <form class='loginForm'>    
                        <input class='usernameInput' type="text" placeholder="Username">  
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
        if (this.user.username!= undefined){
            // if the front-end has record of a previously logged in user
            // automatically fill in the username field
            div.find('.usernameInput').val(this.user.username)
        }
        div.find('.cancelButton').on('click', (e)=>{
            if (this.user.loggedIn == true){
                let newDiv = this.createLoginDiv()
            } else {
                let newDiv = this.createUserViewDiv
            }
            this.curDiv.replaceWith(newDiv)
            this.curDiv = newDiv
        })
        div.find('.createAccountButton').on('click', (e)=>{
            if (this.curDiv.find('.usernameInput').val() == '' || this.curDiv.find('.firstPassword').val() == '' || this.curDiv.find('.confirmPassword').val() == ''){
                this.curDiv.find('.errorMessage').empty().append('<p>You need to fill in both Username and Password!</p>')
            } else if (this.curDiv.find('.firstPassword').val() != this.curDiv.find('.confirmPassword').val()){
                this.curDiv.find('.errorMessage').empty().append('<p>Password does not match!</p>')
            } else {
                this.user.changePassword(this.curDiv.find('.usernameInput').val(), this.curDiv.find('.passwordInput').val())
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
        div.find('.createAccountButton').on('click', (e)=>{
            if (this.curDiv.find('.usernameInput').val() == '' || this.curDiv.find('.firstPassword').val() == '' || this.curDiv.find('.confirmPassword').val() == ''){
                this.curDiv.find('.errorMessage').empty().append('<p>You need to fill in both Username and Password!</p>')
            } else if (this.curDiv.find('.firstPassword').val() != this.curDiv.find('.confirmPassword').val()){
                this.curDiv.find('.errorMessage').empty().append('<p>Password does not match!</p>')
            } else {
                let newDiv = this.createLoginDiv()
                this.curDiv.replaceWith(newDiv)
                this.curDiv = newDiv
            }
        })
        return div
    }

    createOrdersView(){
        let div = $('')
        return div
    }
}