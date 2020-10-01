import React from 'react'
import { View, Text, Button } from 'react-native';

import DrawerMenu from '../../components/drawerMenu'

function daybookListDetails({ route, navigation }) {
    const { item } = route.params
    // console.log(item)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
            <DrawerMenu navigation={navigation} />
            <View style={{ backgroundColor: '#e6e8eb', width: '100%', height: '100%', paddingTop: 20 }}>
                <Text style={{ padding: 10, fontSize: 16, letterSpacing: 0.5 }}>{item.region}</Text>
            </View>
        </View>
    );
}

export default daybookListDetails;