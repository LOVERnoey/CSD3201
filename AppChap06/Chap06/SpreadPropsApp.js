import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// คอมโพเนนต์แสดงข้อมูลผู้ใช้ โดยรับ Props name และ age
const UserCard = ({ name, age }) => {
    return (
        <View>
            <Text style={styles.text}>Name: {name}</Text>
            <Text style={styles.text}>Age: {age}</Text>
        </View>
    );
};

// คอมโพเนนต์หลักที่ใช้ Spread Operator เพื่อส่ง Props หลายค่า
const SpreadPropsApp = () => {
    const userInfo = { name: 'Woraphon', age: 21 }; // Object ที่เก็บข้อมูลผู้ใช้

    return (
        <View style={styles.container}>            
            <Text style={styles.title}>แบบกระจายค่า (Spread Props)</Text>
            <Text style={styles.subtitle}>Programmer Name: Woraphon Udom</Text>
            {/* ใช้ Spread Operator ส่ง Props */}
            <UserCard {...userInfo} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#98ff8a"},
    text: { fontSize: 20, marginBottom: 10 },    
    title: { fontSize: 20, fontWeight: "bold", position: "absolute", top: 50, color: "#ff0000" },
    subtitle: { fontSize: 16, position: "absolute", top: 80, color: "#ff6161",},
});

export default SpreadPropsApp;
