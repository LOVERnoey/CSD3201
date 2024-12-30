import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

const App = () => {
  const [name, setName] = useState(""); 

  const handleSubmit = () => {
    if (name.trim()) {
      Alert.alert("Alert", `Welcome, ${name}!`, [{ text: "OK" }]);
    } else {
      Alert.alert("Alert", "Please enter your name.", [{ text: "OK" }]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome App</Text>
      <Text style={styles.subtitle}>Programmer Name: Woraphon Udom</Text>
      
      <Text style={styles.subtitle}>Enter your name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Your name"
        value={name}
        onChangeText={setName}
      />
      
      <Button title="SUBMIT" onPress={handleSubmit} color="#007BFF" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8F4FF",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
    color: "#555",
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
});

export default App;
