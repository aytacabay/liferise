import React, { } from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import daybookList from './daybookList'
import daybookListDetails from './daybookListDetails'

const Stack = createStackNavigator();

function daybookNavigation({ navigation }) {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='Daybook List' component={daybookList} />
            <Stack.Screen name="Details" component={daybookListDetails} />
        </Stack.Navigator>
    );
}

export default daybookNavigation;