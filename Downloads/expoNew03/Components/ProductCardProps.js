import React from "react";
import { View, Text, StyleSheet } from "react-native";
const ProductCardProps = (props) => {
  return (
    <View style={styles.card}>
      <Text>Product Name: {props.name}</Text>
      <Text>Price: ${props.price}</Text>
    </View>
  );
};
const App = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Function Component Example</Text>
        <Text style={styles.subtitle}>Programmer Name: Woraphon Udom</Text>
      <ProductCardProps name="T-shirt" price={25} />
      <ProductCardProps name="Shoes" price={60} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#b9ff91", 
  },
  card: {
    padding: 10, 
    borderWidth: 1,
    borderColor: "#000000", 
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