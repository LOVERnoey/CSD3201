import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../features/tab/profile';

const Stack = createStackNavigator();

export default function ProfileStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen name="Profile"
                component={Profile}
                options={{
                    headerTransparent: true,
                    headerTitle: '',
                }} />
        </Stack.Navigator>
    );
}
