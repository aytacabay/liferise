import React, { useContext, useEffect } from 'react'
import { View, Text } from 'react-native';

import DrawerMenu from '../../../components/drawerMenu'

import { ContextApi } from '../../../contextApi/parentContextApi'

export default function notificationChange({ navigation }) {

    const { getName, data: { name } } = useContext(ContextApi)

    useEffect(() => {
        // console.log(getName())
        getName()
    }, [name])


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <DrawerMenu navigation={navigation} />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>{name}</Text>
            </View>
        </View>
    );
}