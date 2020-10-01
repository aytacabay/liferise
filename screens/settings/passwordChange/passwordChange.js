import React, { useState } from 'react'
import { SafeAreaView, View, Text, Image, TextInput, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';

import DrawerMenu from '../../../components/drawerMenu'

function passwordChange({ navigation }) {



    const [valueOld, oldPassword] = useState('');
    const [valueNew, newPassword] = useState('');


    function changePassword() {

        if (valueOld && valueNew) {

            console.log(valueNew)
            console.log(valueOld)

            if (valueNew !== valueOld) {
                console.log('CHANGED')
            } else {
                console.log('ERROR SIFRE AYNI')
            }

        } else {
            console.log('ERROR INPUT BOS')
        }

    }


    const styles = StyleSheet.create({
        textInput: {
            width: '100%',
            marginBottom: 20,
            borderRadius: 10,
            padding: 20,
            backgroundColor: '#FF5050',
            shadowOffset: { width: 0, height: 3.5 },
            shadowOpacity: 1,
            shadowRadius: 1,
            borderBottomColor: '#555',
            borderBottomWidth: 1,
            opacity: 1
        },
        btnContainer: {
            width: '100%',
            borderRadius: 10,
            padding: 15,
            backgroundColor: '#37D576',
            shadowOffset: { width: 0, height: 3.5 },
            shadowOpacity: 1,
            shadowRadius: 1,
            zIndex: -1
        },
    });

    return (
        <SafeAreaView>
            <DrawerMenu navigation={navigation} />

            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>

                <View style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>

                    <View style={{ zIndex: -1, width: '100%', paddingHorizontal: 5, justifyContent: 'center', alignItems: 'center', }}>
                        <Image
                            style={{
                                width: 125,
                                height: 125,
                            }}
                            source={require('../../../assets/images/passwordChange2.png')}
                        />

                        <Text style={{ marginTop: 5, fontSize: 15, fontWeight: 'bold', textAlign: 'center', color: '#555' }}>
                            Şifrenizi değiştirmek için aşağıdaki kutucukları doldurun lütfen !
                        </Text>
                    </View>

                    <View style={{ zIndex: 99, width: '90%', marginTop: 20, marginBottom: 70 }}>
                        <View>
                            <TextInput onChangeText={(text) => { oldPassword(text.toLowerCase()) }} keyboardAppearance='dark' selectionColor='orange' returnKeyType='done' maxLength={8} style={styles.textInput} placeholder="Eski Password" placeholderTextColor='whitesmoke' />
                        </View>

                        <View>
                            <TextInput onChangeText={(text) => { newPassword(text.toLowerCase()) }} keyboardAppearance='dark' selectionColor='orange' returnKeyType='done' maxLength={8} style={styles.textInput} placeholder="Yeni Password" placeholderTextColor='whitesmoke' />
                        </View>

                        <TouchableOpacity onPress={changePassword} style={styles.btnContainer} >
                            <Text style={{ textAlign: 'center', color: '#555', fontWeight: 'bold' }}>Değiştir</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </KeyboardAvoidingView>

        </SafeAreaView>
    );
}
export default passwordChange;