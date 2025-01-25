import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './features/home/HomeScreen';
import DetailsScreen from './features/home/DetailsScreen';
const Stack = createStackNavigator();
export default function StackNavigator() {
  return (<Stack.Navigator screenOptions={{
    headerStyle: { backgroundColor: "#ff0000" },
    headerTintColor: "#fff",
    headerTitleStyle: { fontWeight: "bold" },
  }}>
    <Stack.Screen name="Game" component={HomeScreen} />
    <Stack.Screen name="Details of Game" component={DetailsScreen} />
  </Stack.Navigator>
  );
}
