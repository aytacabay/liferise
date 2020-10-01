async function fetchGetFunc(param) {
    await fetch(param.url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    })
        .then(res => res.json())
        .then(res => {
            this.setState({ fetchGetResponse: res })
        })
}

export {
    fetchGetFunc
}