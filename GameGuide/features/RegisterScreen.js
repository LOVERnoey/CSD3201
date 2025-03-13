import React, { useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity } from 'react-native';
import axios from 'axios';
import styles from '../styles/RegisterScreenStyles';

const API_URL = "http://192.168.1.33/game_guide/api/auth/register.php"; // เปลี่ยน URL ตามจริง

const RegisterScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        if (!username || !email || !password) {
            Alert.alert("Error", "Please fill in all fields");
            return;
        }

        try {
            const response = await axios.post(API_URL, { username, email, password });
            console.log(response.data);

            if (response.data.status === "success") {
                Alert.alert("Registration Successful", "You can now login");
                navigation.navigate('Login');
            } else {
                Alert.alert("Error", response.data.message);
            }
        } catch (error) {
            console.error("Registration Error:", error);
            Alert.alert("Error", "Unable to register. Please try again.");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>SignUp</Text>
            <Text style={styles.subtitle}>Enter Username and Email to send one time Password</Text>

            <TextInput
                style={styles.input}
                placeholder="User Name"
                value={username}
                onChangeText={setUsername}
                placeholderTextColor="#999"
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                placeholderTextColor="#999"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholderTextColor="#999"
            />

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.linkText}>Already have an account? Login</Text>
            </TouchableOpacity>
        </View>
    );
};

export default RegisterScreen;
