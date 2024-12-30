import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
class SimpleMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "ยินดีต้อนรับเข้าสู่แอปของเรา!", 
    };
  }
  handlePress = () => {
    this.setState({ message: "ขอบคุณที่เข้าแอปของเรานะพวก!" });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Class Component Example</Text>
        <Text style={styles.subtitle}>Programmer Name: Woraphon Udom</Text>
        <Text style={styles.text}>{this.state.message}</Text>
        <Button title="เปลี่ยนข้อความนี้" onPress={this.handlePress} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#ffc3c3",
  },
  text: {
    fontSize: 18, 
    marginBottom: 20, 
    color: "#333", 
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00651f",
    marginBottom: 10,
    },
    subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: "#555",
    },
});
export default SimpleMessage;
