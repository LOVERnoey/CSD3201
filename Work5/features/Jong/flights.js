import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const destinations = ["Bangkok", "Tokyo", "Paris"];

export default function Flights() {
  return (
    <View style={styles.container}>
      {destinations.map((destination, index) => (
        <View key={index} style={styles.item}>
          <Text style={styles.title}>{destination}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>จอง</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#ffcabf", padding: 16 },
  item: { alignItems: "center", marginBottom: 20 },
  title: { fontSize: 22, fontWeight: "bold", color: "#FF0000", marginVertical: 10 },
  button: { backgroundColor: "#FF5733", paddingVertical: 10, paddingHorizontal: 20, borderRadius: 8, alignItems: "center" },
  buttonText: { fontSize: 16, fontWeight: "bold", color: "#FFFFFF" },
});
