import React from 'react';
import styles from "../../style";
import { View, Text, ImageBackground, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function HomeScreen({ navigation }) {
  const handleLogout = async () => {
    await AsyncStorage.clear();
    Alert.alert("Success", "Logged out successfully");

    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  return (
    <ImageBackground source={require('../../assets/background.jpg')} style={styles.background}>
      <ScrollView style={{ marginHorizontal: 1 }}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
        <View style={styles.container}>
          <Text style={styles.title}>แอปพลิเคชันแนะนำเกมน่าเล่น</Text>
          <Text style={styles.title}>GameGuide</Text>
          <View style={styles.box}>
            <View>
              <Text style={styles.text}>
                {"\t\t"}แอปพลิเคชัน GameGuide ถูกพัฒนาขึ้นเพื่อช่วยให้ผู้เล่นเกมสามารถค้นห[...]
                หรือเกมที่น่าจับตามองในปี 2025 แอปนี้จะช่วยประหยัดเวลา
                ในการค้นหาข้อมูลเกมพร้อมให้รายละเอียดเชิงลึกเกี่ยวกับ
                แต่ละเกมการแนะนำเกมจะทำให้ผู้เล่นสามารถตัดสินใจเลือกเกม
                ที่ตรงกับความสนใจและความชอบได้ง่ายขึ้น
              </Text>
            </View>
          </View>
          <Text style={styles.head}>ตัวอย่างเกมของแต่ละแพตฟอร์ม</Text>
          {/* PC Example */}
          <View style={styles.rowContainer}>
          <Text style={styles.redText}>PC</Text>
            <Text style={styles.gameText}>Game </Text>
          </View>
          <View style={{ paddingLeft: 8 }}>
            <Image style={styles.Image} source={require('../../assets/final1.png')}></Image>
          </View>
          <Text style={styles.gameNameHome}>Final Fantasy VII Rebirth</Text>
          {/* Mobile Example */}
          <View style={styles.rowContainer}>
          <Text style={styles.redText}>Mobile</Text>
            <Text style={styles.gameText}>Game </Text>
          </View>
          <View style={{ paddingLeft: 8 }}>
            <Image style={styles.Image} source={require('../../assets/4GROUND9.jpg')}></Image>
          </View>
          <Text style={styles.gameNameHome}>4GROUND9</Text>
          {/* Console Example */}
          <View style={styles.rowContainer}>
            <Text style={styles.redText}>Console</Text>
            <Text style={styles.gameText}>Game </Text>
          </View>
          <View style={{ paddingLeft: 8 }}>
            <Image style={styles.Image} source={require('../../assets/astro.webp')}></Image>
          </View>
          <Text style={styles.gameNameHome}>Astro Bot</Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}