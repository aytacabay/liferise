function daybookWriteStateContentFunc(param) {
    this.setState({ daybookWriteContentState: { content: param.content } })
}

export {
    daybookWriteStateContentFunc
}