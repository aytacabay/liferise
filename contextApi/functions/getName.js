async function getName() {

    await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/units', { method: 'GET', headers: { 'Content-Type': 'application/json;charset=utf-8' } })
        .then(res => res.json())
        .then(res =>
            this.setState({ name: res.units[0].name })
        )

}


export {
    getName
}