import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const workoutData = [
  { id: '1', name: 'Push-ups', description: 'Do 3 sets of 15 reps' },
  { id: '2', name: 'Squats', description: 'Do 3 sets of 20 reps' },
  { id: '3', name: 'Plank', description: 'Hold for 60 seconds' },
  { id: '4', name: 'Running', description: 'Run for 30 minutes' },
];

export default function WorkoutsScreen() {
  const renderWorkoutItem = ({ item }) => (
    <View style={styles.workoutItem}>
      <Text style={styles.workoutName}>{item.name}</Text>
      <Text style={styles.workoutDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workouts</Text>
      <FlatList
        data={workoutData}
        keyExtractor={(item) => item.id}
        renderItem={renderWorkoutItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#E8F4FF' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  workoutItem: {
    backgroundColor: '#fff', padding: 16, borderRadius: 8, marginBottom: 12,
    shadowColor: '#000', shadowOpacity: 0.1, shadowOffset: { width: 0, height: 2 }, shadowRadius: 4, elevation: 3,
  },
  workoutName: { fontSize: 18, fontWeight: 'bold', color: '#555' },
  workoutDescription: { fontSize: 16, color: '#777' },
});
