import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const BMICalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmiResult, setBmiResult] = useState('');

    const calculateBMI = () => {
        const weightNum = parseFloat(weight);
        const heightNum = parseFloat(height);

        if (!weightNum || !heightNum) {
            setBmiResult('Enter valid values');
            return;
        }

        const bmi = weightNum / (heightNum * heightNum);
        let category;

        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi < 24.9) {
            category = 'Normal Weight';
        } else if (bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obesity';
        }

        setBmiResult(`BMI: ${bmi.toFixed(2)} (${category})`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>BMI Calculator</Text>
            <Text style={styles.subtitle}>Programmer Name: Woraphon Udom</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter weight (kg)"
                keyboardType="numeric"
                value={weight}
                onChangeText={setWeight}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter hight (m)"
                keyboardType="numeric"
                value={height}
                onChangeText={setHeight}
            />
            <Button title="Calculate" onPress={calculateBMI} />
            <Text style={styles.result}>{bmiResult}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#98ff8a' },
    title: { fontSize: 20, fontWeight: "bold", position: "absolute", top: 50,color: "#ff0000" },
    subtitle: { fontSize: 16, position: "absolute", top: 80, color: "#ff6161", },
    input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, width: '80%', borderRadius: 5 },
    result: { fontSize: 18, marginTop: 20 },
});

export default BMICalculator;
