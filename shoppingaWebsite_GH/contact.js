Contact = class{
    constructor(parentDiv){
        this.parentDiv = $(parentDiv)
        this.curDiv = this.createViewDiv()
        this.parentDiv.empty().append(this.curDiv)
    }

    createSuccessDiv = function(){
        let div = $(`<div class='contactView'>
                        <p>Thanks for contacting us! Your Information Has Benn Recorded. We Will Be In Touch ASAP.</p>
                        <br>
                        <button class='back'>back</button>
                    </div`)
        div.find('.back').on('click', (e)=>{
            let newDiv = this.createViewDiv()
            this.curDiv.replaceWith(newDiv)
            this.curDiv = newDiv
        })
        return div
    }

    createViewDiv = function(){
        let div = $(`<div class ='contactView'>
                        <form>
                        <input type="text" id="name" placeholder="Preferred Name">
                        <br><br>
                        <input type="text" id="email" placeholder="Email Address">
                        <br><br>
                        <textarea placeholder="Enter your question here" id="question" rows="4" maxlength="500"></textarea>
                        <br>
                        <button type='submit' class='submit'>Contact Us</button>
                        <form>
                        <div class='errorMessage'></div>
                    </div>`)
        div.find('form').on('submit', async (e)=>{
            e.preventDefault()
            if (div.find('#name').val() == "" || div.find('#email').val() == ""){
                div.find('.errorMessage').empty().append('<p>please fill out your Name and Email Address!</p>')
            } else {
                await this.postContact(this.curDiv.find('#name').val(),this.curDiv.find('#email').val(),this.curDiv.find('#question').val())
                let newDiv = this.createSuccessDiv()
                this.curDiv.replaceWith(newDiv)
                this.curDiv = newDiv
            }
        })
        return div
    }

    async postContact(name, email, body){
        
    }

}