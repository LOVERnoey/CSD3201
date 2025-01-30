import React from "react";
import styles from "../../style";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
export default function pc() {
  return (
    <ImageBackground source={require('../../assets/background.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Hello World!!!</Text>
      </View>
    </ImageBackground>
  );
}
