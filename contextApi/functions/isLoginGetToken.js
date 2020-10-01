import AsyncStorage from '@react-native-community/async-storage';

function isLoginGetToken() {
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('TokenNumber')
            if (value !== null) {
                this.setState({ isLogin: { login: true } })
            }
        } catch (e) {
            console.log('GET TOKEN ERROR')
            console.log(e)
        }
    }
    getData()
}

export {
    isLoginGetToken
}