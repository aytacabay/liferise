import React, { useContext } from 'react'
import { View, TouchableOpacity, Image, Text, DevSettings } from 'react-native';

import DrawerMenu from '../../../components/drawerMenu'

import { ContextApi } from '../../../contextApi/parentContextApi'


export default function logOut({ navigation }) {

    const { data: { logOut } } = useContext(ContextApi)


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
            <DrawerMenu navigation={navigation} />

            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>

                <View style={{ width: '100%', height: 200, justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        style={{
                            width: 100,
                            height: 100,
                        }}
                        source={require('../../../assets/images/stop.png')}
                    />

                    <Text style={{ marginTop: 15, fontSize: 15, padding: 10, fontWeight: 'bold', textAlign: 'center', color: '#555' }}>Uygulamadan çıkış yapmak üzeresiniz. Eğer çıkış yapmak istiyorsanız lütfen aşağıdaki butona basın.</Text>
                </View>

                <View style={{ marginTop: 80 }}>
                    <TouchableOpacity onPress={() => {
                        logOut()
                        // DevSettings.reload();
                    }}>
                        <Image
                            style={{
                                width: 64,
                                height: 64,
                                marginTop: 20
                            }}
                            source={require('../../../assets/images/signOut.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}
