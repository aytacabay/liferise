import React, { useContext, useEffect, useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, Image } from 'react-native';

import { ContextApi } from '../contextApi/parentContextApi'

/* -------------------------------------------------------------------------- */
/*                               Drawer Imports                               */
/* -------------------------------------------------------------------------- */

import {
    createDrawerNavigator,
    DrawerItem,
    DrawerItemList,
    DrawerContentScrollView
} from '@react-navigation/drawer';

/* -------------------------------------------------------------------------- */
/*                               Drawer Screens                               */
/* -------------------------------------------------------------------------- */

import daybookWrite from './daybookWrite/daybookWrite'
import daybookNavigation from './daybookList/daybookNavigation'
// import myProgress from './myProgress/myProgress'
import settingNavigator from './settings/settingNavigator'

import signIn from './signIn/signIn'
import signUp from './signUp/signUp'


/* -------------------------------------------------------------------------- */

const Drawer = createDrawerNavigator();


function CustomDrawerContentComponent(props) {

    const { data: { name, surname, isLoginGetToken, isLogin: { login }, userImagePayload, userImageGet } } = useContext(ContextApi)

    const DATA = [
        {
            id: '0',
            require: require('../assets/images/peoples/people1.png'),
        },
        {
            id: '1',
            require: require('../assets/images/peoples/people2.png'),
        },
        {
            id: '2',
            require: require('../assets/images/peoples/people3.png'),
        },
        {
            id: '3',
            require: require('../assets/images/peoples/people4.png'),
        },
        {
            id: '4',
            require: require('../assets/images/peoples/people5.png'),
        },
        {
            id: '5',
            require: require('../assets/images/peoples/people6.png'),
        },
        {
            id: '6',
            require: require('../assets/images/peoples/people7.png'),
        },
        {
            id: '7',
            require: require('../assets/images/peoples/people8.png'),
        },
        {
            id: '8',
            require: require('../assets/images/peoples/people9.png'),
        },
        {
            id: '9',
            require: require('../assets/images/peoples/people10.png'),
        },
        {
            id: '10',
            require: require('../assets/images/peoples/people11.png'),
        },
        {
            id: '11',
            require: require('../assets/images/peoples/people12.png'),
        },
        {
            id: '12',
            require: require('../assets/images/peoples/people13.png'),
        },
        {
            id: '13',
            require: require('../assets/images/peoples/people14.png'),
        },
        {
            id: '14',
            require: require('../assets/images/peoples/people15.png'),
        },
        {
            id: '15',
            require: require('../assets/images/peoples/people16.png'),
        },
        {
            id: '16',
            require: require('../assets/images/peoples/people17.png'),
        },
        {
            id: '17',
            require: require('../assets/images/peoples/people18.png'),
        },
        {
            id: '18',
            require: require('../assets/images/peoples/people19.png'),
        },
        {
            id: '19',
            require: require('../assets/images/peoples/people20.png'),
        }
    ];

    const [imageNumber, setImageNumber] = useState()

    useEffect(() => {
        userImageGet()
        if (userImagePayload) {
            setImageNumber(userImagePayload)
        }
    }, [userImagePayload])


    useEffect(() => {
        isLoginGetToken()
    }, [login])

    return (
        <SafeAreaView style={{ height: '100%' }}>
            <ScrollView>
                {
                    !login ?
                        (
                            <>
                            </>
                        )
                        :
                        (
                            <>
                                <View style={{ width: '100%', height: 150, alignItems: 'center', marginTop: 10 }}>
                                    <View style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', borderBottomColor: '#999', borderBottomWidth: 5, paddingBottom: 30 }}>
                                        <Image
                                            style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 10 }}
                                            source={DATA[imageNumber - 1].require}
                                        />
                                        <Text style={{ color: 'whitesmoke', fontWeight: 'bold' }}>{(name).toUpperCase()} {(surname).toUpperCase()}</Text>
                                    </View>
                                </View>
                            </>
                        )
                }
                <DrawerContentScrollView {...props}>
                    <DrawerItemList {...props} />
                    <DrawerItem labelStyle={{ fontSize: 16 }} inactiveTintColor='#999' label="Exit" onPress={() => props.navigation.closeDrawer()} />
                </DrawerContentScrollView>

            </ScrollView>
        </SafeAreaView >
    )
}

function DrawerNavigator() {
    const { data: { isLogin: { login } } } = useContext(ContextApi)

    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContentComponent  {...props} />}
            initialRouteName={!login ? 'Sign up' : "Daybook Write"}
            drawerPosition='left'
            drawerStyle={{ backgroundColor: '#712EE5', width: '100%' }}
            drawerContentOptions={{
                activeTintColor: 'black',
                labelStyle: {
                    fontSize: 16,
                    color: '#EBE8E7'
                }
            }}
            drawerType='slide'
            keyboardDismissMode='none'
        >

            {
                login
                    ?
                    <>
                        <Drawer.Screen name="Daybook Write" component={daybookWrite} />
                        <Drawer.Screen name="Daybook Pages" component={daybookNavigation} />
                        <Drawer.Screen name="Setting" component={settingNavigator} />
                    </>
                    :
                    <>
                    </>
            }
            {
                !login
                    ?
                    <>
                        <Drawer.Screen name="Sign in" component={signIn} />
                        <Drawer.Screen name="Sign up" component={signUp} />
                    </>
                    :
                    <>
                    </>
            }

        </Drawer.Navigator>
    )


}

export default DrawerNavigator;