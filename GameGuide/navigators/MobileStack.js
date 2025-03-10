import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Mobile from '../features/tab/mobile';
import Details from '../features/home/Details';

const Stack = createStackNavigator();

export default function MobileStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen name="Mobile"
                component={Mobile}
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
