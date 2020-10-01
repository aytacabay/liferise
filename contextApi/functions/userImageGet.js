import AsyncStorage from '@react-native-community/async-storage';

async function userImageGet() {
    this.setState({ userImagePayload: await AsyncStorage.getItem('UserImage') })
}

export {
    userImageGet
}