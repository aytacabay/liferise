import React from 'react'
import { View, Text } from 'react-native';

import DrawerMenu from '../../components/drawerMenu'

export default function myProgress({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <DrawerMenu navigation={navigation} />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>My Progress</Text>
            </View>
        </View>
    );
}