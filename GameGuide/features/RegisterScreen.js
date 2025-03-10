import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import axios from 'axios';
import styles from '../styles/RegisterScreenStyles'; // นำเข้า Styles

const API_URL = "http://192.168.1.33/game_guide/api/auth/register.php"; // เปลี่ยนเป็น URL จริงของคุณ

const RegisterScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // ฟังก์ชันส่งข้อมูลไปยัง API เพื่อลงทะเบียน
    const handleRegister = async () => {
        if (!username || !email || !password) {
            Alert.alert("เกิดข้อผิดพลาด", "กรุณากรอกข้อมูลให้ครบถ้วน");
            return;
        }

        try {
            const response = await axios.post(API_URL, { username, email, password });
            console.log(response.data);

            if (response.data.status === "success") {
                Alert.alert("ลงทะเบียนสำเร็จ", "คุณสามารถเข้าสู่ระบบได้แล้ว");
                navigation.navigate('Login'); // นำทางไปหน้า Login
            } else {
                Alert.alert("เกิดข้อผิดพลาด", response.data.message);
            }
        } catch (error) {
            console.error("Registration Error:", error);
            Alert.alert("เกิดข้อผิดพลาด", "ไม่สามารถลงทะเบียนได้");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>📋 สมัครสมาชิก</Text>

            <TextInput
                style={styles.input}
                placeholder="ชื่อผู้ใช้"
                value={username}
                onChangeText={setUsername}
            />
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

            <Button title="✍️ ลงทะเบียน" onPress={handleRegister} />

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.linkText}>🔑 มีบัญชีแล้ว? เข้าสู่ระบบ</Text>
            </TouchableOpacity>
        </View>
    );
};

export default RegisterScreen;
