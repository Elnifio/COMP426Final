UsaCovidInfo = class{
    constructor(data, parentDiv){
        this.data = data
        this.parentDiv = parentDiv
        this.curDiv = this.createViewDiv()
        this.parentDiv.append(this.curDiv)
    }

    createViewDiv(){
        const date = this.data.date
        const cases = this.data.positive
        const caseIncrease = this.data.positiveIncrease
        const death = this.data.death
        const deathIncrease = this.data.deathIncrease
        let div = $(`<div>
                <p><strong>Untill <em>${date.toString().substring(0,4)+'/'+date.toString().substring(4,6)+'/'+date.toString().substring(6,8)}</em> In USA</strong><p>
                <p><strong>Covid-19 Case: <em>${cases}</em></strong></p>
                <p><strong>Daily Case Increase: <em>${caseIncrease}</em></strong></p>
                <p><strong>Covid-19 Death: <em>${death}</em></strong></p>
                <p><strong>Daily Death Increase: <em>${deathIncrease}</em></strong></p>
                <i class="fas fa-plus stateInfoButton"></i>
                </div>`)
        div.find('.stateInfoButton').on('click', async(e)=>{
            let stateResult = await axios({
            method: 'get',
            url: 'https://api.covidtracking.com/v1/states/current.json',
            });
            const data = stateResult.data
            data.forEach((state) => new StateCovidInfo(state, $('#stateCovid19')))
            let retractButton = $('<i class="fas fa-minus stateInfoButton"></i>')
            retractButton.on('click', (e)=>{
                let newDiv = this.createViewDiv()
                this.curDiv.replaceWith(newDiv)
                this.curDiv = newDiv
                $('#stateCovid19').empty()
            })
            div.find('.stateInfoButton').replaceWith(retractButton)
        })
        return div

    }
}