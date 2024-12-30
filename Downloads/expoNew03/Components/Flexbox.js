import React from "react";
import { View, Text, StyleSheet } from "react-native";

const App = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Flexbox Layout Example</Text>
                <Text style={styles.subtitle}>Programmer Name: Woraphon Udom</Text>
            </View>
            <View style={styles.boxContainer}>
                <View style={[styles.box, styles.boxGreen]}>
                    <Text style={styles.boxText}>Box 1</Text>
                </View>
                <View style={[styles.box, styles.boxRed]}>
                    <Text style={styles.boxText}>Box 2</Text>
                </View>
                <View style={[styles.box, styles.boxGreen]}>
                    <Text style={styles.boxText}>Box 3</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#ff9999", 
    },
    header: {
        alignItems: "center",
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#006400", 
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: "#8B0000", 
    },
    boxContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
    },
    box: {
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15, 
        backgroundColor: "#32CD32",
    },
});

export default App;
