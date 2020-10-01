async function fetchPostFunc(param) {
    await fetch(param.url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: param.data
    }).then(res => {
        this.setState({ fetchPostResponse: res.data })
    })
}
export {
    fetchPostFunc
}