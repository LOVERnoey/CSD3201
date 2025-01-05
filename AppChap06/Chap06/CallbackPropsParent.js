import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

// คอมโพเนนต์ลูก รับฟังก์ชัน onIncrease และ onDecrease ผ่าน Props
const CounterControls = ({ onIncrease, onDecrease }) => {
  return (
    <View>
      <Button title="Increase" onPress={onIncrease} />
      <Button title="Decrease" onPress={onDecrease} />
    </View>
  );
};

// คอมโพเนนต์แม่
const CallbackPropsParent = () => {
  const [count, setCount] = useState(0); // State ของคอมโพเนนต์แม่

  return (
    <View style={styles.container}>
      <Text style={styles.title}>การส่ง Callback Function ผ่าน Props เพื่ออัปเดต State</Text>
      <Text style={styles.subtitle}>Programmer Name: Woraphon Udom</Text>
      <Text style={styles.text}>Count: {count}</Text>
      {/* ส่งฟังก์ชัน setCount ผ่าน Props ไปยัง CounterControls */}
      <CounterControls
        onIncrease={() => setCount(count + 1)}
        onDecrease={() => setCount(count - 1)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#98ff8a"},
  text: { fontSize: 20, marginBottom: 10 },    
  title: { fontSize: 16, fontWeight: "bold", position: "absolute", top: 50, color: "#ff0000" },
  subtitle: { fontSize: 16, position: "absolute", top: 80, color: "#ff6161",},
});

export default CallbackPropsParent;
