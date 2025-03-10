import React from 'react';
import { View, Text, Button } from 'react-native';
import { useLogout } from '../context/LogoutContext';
import styles from "../styles/HeaderStyles"; // Assuming you have some styles for the header

const Header = ({ title }) => {
  const logout = useLogout();

  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

export default Header;