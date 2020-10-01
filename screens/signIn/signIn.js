import React, { useContext, useState, useEffect, useRef } from 'react'
import { TouchableOpacity, Text, Image, View, KeyboardAvoidingView, TextInput, StyleSheet, Platform, Keyboard, Animated, Easing, Switch } from 'react-native';

import { ContextApi } from '../../contextApi/parentContextApi'

import DrawerMenu from '../../components/drawerMenu'

export default function signIn({ navigation }) {

    /* -------------------------------------------------------------------------- */
    /*                                Login Islemi                                */
    /* -------------------------------------------------------------------------- */

    const { data: { isLogin: { login }, isLoginFunc, faild, isFaildFunc } } = useContext(ContextApi)

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    /* -------------------------------------------------------------------------- */

    const fadeAnimOne = useRef(new Animated.Value()).current;
    const fadeAnimTwo = useRef(new Animated.Value()).current;
    const fadeAnimThree = useRef(new Animated.Value()).current;

    const fadeInOne = () => {
        Animated.timing(fadeAnimOne, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
            easing: Easing.bezier(.31, .62, .58, .96)
        }).start();
    };
    fadeInOne();

    const fadeOutOne = () => {
        Animated.timing(fadeAnimOne, {
            toValue: 0,
            duration: 50,
            useNativeDriver: true,
            easing: Easing.bezier(.31, .62, .58, .96)
        }).start();
    };

    const fadeInTwo = () => {
        Animated.timing(fadeAnimTwo, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
            easing: Easing.bezier(.31, .62, .58, .96)
        }).start();
    };
    fadeInTwo();

    const fadeOutTwo = () => {
        Animated.timing(fadeAnimTwo, {
            toValue: 0,
            duration: 50,
            useNativeDriver: true,
            easing: Easing.bezier(.31, .62, .58, .96)
        }).start();
    };

    const fadeInThree = () => {
        Animated.timing(fadeAnimThree, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
            easing: Easing.bezier(.31, .62, .58, .96)
        }).start();
    };
    fadeInThree();

    const fadeOutThree = () => {
        Animated.timing(fadeAnimThree, {
            toValue: 0,
            duration: 50,
            useNativeDriver: true,
            easing: Easing.bezier(.31, .62, .58, .96)
        }).start();
    };

    useEffect(() => {
        Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

        // cleanup function
        return () => {
            Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
            fadeInOne()
            fadeInTwo()
            fadeInThree()
        };
    }, [login]);


    const _keyboardDidHide = () => {
        fadeInOne()
        fadeInTwo()
        fadeInThree()
    };

    function onChangeUsername(text) {
        setUsername(text.nativeEvent.text.toLowerCase());
    }

    function onChangePassword(text) {
        setPassword(text.nativeEvent.text)
    }

    function singInFunc() {
        if (username === undefined) {
            if (password === undefined) {
                isLoginFunc('1234')
            } else {
                isFaildFunc({ state: true, content: 'password' })
            }
        } else {
            isFaildFunc({ state: true, content: 'username' })
        }
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#ffb95b'
        },
        inner: {
            flex: 1,
            justifyContent: "space-around"
        },
        header: {
            fontSize: 36,
            marginBottom: 48
        },
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
        <KeyboardAvoidingView behavior={Platform.OS !== "ios" ? "padding" : "height"} style={styles.container}>
            <DrawerMenu navigation={navigation} />

            <View style={styles.inner}>

                <View style={{ width: '100%' }}>
                    <Image
                        style={{ width: '100%', height: 270 }}
                        source={require('../../assets/images/login2.png')}
                    />
                </View>

                <View style={{ width: '100%', padding: 20 }}>
                    <Animated.View style={{ opacity: fadeAnimOne }} >
                        <TextInput onEndEditing={(text) => { onChangeUsername(text) }} onFocus={() => { fadeOutTwo(); fadeOutThree(); }} keyboardAppearance='dark' selectionColor='orange' returnKeyType='done' maxLength={25} style={styles.textInput} placeholder="Username" placeholderTextColor='whitesmoke' />
                    </Animated.View>
                    <Animated.View style={{ opacity: fadeAnimTwo }}>
                        <TextInput onEndEditing={(text) => { onChangePassword(text) }} onFocus={() => { fadeOutOne(); fadeOutThree(); }} secureTextEntry keyboardAppearance='dark' selectionColor='orange' returnKeyType='done' maxLength={8} style={styles.textInput} placeholder="Password" placeholderTextColor='whitesmoke' />
                    </Animated.View>
                </View>

                <View style={{ width: '100%', padding: 20, zIndex: -99, }}>
                    <Animated.View style={{ opacity: fadeAnimThree }}>
                        <TouchableOpacity onPress={singInFunc} style={styles.btnContainer} >
                            <Text style={{ textAlign: 'center', color: '#555', fontWeight: 'bold' }}>Giriş Yap</Text>
                        </TouchableOpacity>
                        {
                            faild.state ?
                                <Text style={{ marginTop: 10, textAlign: 'center', color: '#FF5050', fontSize: 12, }}>Giriş işlemi sırasında girdiğiniz {faild.content} bilgilerinde bir sorun oluştu lütfen bilgilerinizi tekrar kontrol edin.</Text>
                                :
                                <Text></Text>
                        }
                        <Text style={{ textAlign: 'center', marginTop: 20, color: 'whitesmoke', fontSize: 11 }}>Kayıt olursanız Life Rise'ın <Text style={{ color: 'yellow', textDecorationLine: 'underline' }} onPress={() => Linking.openURL('http://google.com')}> Gizlilik Politikasını </Text> ve <Text style={{ color: 'yellow', textDecorationLine: 'underline' }} onPress={() => Linking.openURL('http://google.com')}>Hizmet Şartlarını </Text> kabul etmiş olursunuz. </Text>
                    </Animated.View>
                </View>

            </View>
        </KeyboardAvoidingView >
    );
}
