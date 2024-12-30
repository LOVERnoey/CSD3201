import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const App = () => {
  const products = [
    { id: 1, name: "Mouse rsair Harpoon RGB", price: 55.17, image: require("../assets/Mouse.png") },
    { id: 2, name: "Keyborad Air75V.1", price: 128.14, image: require("../assets/Keyborad.png") },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Product List App</Text>
      <Text style={styles.subtitle}>Programmer Name: Woraphon Udom</Text>
      {products.map(({ id, name, price, image }) => (
        <View key={id} style={styles.productContainer}>
          <Image source={image} style={styles.image} />
          <Text style={styles.productName}>Product Name: {name}</Text>
          <Text style={styles.productPrice}>Price: ${price}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: "center", backgroundColor: "#E8F4FF", marginTop: 30 },
  title: { fontSize: 24, fontWeight: "bold", color: "#333", marginBottom: 10 },
  subtitle: { fontSize: 16, color: "#555", marginBottom: 20 },
  productContainer: { backgroundColor: "#E8F4FF", padding: 15, borderRadius: 10, alignItems: "center", marginBottom: 20, width: "90%" },
  image: { width: 150, height: 150, resizeMode: "contain", marginBottom: 10 },
  productName: { fontSize: 18, fontWeight: "bold", color: "#333", marginBottom: 5 },
  productPrice: { fontSize: 16, color: "green" },
});

export default App;
