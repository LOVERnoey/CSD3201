import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import SettingsScreen from './features/setting/SettingsScreen';
const Drawer = createDrawerNavigator();
export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#ff0000' },
        headerTintColor: '#ffffff',
      }}
    >
      <Drawer.Screen name="Game selling App" component={TabNavigator} />
      <Drawer.Screen name="Settings of App" component={SettingsScreen} /></Drawer.Navigator>
  );
}
