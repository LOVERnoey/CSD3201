import React from "react";
import styles from "../../style";
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView, TouchableOpacity } from "react-native";
export default function mobile({ navigation }) {
  return (
    <ImageBackground source={require('../../assets/background.jpg')} style={styles.background}>
      <ScrollView>
        <View style={styles.container}>
          {/* game 1 4GROUND9*/}
          <View style={styles.rowContainerMode}>
            <Text style={styles.gameText}>Game </Text>
            <Text style={styles.redText}>Mobile</Text>
          </View>
          <Text style={styles.gameNameMode}>4GROUND9</Text>
          <Image style={styles.Image} source={require('../../assets/4GROUND9.jpg')}></Image>
          <View style={styles.box}>
            <View>
              <Text style={styles.text}>
                '4GROUND9' เป็นผลงานเกม RPG แนวสะสมตัวใหมจากผู้พัฒนาหลักของเกมดัง
                อย่าง 'Exos Heroes' เกมได้บอกเล่าเหตุการณ์ต่างๆ
                ที่เกิดขึ้นใน 'Beerhaven' เมืองในโลกอนาคตและนำเสนอโลกที่เปิดกว้าง พร้อมทั้งตัวละคร
                ที่มีเอกลักษณ์เฉพาะและการต่อสู้ที่ไม่เหมือนใคร
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Details", { name: "4GROUND9" })}>
                <Text style={styles.link}>Details</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* game 2 Crazy Ones*/}
          <Text style={styles.gameNameMode}>Crazy Ones</Text>
          <Image style={styles.Image} source={{}}></Image>
          <View style={styles.box}>
            <View>
              <Text style={styles.text}>
                Crazy Ones เกมมือถือแนว Dating Sim สไตล์อนิเมะสุดน่ารัก พาคุณเข้าสู่โลกของความรักสุดโรแมนติก
                กับเหล่าสาวสวยสุดคิ้วท์ 4 คน ที่พร้อมจะมาขโมยหัวใจคุณ ผสมผสานความสนุกของ Visual Novel เข้ากับเกม
                Dating Sim แบบ Interactive ได้อย่างลงตัว ทำให้คุณรู้สึกเหมือนได้เป็นพระเอกในอนิเมะเรื่องโปรด
              </Text>
            </View>
          </View>
          {/* game 3 ragnarok m classic*/}
          <Text style={styles.gameNameMode}>Ragnarok M : Classic</Text>
          <Image style={styles.Image} source={{}}></Image>
          <View style={styles.box}>
            <View>
              <Text style={styles.text}>
                Ragnarok M: Classic เกมมือถือ MMORPG สุดคลาสสิก ที่แฟนๆ Ragnarok ต่างรอคอย
                เตรียมตัวกลับไปสัมผัสประสบการณ์การผจญภัยในโลก Ragnarok อีกครั้ง พร้อมกับระบบเกมเพลย์
                ที่ให้ความสำคัญกับการเล่นแบบ Fair Play อย่างแท้จริง
              </Text>
            </View>
          </View>
          {/* game 4 MONGIL: STAR DIVE*/}
          <Text style={styles.gameNameMode}>MONGIL: STAR DIVE</Text>
          <Image style={styles.Image} source={{ uri: "https://i0.wp.com/thisisgamethailand.com/wp-content/uploads/2024/12/image-38.png?resize=768%2C432&ssl=1" }}></Image>
          <View style={styles.box}>
            <View>
              <Text style={styles.text}>
                MONGIL: STAR DIVE สร้างสรรค์ด้วย Unreal Engine 5 พาผู้เล่นผจญภัยไปกับ Verna
                และ Cloud สองตัวละครหลัก พร้อมด้วย Yaongi เพื่อนคู่ใจที่ใช้ความสามารถพิเศษในการจับ
                และฝึกสัตว์ประหลาด สร้างทีมต่อสู้ 3 ตัว และเข้าร่วมการต่อสู้แบบแท็กทีมเชิงกลยุทธ์
              </Text>
            </View>
          </View>
          {/* game 5 Star Savior*/}
          <Text style={styles.gameNameMode}>Star Savior</Text>
          <Image style={styles.Image} source={{}}></Image>
          <View style={styles.box}>
            <View>
              <Text style={styles.text}>
                Star Savior เป็นเกม RPG แธีมฟนตาซีที่เกิดขึ้นในองค์กรสังเกตการณ์เนบิวลา
                (Nebula Observatory Organization - NOA) ในเกมนี้ คุณจะรับบทเป็น Savior
                และออกเดินทางเพื่อสืบทอดพลังแห่งดวงดาวและช่วยโลกที่กำลังเสื่อมสลาย
                ตัวเกมนำเสนอเรื่องราวที่น่าดึงดูดใจด้วยกราฟิก 3D สไตล์อนิเมะที่สวยงาม
                พร้อมด้วยตัวละครที่มีเสน่ห์หลากหลาย นอกจากนี้ ยังมีระบบฝึกฝนที่คุณสามารถโต้ตอบ
                กับตัวละครและเตรียมพร้อมสำหรับการต่อสู้ครั้งต่อไป
              </Text>
            </View>
          </View>
          {/* game 6 Game of Thrones: Kingsroad*/}
          <Text style={styles.gameNameMode}>Game of Thrones: Kingsroad</Text>
          <Image style={styles.Image} source={{}}></Image>
          <View style={styles.box}>
            <View>
              <Text style={styles.text}>
                Game of Thrones: Kingsroad เกม RPG แอ็กชันผจญภัย ผู้เล่นจะได้สัมผัสเรื่องราวใหม่โดยสวมบทบาท
                เป็นตัวละครใหม่ ผู้ที่กลายเป็นทายาทของตระกูลไทเรด้วยโชคชะตาอันแปลกประหลาด ซึ่งเป็นตระกูลชนชั้นสูงเล็ก ๆ ทางตอนเหนือ  นอกเหนือจากการปรับแต่งตัวละครด้วยผู้สร้างตัวละครที่แข็งแกร่งแล้ว ผู้เล่นยังจะสามารถเลือกคลาสได้จากหนึ่งในสามคลาส ได้แก่ ทหารรับจ้าง, อัศวิน, หรือ นักฆ่า เมื่อผู้เล่นก้าวเข้าสู่โลกแห่งเวสเทอรอส
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
