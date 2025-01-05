import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ToggleLightApp = () => {
    const [isLightOn, setIsLightOn] = useState(false);

    const toggleLight = () => {
        setIsLightOn(!isLightOn);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Toggle Light App</Text>
            <Text style={styles.subtitle}>Programmer Name: Woraphon Udom</Text>
            <Text style={styles.status}>The Light is : {isLightOn ? 'ON' : 'OFF'}</Text>
            <Button title="Toggle Light" onPress={toggleLight} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#98ff8a"},
    text: { fontSize: 20, marginBottom: 10 },    
    title: { fontSize: 20, fontWeight: "bold", position: "absolute", top: 50, color: "#ff0000" },
    subtitle: { fontSize: 16, position: "absolute", top: 80, color: "#ff6161",},
    status:{ fontSize: 30, padding: 10 }
});

export default ToggleLightApp;
