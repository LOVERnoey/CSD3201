import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../features/LoginScreen';
import LoginScreen from '../features/RegisterScreen';
import RegisterScreen from '../features/RegisterScreen';

const Stack = createStackNavigator();

export default function ConsoleStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen name="Rigister"
                component={RegisterScreen}
                options={{
                    headerTransparent: true,
                    headerTitle: '',
                }} />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    headerTransparent: true, // ทำให้ Header โปร่งใส
                    headerTitle: '',
                    headerTintColor: '#fff', // เปลี่ยนสีของปุ่มย้อนกลับเป็นสีขาว (หรือปรับตามต้องการ)
                }}
            />
        </Stack.Navigator>
    );
}
