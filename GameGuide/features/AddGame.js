import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";

const API_URL = "http://192.168.1.33/game_guide/api/game/add_game.php"; // แก้เป็น URL จริง

const AddGame = ({ navigation }) => {
    const [gameName, setGameName] = useState("");
    const [gameDescFont, setGameDescFont] = useState("");
    const [gameDesc1, setGameDesc1] = useState("");
    const [gameDesc2, setGameDesc2] = useState("");
    const [gameProfilePic, setGameProfilePic] = useState("");
    const [gamePic1, setGamePic1] = useState("");
    const [gamePic2, setGamePic2] = useState("");
    const [platform, setPlatform] = useState("PC"); // ค่าพื้นฐานเป็น PC

    const handleAddGame = async () => {
        if (!gameName) {
            Alert.alert("ข้อผิดพลาด", "กรุณากรอกชื่อเกม");
            return;
        }

        try {
            const response = await axios.post(API_URL, {
                game_name: gameName,
                game_description_font: gameDescFont,
                game_description_details_1: gameDesc1,
                game_description_details_2: gameDesc2,
                game_profile_pic: gameProfilePic,
                game_pic_details_1: gamePic1,
                game_pic_details_2: gamePic2,
                platform: platform,
            });

            if (response.data.status === "success") {
                Alert.alert("สำเร็จ", "เพิ่มเกมเรียบร้อยแล้ว");
                navigation.goBack();
            } else {
                Alert.alert("ข้อผิดพลาด", response.data.message);
            }
        } catch (error) {
            console.error("Error:", error);
            Alert.alert("ข้อผิดพลาด", "เกิดข้อผิดพลาดในการเชื่อมต่อเซิร์ฟเวอร์");
        }
    };
    
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>เพิ่มเกมใหม่</Text>
                <TextInput style={styles.input} placeholder="ชื่อเกม" value={gameName} onChangeText={setGameName} />
                <TextInput style={styles.input} placeholder="คำอธิบาย (Font)" value={gameDescFont} onChangeText={setGameDescFont} />
                <TextInput style={styles.input} placeholder="รายละเอียด 1" value={gameDesc1} onChangeText={setGameDesc1} />
                <TextInput style={styles.input} placeholder="รายละเอียด 2" value={gameDesc2} onChangeText={setGameDesc2} />
                <TextInput style={styles.input} placeholder="URL รูปโปรไฟล์" value={gameProfilePic} onChangeText={setGameProfilePic} />
                <TextInput style={styles.input} placeholder="URL รูปเพิ่มเติม 1" value={gamePic1} onChangeText={setGamePic1} />
                <TextInput style={styles.input} placeholder="URL รูปเพิ่มเติม 2" value={gamePic2} onChangeText={setGamePic2} />

                {/* Dropdown เลือก Platform */}
                <Text style={styles.label}>แพลตฟอร์ม</Text>
                <Picker selectedValue={platform} onValueChange={(itemValue) => setPlatform(itemValue)} style={styles.picker}>
                    <Picker.Item label="PC" value="PC" />
                    <Picker.Item label="Mobile" value="Mobile" />
                    <Picker.Item label="Console" value="Console" />
                </Picker>

                <Button title="เพิ่มเกม" onPress={handleAddGame} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: "#fff" },
    title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
    input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 10, borderRadius: 5 },
    label: { fontSize: 18, marginTop: 10 },
    picker: { height: 50, width: "100%", borderWidth: 1, borderColor: "#ccc" },
});

export default AddGame;