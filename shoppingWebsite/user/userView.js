let UserView = class{
    constructor(user, parentDiv){
        this.user = user
        if (this.user == undefined){
            this.curDiv = this.createLoginDiv()
        } else {
            this.curDiv = this.createUserViewDiv()
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
        div.find('.loginButton').on('click', (e)=>{
            if (this.curDiv.find('.usernameInput').val() == '' || this.curDiv.find('.passwordInput').val() == ''){
               this.curDiv.find('.errorMessage').empty().append('<p>You need to fill in both Username and Password!</p>')
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
    div.find('.loginButton').on('click', (e)=>{
        if (this.curDiv.find('.usernameInput').val() == '' || this.curDiv.find('.passwordInput').val() == ''){
            this.curDiv.find('.errorMessage').empty().append('<p>You need to fill in both Username and Password!</p>')
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
            }
        })
        return div
    }

    
}