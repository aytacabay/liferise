import React, { useContext } from 'react'
import { SafeAreaView, TouchableOpacity, Image, useWindowDimensions, Text, View, Keyboard } from 'react-native'
import { useRoute } from '@react-navigation/native';

import { ContextApi } from '../contextApi/parentContextApi'

export default function DrawerMenu({ navigation }) {

    const { data: { daybookWriteContentState, fetchPostFunc, isSendFunc, isLogin: { login } } } = useContext(ContextApi)

    const window = useWindowDimensions();

    const route = useRoute();

    async function daybookWriteSaveFunc() {
        Keyboard.dismiss()

        // TODO : DATE Problemine bak ve datayi sifrele. 

        const data = JSON.stringify({
            content: daybookWriteContentState.content,
            time: new Date()
        })
        await fetchPostFunc({ data, url: 'https://a2148741-f395-4017-9bb2-a0b26ab8aae9.mock.pstmn.io' })
        await isSendFunc()
    }

    async function daybookWriteDeleteFunc() {
        isSendFunc()
        Keyboard.dismiss()
    }


    return (
        <SafeAreaView style={
            [
                login ? route.name === 'Daybook Write' ? { backgroundColor: '#1DC0F7' } : route.name === 'Details' || route.name === 'Daybook List' ? { backgroundColor: '#F4B417' } : {} : {}
                ,
                {
                    width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', shadowColor: '#555', zIndex: 91, shadowOffset: { width: 0, height: 6 }, shadowOpacity: .3, shadowRadius: 3
                }
            ]
        }>

            <View>
                {
                    !login
                        ?
                        (<></>)
                        :
                        (
                            route.name === 'Daybook Write'
                                ?
                                <>
                                    <View style={[{ width: window.width - 90, }, { flexDirection: 'row', }]}>

                                        <TouchableOpacity onPress={() => { daybookWriteSaveFunc() }}>
                                            <Image
                                                style={{
                                                    width: 40,
                                                    height: 40,
                                                    marginRight: 5,
                                                    marginLeft: 5,
                                                    marginBottom: 4
                                                }}
                                                source={require('../assets/images/save.png')}
                                            />
                                        </TouchableOpacity>

                                        <Text style={{
                                            paddingTop: 12,
                                            paddingLeft: 5,
                                            color: '#555',
                                            fontSize: 15
                                        }}>
                                            Bu gün kendin için neler yaptın ?
                                        </Text>

                                    </View>
                                </>
                                :
                                <></>
                        )
                }
            </View>

            <View>
                {
                    route.name === 'Details'
                        ?
                        <>
                            <View style={[{ width: window.width - 60, }, { flexDirection: 'row', }]}>

                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => { navigation.goBack() }}>
                                    <Image
                                        style={{
                                            width: 40,
                                            height: 40,
                                            marginLeft: 0,
                                            marginBottom: 4
                                        }}
                                        source={require('../assets/images/back.png')}
                                    />
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'whitesmoke', marginBottom: 3 }}>Geri</Text>
                                </TouchableOpacity>

                            </View>
                        </>
                        :
                        <></>
                }
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end' }}>

                {
                    route.name === 'Daybook Write'
                        ?
                        <>
                            <TouchableOpacity onPress={() => { daybookWriteDeleteFunc() }}>
                                <Image
                                    style={{
                                        width: 40,
                                        height: 40,
                                        marginRight: 5,
                                        marginBottom: 4
                                    }}
                                    source={require('../assets/images/delete.png')}
                                />
                            </TouchableOpacity>
                        </>
                        :
                        <></>
                }

                <TouchableOpacity onPress={() => { navigation.openDrawer() }} >
                    <Image
                        style={{ width: 40, height: 40, borderRadius: 50, marginRight: 5, marginBottom: 4 }}
                        source={require('../assets/images/menu.png')}
                    />
                </TouchableOpacity>

            </View>

        </SafeAreaView >
    )
}
