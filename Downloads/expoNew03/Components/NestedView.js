import React from "react";
import { View, Text, StyleSheet } from "react-native";
const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nested View Example</Text>
            <Text style={styles.subtitle}>Programmer Name: Woraphon Udom</Text>
            <View style={styles.parent}>
                <View style={styles.child}>
                    <Text>Child 1</Text>
                </View>
                <View style={styles.child}>
                    <Text>Child 2</Text>
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
        backgroundColor: "#d3f9d8",
    },
    parent: {
        width: 200,
        height: 200,
        backgroundColor: "#ffb6c1",
        justifyContent: "space-between",
        alignItems: "center",
    },
    child: {
        width: 80,
        height: 80,
        backgroundColor: "#add8e6",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#006400", 
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: "#555",
        marginBottom: 20,
    },
});
export default App;