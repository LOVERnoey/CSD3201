import React from "react";
import { View, Text, StyleSheet } from "react-native"; const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Basic Text Example</Text>
            <Text style={styles.subtitle}>Programmer Name: Woraphon Udom</Text>
            <Text style={styles.basicText}>Hello everyone, this is a basic text example!</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00651f",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 20,
    },
    basicText: {
        fontSize: 16,
    },
});
export default App;
