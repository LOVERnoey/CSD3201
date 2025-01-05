import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WeatherDisplayApp = () => {
    const cities = [
        { name: 'Bangkok', temperature: 30 },
        { name: 'Chiang Mai', temperature: 25 },
        { name: 'Phuket', temperature: 28 },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Weather Display App (แสดงสภาพอากาศ)</Text>
            <Text style={styles.subtitle}>Programmer Name: Woraphon Udom</Text>
            {cities.map((city, index) => (
                <View key={index} style={styles.cityBox}>
                    <Text style={styles.cityName}>{city.name}</Text>
                    <Text style={styles.temperature}>{city.temperature}°C</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#98ff8a' },
    title: { fontSize: 20, fontWeight: "bold", position: "absolute", top: 50,color: "#ff0000" },
    subtitle: { fontSize: 16, position: "absolute", top: 80, color: "#ff6161", },
    cityBox: { width: '80%', padding: 15, marginVertical: 10, borderRadius: 10, backgroundColor: '#ff1f1f', alignItems: 'center', },
    cityName: { fontSize: 20, fontWeight: 'bold', marginBottom: 5, color: "#ffffff" },
    temperature: { fontSize: 18, color: '#00796b', color: "#ffffff" },
});

export default WeatherDisplayApp;
