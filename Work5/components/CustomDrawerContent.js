import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Image source={require('../assets/profilePic.jpg')} style={styles.profileImage} />
        <Text style={styles.userName}>Woraphon Udom</Text>
        <Text style={styles.userEmail}>s65122250018@ssru.ac.th</Text>
      </View>
      <View style={styles.drawerContent}>
        <DrawerItemList {...props} />
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={() => handleLogout(props)}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}

function handleLogout(props) {
  alert("Logged out successfully!");
  props.navigation.reset({ index: 0, routes: [{ name: "Login" }] });
}

const styles = StyleSheet.create({
  header: { backgroundColor: "#ff0000", padding: 16, alignItems: "center" },
  profileImage: { width: 80, height: 80, borderRadius: 40, marginBottom: 10 },
  userName: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  userEmail: { color: "#fff", fontSize: 14 },
  drawerContent: { marginTop: 20 },
  logoutButton: { marginTop: 20, padding: 16, backgroundColor: "#ff0000", alignItems: "center", borderRadius: 5, marginHorizontal: 10 },
  logoutText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
