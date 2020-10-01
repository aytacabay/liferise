import React, { useContext } from 'react'
import { View, TextInput, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';

import DrawerMenu from '../../components/drawerMenu'
import { ContextApi } from '../../contextApi/parentContextApi'


export default function daybookWrite({ navigation }) {

    const { data: { name, daybookWriteStateContentFunc, daybookWriteContentState, isSend } } = useContext(ContextApi)

    return (
        <TouchableWithoutFeedback >
            <View style={{ flex: 1 }} keyboardShouldPersistTaps='handled'>
                <DrawerMenu navigation={navigation} />

                <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}
                    style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                    <TextInput
                        onChangeText={(text) => { daybookWriteStateContentFunc({ content: text }) }}
                        value={daybookWriteContentState.content}
                        keyboardAppearance='dark'
                        placeholder={name + ', Kendin için neler yaptığını yazmaya başlayabilirsin !'} placeholderTextColor='#666'
                        multiline={true}
                        style={{
                            // Background Color secimi veya background Image secimi yapsinlar mi ?
                            backgroundColor: '#00C882',
                            width: '100%',
                            height: '100%',
                            color: '#333',
                            fontSize: 16,
                            letterSpacing: 0.5,
                            paddingLeft: 5,
                            paddingTop: 15,
                            borderRadius: 0,
                            shadowOffset: { width: 0, height: 2.5 },
                            shadowOpacity: 1,
                            shadowRadius: 2,
                            borderTopColor: '#555',
                            borderTopWidth: 1,
                            borderLeftColor: '#555',
                            borderLeftWidth: 1,
                            borderRightColor: '#555',
                            borderRightWidth: 1,
                            borderBottomColor: 'orange',
                            borderBottomWidth: 3,
                        }} />
                </KeyboardAvoidingView>

            </View>
        </TouchableWithoutFeedback>
    );
}