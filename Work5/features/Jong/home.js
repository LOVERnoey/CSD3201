import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Travel App!</Text>
      <Text style={styles.subtitle}>แอพนี้ให้คุณจองโรงแรมและเที่ยวบินได้อย่างง่ายดายและสะดวก</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#ffcabf", padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', color: "#FF0000", marginBottom: 10 },
  subtitle: { fontSize: 18, color: "#333", textAlign: 'center', marginTop: 10 },
});
