import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

const App = () => {
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.title}>Scrollable View Example</Text>
            <Text style={styles.subtitle}>Programmer Name: Woraphon Udom</Text>
            <View style={styles.box}>
                <Text>Item 1</Text>
            </View>
            <View style={styles.box}>
                <Text>Item 2</Text>
            </View>
            <View style={styles.box}>
                <Text>Item 3</Text>
            </View>
            <View style={styles.box}>
                <Text>Item 4</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        paddingVertical: 100,
        alignItems: "center",
        backgroundColor: "#f0f8ff",
    },
    box: {
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#32CD32",
        marginVertical: 10,
        width: "90%",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
        color: "#006400",
    },
    subtitle: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 20,
        color: "#555",
    },
});

export default App;
