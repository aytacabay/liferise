import React, { useEffect, useContext } from 'react';
import {
    SafeAreaView,
    TouchableOpacity,
    FlatList,
    Image
} from 'react-native';

import { ContextApi } from '../../../contextApi/parentContextApi.js'

import DrawerMenu from '../../../components/drawerMenu'

const DATA = [
    {
        id: '1',
        require: require('../../../assets/images/peoples/people1.png'),
    },
    {
        id: '2',
        require: require('../../../assets/images/peoples/people2.png'),
    },
    {
        id: '3',
        require: require('../../../assets/images/peoples/people3.png'),
    },
    {
        id: '4',
        require: require('../../../assets/images/peoples/people4.png'),
    },
    {
        id: '5',
        require: require('../../../assets/images/peoples/people5.png'),
    },
    {
        id: '6',
        require: require('../../../assets/images/peoples/people6.png'),
    },
    {
        id: '7',
        require: require('../../../assets/images/peoples/people7.png'),
    },
    {
        id: '8',
        require: require('../../../assets/images/peoples/people8.png'),
    },
    {
        id: '9',
        require: require('../../../assets/images/peoples/people9.png'),
    },
    {
        id: '10',
        require: require('../../../assets/images/peoples/people10.png'),
    },
    {
        id: '11',
        require: require('../../../assets/images/peoples/people11.png'),
    },
    {
        id: '12',
        require: require('../../../assets/images/peoples/people12.png'),
    },
    {
        id: '13',
        require: require('../../../assets/images/peoples/people13.png'),
    },
    {
        id: '14',
        require: require('../../../assets/images/peoples/people14.png'),
    },
    {
        id: '315',
        require: require('../../../assets/images/peoples/people15.png'),
    },
    {
        id: '16',
        require: require('../../../assets/images/peoples/people16.png'),
    },
    {
        id: '17',
        require: require('../../../assets/images/peoples/people17.png'),
    },
    {
        id: '18',
        require: require('../../../assets/images/peoples/people18.png'),
    },
    {
        id: '19',
        require: require('../../../assets/images/peoples/people19.png'),
    },
    {
        id: '20',
        require: require('../../../assets/images/peoples/people20.png'),
    }
];

function Item({ require, id, onSelect }) {
    return (
        <TouchableOpacity onPress={() => onSelect(id)}>
            <Image
                style={{ width: 150, height: 150, shadowColor: '#555', zIndex: 91, shadowOffset: { width: 0, height: 6 }, shadowOpacity: .3, shadowRadius: 3 }}
                source={require}
            />
        </TouchableOpacity>
    );
}

function imageChange({ navigation }) {

    const { data: { userImageChage } } = useContext(ContextApi)

    const onSelect =
        (id) => {
            if (id) {
                userImageChage(id)
            }
        }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#00C882', }}>
            <DrawerMenu navigation={navigation} />
            <FlatList
                data={DATA}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-around', marginHorizontal: 10, marginVertical: 10 }}
                renderItem={({ item }) => (
                    <Item
                        id={item.id}
                        require={item.require}
                        onSelect={onSelect}
                    />
                )}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}
export default imageChange;
