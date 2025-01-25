import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const statData = [
  { title: 'Total Workouts', value: '12' },
  { title: 'Calories Burned', value: '3,200 kcal' },
  { title: 'Exercise Time', value: '5 hrs 30 mins' },
];

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      {statData.map((stat, index) => (
        <View key={index} style={styles.statCard}>
          <Text style={styles.statTitle}>{stat.title}</Text>
          <Text style={styles.statValue}>{stat.value}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E8F4FF', padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  statCard: {
    width: '90%', backgroundColor: '#fff', padding: 16, borderRadius: 8, marginBottom: 16,
    shadowColor: '#000', shadowOpacity: 0.1, shadowOffset: { width: 0, height: 2 }, shadowRadius: 4, elevation: 3, alignItems: 'center',
  },
  statTitle: { fontSize: 18, fontWeight: 'bold', color: '#555', marginBottom: 8 },
  statValue: { fontSize: 20, fontWeight: 'bold', color: '#FF0000' },
});
