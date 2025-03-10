import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/LoginScreenStyles';

const API_URL = "http://192.168.1.33/game_guide/api/auth/login.php";

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // ตรวจสอบสถานะการล็อกอิน
    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const user = await AsyncStorage.getItem("user");
                if (user) {
                    const parsedUser = JSON.parse(user);
                    const initialRoute = parsedUser.role === "Admin" ? "Dashboard" : "Main";
                    navigation.replace(initialRoute); // ถ้าล็อกอินอยู่แล้วให้ไปหน้าหลัก
                }
            } catch (error) {
                console.error("เกิดข้อผิดพลาดในการตรวจสอบสถานะล็อกอิน:", error);
            }
        };
        checkLoginStatus();
    }, []);

    // ฟังก์ชันเข้าสู่ระบบ
    const handleLogin = async () => {
        if (!email.trim() || !password.trim()) {
            Alert.alert("⚠️ ข้อผิดพลาด", "กรุณากรอกอีเมลและรหัสผ่าน");
            return;
        }

        try {
            const response = await axios.post(API_URL, { email, password });

            if (response.data.status === "success") {
                await AsyncStorage.setItem("user", JSON.stringify(response.data.user));
                console.log("User in Login: ", response.data.user);

                Alert.alert("✅ เข้าสู่ระบบสำเร็จ", `ยินดีต้อนรับ ${response.data.user.username}`);
                
                const initialRoute = response.data.user.role === "Admin" ? "Dashboard" : "Main";
                navigation.replace(initialRoute); // นำทางไปหน้าหลัก
            } else {
                Alert.alert("❌ ข้อผิดพลาด", response.data.message || "เข้าสู่ระบบไม่สำเร็จ");
            }
        } catch (error) {
            console.error("เกิดข้อผิดพลาดในการเข้าสู่ระบบ:", error);
            Alert.alert("❌ ข้อผิดพลาด", "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>🔑 เข้าสู่ระบบ</Text>

            <TextInput
                style={styles.input}
                placeholder="📧 อีเมล"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="🔒 รหัสผ่าน"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <Button title="🚀 เข้าสู่ระบบ" onPress={handleLogin} />

            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={styles.linkText}>✍️ ยังไม่มีบัญชี? สมัครสมาชิก</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;