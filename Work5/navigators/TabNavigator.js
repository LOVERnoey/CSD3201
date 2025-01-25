import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import DashboardScreen from '../features/dashboard/DashboardScreen';
import WorkoutsScreen from '../features/workouts/WorkoutsScreen';
import ProfileScreen from '../features/profile/ProfileScreen';

const Tab = createBottomTabNavigator();

const getIconName = (routeName, focused) => {
  const icons = {
    Dashboard: focused ? 'bar-chart' : 'bar-chart-outline',
    Workouts: focused ? 'fitness' : 'fitness-outline',
    Profile: focused ? 'person' : 'person-outline',
  };
  return icons[routeName];
};

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons name={getIconName(route.name, focused)} size={size} color={color} />
        ),
        tabBarActiveTintColor: '#fff', tabBarInactiveTintColor: '#fff', tabBarStyle: { backgroundColor: '#ff0000' },
        headerStyle: { backgroundColor: '#ff0000' }, headerTintColor: '#fff', headerTitleAlign: 'center',
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Workouts" component={WorkoutsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
