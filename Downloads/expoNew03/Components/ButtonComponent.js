import React from "react";
import { View, Text, Button, StyleSheet, Alert, Pressable, ScrollView } from "react-native";

const App = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Basic Button Example */}
            <Text style={styles.title}>Basic Button Example</Text>
            <Text style={styles.subtitle}>Programmer Name: Woraphon Udom</Text>
            <Button
                title="Press Me"
                onPress={() => Alert.alert("Button Pressed", "You clicked the button!")}
            />
            
            {/* Colored Button Example */}
            <Text style={styles.title}>Colored Button Example</Text>
            <Button
                title="Green Button"
                color="#28a745" 
                onPress={() => Alert.alert("Button Pressed", "You clicked the green button!")}
            />
            
            {/* Custom Button Example */}
            <Text style={styles.title}>Custom Button Example</Text>
            <Pressable
                style={({ pressed }) => [
                    styles.customButton,
                    { backgroundColor: pressed ? "#0056b3" : "#007BFF" },
                ]}
                onPress={() => Alert.alert("Button Pressed", "Custom button clicked!")}
            >
                <Text style={styles.buttonText}>Custom Button</Text>
            </Pressable>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "#e6f7ff", 
        padding: 20,
    },
    title: {
        fontSize: 22, 
        fontWeight: "bold",
        marginBottom: 10,
        color: "#003366",
    },
    subtitle: {
        fontSize: 18, 
        marginBottom: 20,
        color: "#333",
    },
    customButton: {
        paddingVertical: 15,
        paddingHorizontal: 50, 
        borderRadius: 10, 
        alignItems: "center",
        marginVertical: 10,
        borderWidth: 1,
        borderColor: "#0056b3",
        shadowColor: "#000", 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, 
    },
    buttonText: {
        color: "white",
        fontSize: 18, 
        fontWeight: "bold",
    },
});

export default App;
