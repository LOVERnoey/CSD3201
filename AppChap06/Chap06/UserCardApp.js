import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// คอมโพเนนต์สำหรับแสดงข้อมูลผู้ใช้ โดยรับ Props user ที่เป็น Object
const UserCard = ({ user }) => {
    return (
        <View>
            {/* แสดงชื่อและอายุที่ส่งมาผ่าน Props user */}
            <Text style={styles.text}>Name: {user.name}</Text>
            <Text style={styles.text}>Age: {user.age}</Text>
        </View>
    );
};

// คอมโพเนนต์หลักที่ส่ง Object user ไปยัง UserCard
const UserCardApp = () => {
    const userInfo = { name: 'Woraphon', age: 21 }; // Object ที่เก็บข้อมูลผู้ใช้

    return (
        <View style={styles.container}>            
            <Text style={styles.title}>แบบหลายค่า (Object Props)</Text>
            <Text style={styles.subtitle}>Programmer Name: Woraphon Udom</Text>
            {/* ส่ง Object userInfo ให้ UserCard */}
            <UserCard user={userInfo} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#98ff8a"},
    text: { fontSize: 18, },    
    title: { fontSize: 20, fontWeight: "bold", position: "absolute", top: 50,color: "#ff0000" },
    subtitle: { fontSize: 16, position: "absolute", top: 80, color: "#ff6161", },
});

export default UserCardApp;
