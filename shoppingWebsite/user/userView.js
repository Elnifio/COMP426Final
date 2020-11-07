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
                        <input class='usernameInput' type="text" name="Uname" id="Uname" placeholder="Username">  
                        <br>    
                        <input class='passwordInput' type="Password" name="Pass" id="Pass" placeholder="Password">    
                        <br>    
                        <button class='loginButton' 'type='submit' value='login'>login</button>     
                        <button class='registerButton' 'type='submit' value='register'>register</button>  
                        </form>     
                    </div>`) 
        div.find('form').on('submit', (e)=>{
            e.preventDefault()
        })
        return div  
    }

    createUserViewDiv = function(){
        let div = $('')
        return div
    }

    
}