import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/LoginScreenStyles';

const API_URL = "http://192.168.1.33/game_guide/api/auth/login.php";

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const user = await AsyncStorage.getItem("user");
                if (user) {
                    const parsedUser = JSON.parse(user);
                    const initialRoute = parsedUser.role === "Admin" ? "Dashboard" : "Main";
                    navigation.replace(initialRoute);
                }
            } catch (error) {
                console.error("Error checking login status:", error);
            }
        };
        checkLoginStatus();
    }, []);

    const handleLogin = async () => {
        if (!email.trim() || !password.trim()) {
            Alert.alert("Error", "Please enter both email and password");
            return;
        }

        try {
            const response = await axios.post(API_URL, { email, password });

            if (response.data.status === "success") {
                await AsyncStorage.setItem("user", JSON.stringify(response.data.user));
                console.log("User in Login: ", response.data.user);

                Alert.alert("Login Successful", `Welcome ${response.data.user.username}`);
                
                const initialRoute = response.data.user.role === "Admin" ? "Dashboard" : "Main";
                navigation.replace(initialRoute);
            } else {
                Alert.alert("Error", response.data.message || "Login failed");
            }
        } catch (error) {
            console.error("Login error:", error);
            Alert.alert("Error", "Unable to connect to the server");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.subtitle}>Enter Email to send one time Password</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    placeholderTextColor="#999"
                />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    placeholderTextColor="#999"
                />
                <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                    <Text style={styles.signUpLink}>SignUp ?</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;
