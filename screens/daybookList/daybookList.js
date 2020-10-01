import React, { useContext, useEffect, useCallback, useState } from 'react'
import { SafeAreaView, View, Text, FlatList, TouchableOpacity, ImageBackground } from 'react-native';

import DrawerMenu from '../../components/drawerMenu'

import { ContextApi } from '../../contextApi/parentContextApi'

function daybookList({ navigation }) {

    const { data: { fetchGetResponse, fetchGetFunc } } = useContext(ContextApi)

    useEffect(() => {
        fetchGetFunc({ url: 'https://restcountries.eu/rest/v2/all' })
        // Api : https://age-of-empires-2-api.herokuapp.com/api/v1/units
    }, [])

    const [selected, setSelected] = useState({ itemId: 0 });

    const onSelectFunc = useCallback(
        (param) => {
            setSelected({ id: param.id })
        },
        [selected],
    );

    function Item({ title, param, onSelect, navigation }) {

        return (
            selected.id === param.id
                ?
                <View style={[{ flex: 1, height: 150, backgroundColor: '#4ED0A3', borderRadius: 20, marginVertical: 5, marginHorizontal: 5, alignItems: 'center', }]}>
                    <TouchableOpacity style={{ flex: 1, justifyContent: 'center' }} onPress={() => { onSelectFunc(param); navigation.navigate('Details', { item: param }) }}>
                        <Text style={{ fontSize: 20, color: 'whitesmoke', textAlign: 'center', margin: 5 }}>{title}</Text>
                    </TouchableOpacity>
                </View>
                :
                <View style={[{ flex: 1, height: 150, backgroundColor: '#C7CFD6', borderRadius: 20, marginVertical: 5, marginHorizontal: 2.5, justifyContent: 'center', alignItems: 'center', }]}>
                    <TouchableOpacity style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', }} onPress={() => { onSelectFunc(param); navigation.navigate('Details', { item: param }) }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#D04E7B' }}>{title}</Text>
                    </TouchableOpacity>
                </View>
        );
    }

    const imageBack = require('../../assets/images/topBar8.png')

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
            <DrawerMenu navigation={navigation} />

            <ImageBackground source={imageBack} style={{ width: '100%', height: '100%' }}>
                <View style={{ width: '100%', height: '100%', paddingBottom: 65, }}>
                    {
                        fetchGetResponse
                            ?
                            <FlatList
                                columnWrapperStyle={{ alignItems: 'space-around' }}
                                numColumns={2}
                                data={fetchGetResponse}
                                keyExtractor={item => item.callingCodes.toString()}
                                renderItem={
                                    function ({ item }) {
                                        return (
                                            <Item
                                                title={item.name}
                                                param={item}
                                                onSelect={onSelectFunc}
                                                navigation={navigation}
                                            />
                                        )

                                    }
                                }
                            />
                            :
                            <Text style={{ textAlign: 'center', fontSize: 50, color: '#333', fontWeight: 'bold', paddingTop: 270 }} >Loading</Text>
                    }
                </View>
            </ImageBackground>

        </View>
    );
}

export default daybookList;


// TODO : Birde stackNavi de animation varmi bak sayfadan sayfaya gecerken.
// TODO : DATE Olsun box item in box larinda.
