import AsyncStorage from '@react-native-community/async-storage';

function isLoginFunc(param) {
    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('TokenNumber', value)
            this.setState({ isLogin: { login: true } })
        } catch (e) {
            console.log('SET TOKEN ERROR')
            console.log(e)
        }
    }
    storeData(param)
}

export {
    isLoginFunc
}