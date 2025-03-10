import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../features/LoginScreen';
import RegisterScreen from '../features/RegisterScreen';
import TabNavigator from './TabNavigator';
import AdminTabNavigator from './AdminTabNavigator'

const Stack = createStackNavigator();

export default function AuthenticationNavigator({ user }) {
    console.log("User in Authen: ", user);
    
    const initialRoute = user ? (user.role === "Admin" ? "Dashboard" : "Main") : "Login";

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRoute}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Main" component={TabNavigator} />
            <Stack.Screen name="Dashboard" component={AdminTabNavigator} />
        </Stack.Navigator>
    );
}