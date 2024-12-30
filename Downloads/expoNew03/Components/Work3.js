import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

const App = () => {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");
  const handleSubmit = () => {
    if (name.trim()) {
      setGreeting(`You typed: ${name}`);
    } else {
      Alert.alert("Please enter your typed");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Input Display</Text>
      <Text style={styles.subtitle}>Programmer Name: Woraphon Udom</Text>
      <TextInput
        style={styles.input}
        placeholder="Your typed here..."
        value={name}
        onChangeText={setName}
      />
      
      <Button title="Show Text" onPress={handleSubmit} />

      {greeting ? <Text style={styles.greeting}>{greeting}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#b9ff91",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00651f",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
    color: "#555",
  },
  input: {
    top: 10,
    width: "80%",
    height: 40,
    borderColor: "#00651f",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#ffffff",
  },
  greeting: {
    marginTop: 20,
    fontSize: 18,
    color: "#00651f",
    fontWeight: "bold",
  },
});

export default App;
