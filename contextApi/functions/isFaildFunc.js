function isFaildFunc(param) {
    this.setState({ faild: { state: param.state, content: param.content } })
}


export {
    isFaildFunc
}