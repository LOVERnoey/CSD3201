import React from "react";
import { View, Text, StyleSheet } from "react-native";
const ProductCard = ({ name, price }) => {
  return (
    <View style={styles.card}>
      <Text>Product Name: {name}</Text>
      <Text>Price: ${price}</Text>
    </View>
  );
};
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Function Companent Example</Text>
      <Text style={styles.subtitle}>Programmer Name: Woraphon Udom</Text>
      <ProductCard name="T-shirt" price={25} />
      <ProductCard name="Shoes" price={60} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c3fffc",
  },
  card: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#00000",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00651f",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: "#555",
  },
});
export default App;
