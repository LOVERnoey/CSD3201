import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Hotels() {
  const hotels = ["Paradise Inn", "Sunset Resort", "Ocean View"];
  return (
    <View style={styles.container}>
      {hotels.map((hotel, index) => (
        <View key={index}>
          <Text style={styles.title}>Hotel: {hotel}</Text>
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
  title: { fontSize: 22, fontWeight: "bold", color: "#FF0000", marginVertical: 10 },
  button: { backgroundColor: "#FF5733", paddingVertical: 10, paddingHorizontal: 20, borderRadius: 8, marginBottom: 20, alignItems: "center" },
  buttonText: { fontSize: 16, fontWeight: "bold", color: "#FFFFFF" },
});
