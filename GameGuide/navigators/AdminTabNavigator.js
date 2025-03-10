import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from '../features/DashboardScreen';
import ProfileStack from './ProfileStack';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName = route.name === 'Dashboard' ? (focused ? 'home' : 'home-outline') : 
                       route.name === 'Profile' ? (focused ? 'person' : 'person-outline') :
                       (focused ? 'settings' : 'settings-outline');
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#ffffff', tabBarInactiveTintColor: 'gray',
      tabBarStyle: { backgroundColor: 'black' }, headerStyle: { backgroundColor: 'black' },
      headerTintColor: '#ffffff', headerTitleAlign: 'center',headerTitleStyle: { fontSize: 34, fontWeight: 'bold', // ทำให้ตัวหนา
        textTransform: 'uppercase',},
    })}>
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
}