import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Console from '../features/tab/console';
import Details from '../features/home/Details';

const Stack = createStackNavigator();

export default function ConsoleStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen name="Console"
                component={Console}
                options={{
                    headerTransparent: true,
                    headerTitle: '',
                }} />
            <Stack.Screen
                name="Details"
                component={Details}
                options={{
                    headerTransparent: true, // ทำให้ Header โปร่งใส
                    headerTitle: '',
                    headerTintColor: '#fff', // เปลี่ยนสีของปุ่มย้อนกลับเป็นสีขาว (หรือปรับตามต้องการ)
                }}
            />
        </Stack.Navigator>
    );
}
