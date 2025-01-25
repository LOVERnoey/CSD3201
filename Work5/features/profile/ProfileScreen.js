import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/profilePic.jpg')} style={styles.profileImage} />
      <Text style={styles.title}>User Profile</Text>
      <Text style={styles.subtitle}>Name: Woraphon Udom</Text>
      <Text style={styles.subtitle}>Date of Birth: March 3, 2003</Text>
      <Text style={styles.subtitle}>Email: s65122250018@ssru.ac.th</Text>
      <Text style={styles.subtitle}>University: Suan Sunandha Rajabhat </Text>
      <Text style={styles.subtitle}>Address: Bangkok, Thailand</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffcabf',
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#333',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 8,
  },
});
