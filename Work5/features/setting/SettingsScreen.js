import React from "react";
import { View, Text, StyleSheet, Button, Switch, TouchableOpacity } from "react-native";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Settings</Text>
      
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Enable Notifications</Text>
        <Switch value={false} />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Dark Mode</Text>
        <Switch value={false} />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Language</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>English</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Privacy Policy</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Terms and Conditions</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View</Text>
        </TouchableOpacity>
      </View>

      <Button title="Reset Settings" color="#FF0000" onPress={() => alert("Settings reset!")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ffcabf",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF0000",
    marginBottom: 20,
    textAlign: "center",
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  settingText: {
    fontSize: 18,
    color: "#333",
  },
  button: {
    backgroundColor: "#FF6347",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
