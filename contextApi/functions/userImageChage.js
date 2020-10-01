import AsyncStorage from '@react-native-community/async-storage';

function userImageChage(param) {
    const storeDataSet = async (value) => {
        try {
            await AsyncStorage.setItem('UserImage', value)
            this.setState({ userImagePayload: value })
        } catch (e) {
            console.log(e)
            console.log('IMAGE SET ERROR')
        }
    }
    storeDataSet(param)
}


export {
    userImageChage
}