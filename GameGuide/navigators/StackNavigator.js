import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import mobile from '../features/tab/mobile';
import pc from '../features/tab/pc';
import console from '../features/tab/console';
import Details from '../features/home/Details';

const Stack = createStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen name="Mobile"
                component={mobile}
                options={{
                    headerTransparent: true,
                    headerTitle: '',
                }} />
            <Stack.Screen name="Pc"
                component={pc}
                options={{
                    headerTransparent: true,
                    headerTitle: '',
                }} />
            <Stack.Screen name="Console"
                component={console}
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
