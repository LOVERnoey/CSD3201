import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// คอมโพเนนต์ลูกสำหรับฟอร์ม
const InputForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState(''); // State ภายในฟอร์ม

  return (
    <View>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={setInputValue}
        placeholder="Enter your name"
      />
      {/* เรียกฟังก์ชัน onSubmit เมื่อกดปุ่ม */}
      <Button title="Submit" onPress={() => onSubmit(inputValue)} />
    </View>
  );
};

// คอมโพเนนต์แม่
const FormParent = () => {
  const [submittedValue, setSubmittedValue] = useState(''); // State ของคอมโพเนนต์แม่

  return (
    <View style={styles.container}>      
      <Text style={styles.title}>การสร้างฟอร์มที่ส่งข้อมูลกลับไปยังคอมโพเนนต์แม่</Text>
      <Text style={styles.subtitle}>Programmer Name: Woraphon Udom</Text>
      <Text style={styles.text}>Submitted Value: {submittedValue}</Text>
      {/* ส่งฟังก์ชัน setSubmittedValue ไปยัง InputForm */}
      <InputForm onSubmit={(value) => setSubmittedValue(value)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#98ff8a"},
  text: { fontSize: 20, marginBottom: 10 },    
  input: { borderWidth: 1, borderColor: '#ff0000', padding: 10, width: '80%',
    marginBottom: 10, borderRadius: 5, color: "#ff6161"},
  title: { fontSize: 16, fontWeight: "bold", position: "absolute", top: 50, color: "#ff0000" },
  subtitle: { fontSize: 16, position: "absolute", top: 80, color: "#ff6161",},
});

export default FormParent;
