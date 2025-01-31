import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../features/home/HomeScreen';
import StackNavigator from './StackNavigator';
import mobile from '../features/tab/mobile';
import pc from '../features/tab/pc';
import console from '../features/tab/console';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName = route.name === 'Home' ? (focused ? 'home' : 'home-outline') : 
                       route.name === 'Pc' ? (focused ? 'desktop' : 'desktop-outline') : 
                       route.name === 'Mobile' ? (focused ? 'phone-portrait' : 'phone-portrait-outline') : 
                       route.name === 'Console' ? (focused ? 'game-controller' : 'game-controller-outline') : 
                       (focused ? 'settings' : 'settings-outline');
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#ffffff', tabBarInactiveTintColor: 'gray',
      tabBarStyle: { backgroundColor: 'black' }, headerStyle: { backgroundColor: 'black' },
      headerTintColor: '#ffffff', headerTitleAlign: 'center',headerTitleStyle: { fontSize: 34, fontWeight: 'bold', // ทำให้ตัวหนา
        textTransform: 'uppercase',},
    })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Pc" component={pc} />
      <Tab.Screen name="Mobile" component={mobile} />
      <Tab.Screen name="Console" component={console} />
    </Tab.Navigator>
  );
}