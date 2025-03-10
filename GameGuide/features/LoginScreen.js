import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/LoginScreenStyles'; // นำเข้า Styles

const API_URL = "http://192.168.1.33/game_guide/api/auth/login.php"; // เปลี่ยนเป็น URL จริงของคุณ

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // ตรวจสอบว่าผู้ใช้ล็อกอินอยู่หรือไม่
    useEffect(() => {
        const checkLoginStatus = async () => {
            const user = await AsyncStorage.getItem("user");
            if (user) {
                navigation.replace("Dashboard"); // ถ้าล็อกอินอยู่แล้วให้ไป Dashboard
            }
        };
        checkLoginStatus();
    }, []);

    // ฟังก์ชันเข้าสู่ระบบ
    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert("เกิดข้อผิดพลาด", "กรุณากรอกอีเมลและรหัสผ่าน");
            return;
        }
    
        try {
            const response = await axios.post(API_URL, { email, password });
            console.log(response.data);
    
            if (response.data.status === "success") {
                await AsyncStorage.setItem("user", JSON.stringify(response.data.user));
                Alert.alert("เข้าสู่ระบบสำเร็จ", "ยินดีต้อนรับ " + response.data.user.username);
                
                //เมื่อ Login ผ่านนำทางไปหน้า Dashboard"
                navigation.replace("Dashboard");
            } else {
                Alert.alert("เกิดข้อผิดพลาด", response.data.message);
            }
        } catch (error) {
            console.error("Login Error:", error);
            Alert.alert("เกิดข้อผิดพลาด", "ไม่สามารถเข้าสู่ระบบได้");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>🔑 เข้าสู่ระบบ</Text>

            <TextInput
                style={styles.input}
                placeholder="อีเมล"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="รหัสผ่าน"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <Button title="เข้าสู่ระบบ" onPress={handleLogin} />

            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.linkText}>✍️ ยังไม่มีบัญชี? สมัครสมาชิก</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;
