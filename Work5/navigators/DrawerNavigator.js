import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../features/home/HomeScreen";
import ProfileScreen from "../features/profile/ProfileScreen";
import SettingsScreen from "../features/settings/SettingsScreen";
import CustomDrawerContent from "../components/CustomDrawerContent";
const Drawer = createDrawerNavigator();
export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
