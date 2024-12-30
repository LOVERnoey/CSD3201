import React from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";

const App = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Basic ScrollView Example */}
            <Text style={styles.title}>Basic ScrollView Example</Text>
            <Text style={styles.subtitle}>Programmer Name: Woraphon Udom</Text>
            {[...Array(20)].map((_, index) => (
                <Text key={index} style={styles.textItem}>
                    Item {index + 1}
                </Text>
            ))}

            {/* Horizontal ScrollView Example */}
            <Text style={styles.title}>Horizontal ScrollView Example</Text>
            <ScrollView horizontal contentContainerStyle={styles.horizontalContent}>
                {[...Array(10)].map((_, index) => (
                    <Text key={index} style={styles.horizontalItem}>
                        Item {index + 1}
                    </Text>
                ))}
            </ScrollView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1, 
        justifyContent: "center", 
        alignItems: "center", 
        paddingVertical: 20,
        paddingHorizontal: 10,
        paddingTop: 50, 
        backgroundColor: "#e0f7fa",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#388e3c",
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 20,
        color: "#555",
    },
    textItem: {
        fontSize: 16,
        marginVertical: 5,
        color: "#388e3c",
    },
    horizontalContent: {
        flexDirection: "row",
        marginTop: 10,
    },
    horizontalItem: {
        fontSize: 16,
        marginHorizontal: 10,
        padding: 10,
        backgroundColor: "#a5d6a7",
        borderRadius: 5,
    },
});

export default App;
