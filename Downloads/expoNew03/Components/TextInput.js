import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, ScrollView } from "react-native";

const App = () => {
    const [basicText, setBasicText] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Basic TextInput Example */}
            <Text style={styles.title}>TextInput Example</Text>
            <Text style={styles.subtitle}>Programmer Name: Woraphon Udom</Text>
            <TextInput
                style={styles.input}
                placeholder="Type here..."
                value={basicText}
                onChangeText={setBasicText}
            />
            <Text style={styles.output}>You typed: {basicText}</Text>

            {/* Password TextInput Example */}
            <Text style={styles.title}>Password TextInput Example</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your password"
                secureTextEntry={true}
                onChangeText={setPassword}
            />
            <Text style={styles.output}>Password length: {password.length}</Text>

            {/* Email TextInput Example */}
            <Text style={styles.title}>Email TextInput Example</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your email"
                keyboardType="email-address"
                onChangeText={setEmail}
            />
            <Text style={styles.output}>Email: {email}</Text>

            {/* Multiline TextInput Example */}
            <Text style={styles.title}>Multiline TextInput Example</Text>
            <TextInput
                style={[styles.input, { height: 100 }]}
                placeholder="Type your message here..."
                multiline={true}
                numberOfLines={4}
                onChangeText={setMessage}
            />
            <Text style={styles.output}>Message: {message}</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: "center",
        backgroundColor: "#e0f7fa", // เพิ่มสีพื้นหลัง
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#388e3c", // เพิ่มสีข้อความ
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 20,
        color: "#555",
    },
    input: {
        width: "80%",
        height: 40,
        borderColor: "#388e3c", // เปลี่ยนสีขอบเป็นเขียว
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 20,
        borderRadius: 5,
        backgroundColor: "#ffffff", // เพิ่มพื้นหลังให้ช่องกรอกข้อความ
    },
    output: {
        fontSize: 16,
        marginTop: 10,
        color: "#388e3c", // เพิ่มสีข้อความ
    },
});

export default App;
