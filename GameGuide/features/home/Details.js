import React from "react";
import styles from "../../style";
import { View, Text, ImageBackground, Image, FlatList } from "react-native";

const games = [
    {
        id: '1',
        name: '4GROUND9',
        image: require('../../assets/4GROUND9.jpg'),
        description: "'4GROUND9' เป็นผลงานเกม RPG แนวสะสมตัวใหมจากผู้พัฒนาหลักของเกมดัง อย่าง 'Exos Heroes' เกมได้บอกเล่าเหตุการณ์ต่างๆ ที่เกิดขึ้นใน 'Beerhaven' เมืองในโลกอนาคตและนำเสนอโลกที่เปิดกว้าง พร้อมทั้งตัวละคร ที่มีเอกลักษณ์เฉพาะและการต่อสู้ที่ไม่เหมือนใคร",
    },
    {
        id: '2',
        name: 'Crazy Ones',
        image: require('../../assets/4GROUND9.jpg'),
        description: "Crazy Ones เกมมือถือแนว Dating Sim สไตล์อนิเมะสุดน่ารัก พาคุณเข้าสู่โลกของความรักสุดโรแมนติก กับเหล่าสาวสวยสุดคิ้วท์ 4 คน ที่พร้อมจะมาขโมยหัวใจคุณ ผสมผสานความสนุกของ Visual Novel เข้ากับเกม Dating Sim แบบ Interactive ได้อย่างลงตัว ทำให้คุณรู้สึกเหมือนได้เป็นพระเอกในอนิเมะเรื่องโปรด",
    },
    {
        id: '3',
        name: 'Ragnarok M : Classic',
        image: require('../../assets/4GROUND9.jpg'),
        description: "Ragnarok M: Classic เกมมือถือ MMORPG สุดคลาสสิก ที่แฟนๆ Ragnarok ต่างรอคอย เตรียมตัวกลับไปสัมผัสประสบการณ์การผจญภัยในโลก Ragnarok อีกครั้ง พร้อมกับระบบเกมเพลย์ที่ให้ความสำคัญกับการเล่นแบบ Fair Play อย่างแท้จริง",
    },
    {
        id: '4',
        name: 'DARK AND DARKER MOBILE',
        image: require('../../assets/4GROUND9.jpg'),
        description: "หลังจากการทดสอบ CBT ได้รับกระแสตอบรับอย่างล้นหลาม ล่าสุด Gravity Interactive, Inc. ก็ออกมาประกาศข่าวดีให้แฟน ๆ Ragnarok ได้ทราบโดยทั่วกันว่า Ragnarok M: Classic เกมมือถือ MMORPG จาก IP ชื่อดังอย่าง Ragnarok Online มีแผนจะเปิด OBT อย่างเป็นอย่างทางการในวันแห่งความรัก 14 กุมภาพันธ์นี้ ทั้งในระบบ iOS และ Android ผ่าน Apple App Store และ Google Play Store โดยตัวเกมจะรองรับภาษาไทยให้เราได้ใช้งานกันด้วย",
    },
    // Add more games as needed
];

export default function Details({ route, navigation }) {
    // Extract data passed via route params
    const {name} = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <Button
                title="Go to Home"
                onPress={() =>
                    navigation.reset({
                        index: 0,
                        routes: [{ name: "Home" }],
                    })
                }
                color="#A294F9"
            />
        </View>
    );
}