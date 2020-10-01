import * as React from 'react';

/* -------------------------------------------------------------------------- */
/*                              BottomTab Imports                             */
/* -------------------------------------------------------------------------- */

import {
    createBottomTabNavigator
} from '@react-navigation/bottom-tabs';

/* -------------------------------------------------------------------------- */
/*                               Setting Screens                              */
/* -------------------------------------------------------------------------- */

import imageChange from './imageChange/imageChange'
import rulesRead from './rulesRead/rulesRead'
import logOut from './logOut/logOut'
import notificationChange from './notificationChange/notificationChange'
import passwordChange from './passwordChange/passwordChange'


/* -------------------------------------------------------------------------- */

const Tab = createBottomTabNavigator();

export default function setting({ navigation }) {

    return (
        <Tab.Navigator
            initialRouteName='imageChange'
            tabBarOptions={{
                activeTintColor: 'whitesmoke',
                style: {
                    backgroundColor: '#313131',
                    borderTopColor: 'orange',
                    borderTopWidth: 3,
                },
                labelStyle: {
                    fontSize: 12,
                    fontWeight: 'bold',
                    height: '55%',
                },
            }}
        >
            <Tab.Screen name="Avatar" component={imageChange} />
            <Tab.Screen name="Bildirimler" component={notificationChange} />
            <Tab.Screen name="Password" component={passwordChange} />
            <Tab.Screen name="Rules" component={rulesRead} />
            <Tab.Screen name="Sign Out" component={logOut} />
        </Tab.Navigator >
    );
}