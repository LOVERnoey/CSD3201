import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserManagement from '../features/UserManagement';
import { Ionicons } from '@expo/vector-icons';
import AddGame from '../features/AddGame';
import GameManagement from '../features/GameManagement';


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName = route.name === 'Dashboard' ? (focused ? 'home' : 'home-outline') : 
                       route.name === 'UserManagement' ? (focused ? 'person' : 'person-outline') :
                       (focused ? 'settings' : 'settings-outline');
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#ffffff', tabBarInactiveTintColor: 'gray',
      tabBarStyle: { backgroundColor: 'black' }, headerStyle: { backgroundColor: 'black' },
      headerTintColor: '#ffffff', headerTitleAlign: 'center',headerTitleStyle: { fontSize: 34, fontWeight: 'bold', // ทำให้ตัวหนา
        textTransform: 'uppercase',},
    })}>
      <Tab.Screen name="Dashboard" component={GameManagement} />
      <Tab.Screen name="UserManagement" component={UserManagement} />
    </Tab.Navigator>
  );
}