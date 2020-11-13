$(async function() {
    let result = await axios({
        method: 'get',
        url: 'https://api.covidtracking.com/v1/us/current.json',
      });
    new UsaCovidInfo(result.data[0], $('#covid19'))
    // historic US value for a given state:  https://api.covidtracking.com/v1/us/20200501.json
    // current value for a single state https://api.covidtracking.com/v1/states/ca/current.json
    // curent value for all states /v1/states/current.json
})

