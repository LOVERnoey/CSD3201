import React from 'react';
import { View, Text, Button, Image, StyleSheet, ScrollView } from 'react-native';

const games = [
    {
        id: '001',
        name: 'Path of Exile 2',
        image: require('../../assets/game1.jpg'),
        price: '798.00',
        description: 'Path of Exile 2 เป็นเกมแอคชั่น RPG ที่เกี่ยวกับการสร้างตัวละครที่ทรงพลังและรับไอเทมระดับมหากาพย์ การค้นหาสมดุลที่เหมาะสมสำหรับการสร้างตัวละคร ไอเท็ม และเศรษฐกิจเป็นสิ่งสำคัญสำหรับประเภทนี้ และจะสำเร็จไม่ได้หากไม่ได้แสดงเกมในสถานะปัจจุบันให้ชุมชนเห็น เรากำลังเปิดตัว Path of Exile 2 ในรูปแบบการเล่นระหว่างการพัฒนาเพื่อให้แน่ใจว่าเกมจะมอบประสบการณ์ที่ดีที่สุดเท่าที่จะเป็นไปได้เมื่อวางจำหน่าย',
        platform: 'Stream',
    },
    {
        id: '002',
        name: 'Red Dead Redemption 2',
        image: require('../../assets/game2.jpg'),
        price: '474.75',
        description: 'อาเธอร์ มอร์แกนและแก๊งแวน เดอร์ ลินเด้เป็นพวกนอกกฎหมายที่กำลังหลบหนี เมื่อเจ้าหน้าที่รัฐบาลกลางและนักล่าเงินรางวัลที่เก่งที่สุดในประเทศต่างรวมตัวกัน แก๊งค์จึงต้องปล้น ขโมย และต่อสู้ฝ่าดินแดนอันขรุขระของอเมริกาเพื่อความอยู่รอด ในขณะที่ความแตกแยกภายในที่ทวีความรุนแรงขึ้นอาจส่งผลให้กลุ่มแตกแยก อาเธอร์ต้องเลือกระหว่างอุดมคติและความภักดีต่อแก๊งที่เลี้ยงดูเขามา',
        platform: 'Stream',
    },
    {
        id: '003',
        name: 'EA SPORTS FC™ 25',
        image: require('../../assets/game3.jpg'),
        price: '799.60',
        description: 'EA SPORTS FC™ 25 มอบหนทางมากมายให้คุณคว้าชัยชนะให้กับสโมสร ร่วมทีมกับเพื่อน ๆ ในโหมดที่คุณชื่นชอบด้วย 5v5 Rush ใหม่ และจัดการสโมสรของคุณไปสู่ชัยชนะในขณะที่ FC IQ ให้การควบคุมทางยุทธวิธีมากกว่าที่เคยเป็นมา',
        platform: 'Stream',
    },
    {
        id: '004',
        name: 'DOKAPON ~Sword of Fury~',
        image: require('../../assets/game4.jpg'),
        price: '660.00',
        description: 'ใครก็ตามที่ร่ำรวยที่สุดในท้ายที่สุด (หมายถึงผู้ถือทรัพย์สินมากที่สุด) จะถือเป็นผู้ชนะ! คุณบรรลุเป้าหมายนั้นได้อย่างไร? โดยการต่อสู้กับสัตว์ประหลาด การปล้น การปล้นสะดม และการทรยศต่อเพื่อนสนิทของคุณ นั่นเป็นวิธีที่! กฎทั้งหมดมีไว้เพื่อทำลายในเกมกระดานนี้!',
        platform: 'Stream',
    },
    {
        id: '005',
        name: 'Cyberpunk 2077',
        image: require('../../assets/game5.jpg'),
        price: '809.55',
        description: 'Cyberpunk 2077 เป็นเกม RPG แนวแอ็คชั่นผจญภัยในโลกเปิดที่มีเรื่องราวเกิดขึ้นในอนาคตอันมืดมนของ Night City ซึ่งเป็นมหานครที่อันตรายซึ่งหมกมุ่นอยู่กับพลัง ความเย้ายวนใจ และการดัดแปลงร่างกายอย่างไม่หยุดยั้ง',
        platform: 'Stream',
    },
];

export default function HomeScreen({ navigation }) {
    return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>A Game Worth Buying</Text>
        {games.map(({ id, name, image, price, description, platform }) => (
          <View key={id} style={styles.card}>
            <Image source={image} style={styles.image} />
            <Text style={styles.gameName}>{name}</Text>
            <Button
              title="Details of Game"
              onPress={() =>
                navigation.navigate('Details of Game', { name, image, price, description, platform })
              }
              color="#ff0000"
            />
          </View>
        ))}
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    scrollContainer: { flexGrow: 1, alignItems: 'center', backgroundColor: '#ffcabf', padding: 16 },
    title: { fontSize: 24, fontWeight: 'bold', marginVertical: 10 },
    card: { marginBottom: 20, alignItems: 'center', width: '100%' },
    image: { width: 200, height: 200, marginBottom: 10, borderRadius: 10 },
    gameName: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  });