StateCovidInfo = class{
    constructor(data, parentDiv){
        this.data = data
        this.parentDiv = parentDiv
        this.curDiv = this.createViewDiv()
        this.parentDiv.append(this.curDiv)
    }

    createViewDiv(){
        let  state = this.data.state;
        let cases = this.data.positive;
        let caseIncrease = this.data.positiveIncrease
        let death = this.data.death;
        let deathIncrease = this.data.deathIncrease;
        let div = $(`<div class='stateCovidInfo'>
                        <p><strong>${state}</strong><p>
                        <p><strong>Covid-19 Case: <em>${cases}</em></strong></p>
                        <p><strong>Daily Case Increase: <em>${caseIncrease}</em></strong></p>
                        <p><strong>Covid-19 Death: <em>${death}</em></strong></p>
                        <p><strong>Daily Death Increase: <em>${deathIncrease}</em></strong></p>
                        <i class="fas fa-minus stateInfoButton"></i>
                    </div> `)
        div.find('.stateInfoButton').on('click', (e)=>{
            this.curDiv.remove()
        })
        return div
    }
}
