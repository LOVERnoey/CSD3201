import React from "react";
import { View, Text, StyleSheet } from "react-native";
const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Basic View Example</Text>
            <Text style={styles.subtitle}>Programmer Name: Woraphon Udom</Text>
            <Text>Welcome to React Native!</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ff0000",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 20,
        color: "#ffffff",
    },
});
export default App;