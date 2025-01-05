import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// ใช้ Default Parameters ในฟังก์ชันแทน defaultProps
const Greeting = ({ name = 'Visitor' }) => {
    return <Text style={styles.text}>Hello, {name}!</Text>;
};

const DefaultPropsApp = () => {
    return (
        <View style={styles.container}>            
            <Text style={styles.title}>แบบค่าเริ่มต้น (Default Props)</Text>
            <Text style={styles.subtitle}>Programmer Name: Woraphon Udom</Text>
            {/* ส่งค่า name เป็น 'Nonglak' */}
            <Greeting name="NongGolf" />
            {/* ไม่ส่งค่า name จะใช้ค่า default 'Visitor' */}
            <Greeting />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#98ff8a"},
    text: { fontSize: 20, marginBottom: 10 },    
    title: { fontSize: 20, fontWeight: "bold", position: "absolute", top: 50, color: "#ff0000" },
    subtitle: { fontSize: 16, position: "absolute", top: 80, color: "#ff6161",},
});
export default DefaultPropsApp;