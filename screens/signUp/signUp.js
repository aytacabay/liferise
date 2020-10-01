import React, { useState, useContext, useEffect, useRef } from 'react'
import { TouchableOpacity, Text, Image, View, KeyboardAvoidingView, TextInput, StyleSheet, Platform, Keyboard, Animated, Easing, Linking, Switch } from 'react-native';

import { ContextApi } from '../../contextApi/parentContextApi'

import DrawerMenu from '../../components/drawerMenu'

function signIn({ navigation }) {

    /* -------------------------------------------------------------------------- */
    /*                                 ContextApi                                 */
    /* -------------------------------------------------------------------------- */

    const { data: { isLogin: { login }, isLoginFunc, faild, isFaildFunc, userImageChage, isLoginGetToken } } = useContext(ContextApi)


    /* -------------------------------------------------------------------------- */
    /*                                  Switcher                                  */
    /* -------------------------------------------------------------------------- */

    const [isEnabledFemale, setIsEnabledFemale] = useState(false);
    const [isEnabledMale, setIsEnabledMale] = useState(false);

    const toggleSwitchFemale = function (param1, param2) { setIsEnabledFemale(param1), setIsEnabledMale(param2) }
    const toggleSwitchMale = function (param1, param2) { setIsEnabledMale(param1), setIsEnabledFemale(param2) }

    useEffect(() => {
        if (isEnabledMale) {
            toggleSwitchMale(true, false)
            userImageChage(String(19))
        }
        if (isEnabledFemale) {
            toggleSwitchFemale(true, false)
            userImageChage(String(20))
        }

    }, [isEnabledFemale, isEnabledMale])


    /* -------------------------------------------------------------------------- */
    /*                                Login Islemi                                */
    /* -------------------------------------------------------------------------- */

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
                isLoginFunc('1234');
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
            backgroundColor: '#503182'
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
            backgroundColor: '#37D576',
            shadowOffset: { width: 0, height: 3.5 },
            shadowOpacity: 1,
            shadowRadius: 1,
            borderBottomColor: '#555',
            borderBottomWidth: 1,
            opacity: 1,
            zIndex: 1,
        },
        btnContainer: {
            width: '100%',
            borderRadius: 10,
            padding: 15,
            backgroundColor: '#FF7500',
            shadowOffset: { width: 0, height: 3.5 },
            shadowOpacity: 1,
            shadowRadius: 1,
        },
    });


    return (

        <KeyboardAvoidingView behavior={Platform.OS !== "ios" ? "padding" : "height"} style={[styles.container]}>

            <DrawerMenu navigation={navigation} />

            <View style={styles.inner}>

                <View style={{ width: '100%' }}>
                    <Image
                        style={{ width: '100%', height: 270 }}
                        source={require('../../assets/images/signUp.png')}
                    />
                </View>

                <View style={{ width: '100%', padding: 20 }}>
                    <Animated.View style={{ opacity: fadeAnimOne }} >
                        <TextInput onEndEditing={(text) => { onChangeUsername(text) }} keyboardAppearance='dark' selectionColor='orange' returnKeyType='done' maxLength={25} onFocus={() => { fadeOutTwo(); fadeOutThree(); }} style={styles.textInput} placeholder="Username" placeholderTextColor='#666' />
                    </Animated.View>

                    <Animated.View style={{ opacity: fadeAnimTwo }}>
                        <TextInput onFocus={() => { fadeOutOne(); fadeOutThree(); }} onEndEditing={(text) => { onChangePassword(text); }} keyboardAppearance='dark' secureTextEntry returnKeyType='done' maxLength={8} style={styles.textInput} placeholder="Password" placeholderTextColor='#666' />
                    </Animated.View>
                </View>


                <View style={{ width: '100%', padding: 20, zIndex: -99, }}>

                    <Animated.View style={{ opacity: fadeAnimThree }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                            <View style={{ marginBottom: 30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Switch
                                    trackColor={{ false: "#767577", true: "#37D576" }}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitchFemale}
                                    value={isEnabledFemale}
                                />
                                <Text style={{ marginLeft: 10, color: 'whitesmoke', fontWeight: 'bold' }}>Female</Text>
                            </View>

                            <View style={{ marginBottom: 30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ marginRight: 10, color: 'whitesmoke', fontWeight: 'bold' }}>Male</Text>
                                <Switch
                                    trackColor={{ false: "#767577", true: "#37D576" }}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitchMale}
                                    value={isEnabledMale}
                                />
                            </View>

                        </View>


                        <TouchableOpacity onPress={singInFunc} style={styles.btnContainer} >
                            <Text style={{ textAlign: 'center', color: 'whitesmoke', fontWeight: 'bold' }}>Kayıt Ol</Text>
                        </TouchableOpacity>
                        {
                            faild.state ?
                                <Text style={{ marginTop: 10, textAlign: 'center', color: '#FF5050', fontSize: 12, }}>
                                    Kayıt işlemi sırasında girdiğiniz {faild.content} hatalıdır. Lütfen başka bir {faild.content} deneyin.
                                </Text>
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


export default signIn;