import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Details from '../features/home/Details'; // Ensure the correct path
import Favorite from '../features/home/Favorite'; // Ensure the correct path

const Stack = createStackNavigator();

export default function FavoriteStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen name="Favorite"
                component={Favorite}
                options={{
                    headerTransparent: true,
                    headerTitle: '',
                }} />
            <Stack.Screen
                name="Details"
                component={Details}
                options={{
                    headerTransparent: true, // Make the Header transparent
                    headerTitle: '',
                    headerTintColor: '#fff', // Change the back button color to white (or adjust as needed)
                }}
            />
        </Stack.Navigator>
    );
}