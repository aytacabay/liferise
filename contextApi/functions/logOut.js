import AsyncStorage from '@react-native-community/async-storage';

function logOut() {
    AsyncStorage.removeItem('TokenNumber')
    this.setState({ isLogin: { login: false } })
}


export {
    logOut
}