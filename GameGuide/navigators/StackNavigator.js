import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import mobile from '../features/tab/mobile';
import Details from '../features/home/Details';
const Stack = createStackNavigator();
export default function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Details" component={Details} />
            <Stack.Screen name="Mobile" component={mobile} />
        </Stack.Navigator>
    );
}