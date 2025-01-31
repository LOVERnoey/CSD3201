import React from "react";
import styles from "../../style";
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView, TouchableOpacity } from "react-native";
export default function console({ navigation }) {
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
          <Image style={styles.Image} source={require('../../assets/mobile/4GROUND9.jpg')}></Image>
          <View style={styles.box}>
            <View>
              <Text style={styles.text}>
                '4GROUND9' เป็นผลงานเกม RPG แนวสะสมตัวใหมจากผู้พัฒนาหลักของเกมดัง
                อย่าง 'Exos Heroes' เกมได้บอกเล่าเหตุการณ์ต่างๆ
                ที่เกิดขึ้นใน 'Beerhaven' เมืองในโลกอนาคตและนำเสนอโลกที่เปิดกว้าง พร้อมทั้งตัวละคร
                ที่มีเอกลักษณ์เฉพาะและการต่อสู้ที่ไม่เหมือนใคร
              </Text>
              {/* move to Details if click */}
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Details', {
                    itemName: '4GROUND9',
                    synopsis: 'LINE Games (ซีอีโอร่วม พัค ซอง-มิน และ โช ดง-ฮยอน) เปิดเผยในวันนี้ว่า Nerdystar (ซีอีโอ ฮอ ซอง-อุก) บริษัทพัฒนาเกมที่ตนลงทุน ได้ลงนามในสัญญากับ Garena บริษัทเกมชื่อดังเพื่อให้เป็นผู้ให้บริการทั่วโลกของเกม ‘4GROUND9’',
                    descripsion: '4GROUND9 เป็นผลงานเกม RPG แนวสะสมตัวใหมจากผู้พัฒนาหลักของเกมดัง อย่าง "Exos Heroes" เกมได้บอกเล่าเหตุการณ์ต่างๆ ที่เกิดขึ้นใน "Beerhaven" เมืองในโลกอนาคตและนำเสนอโลกที่เปิดกว้าง พร้อมทั้งตัวละคร ที่มีเอกลักษณ์เฉพาะและการต่อสู้ที่ไม่เหมือนใคร',
                    image: require('../../assets/mobile/4GROUND9.jpg'),
                    image2: require('../../assets/mobile/4GROUND9-2.webp'),

                  })
                }
              >
                <Text style={styles.link}>Details</Text>
              </TouchableOpacity>
            </View>
          </View>


          {/* game 2 Crazy Ones*/}
          <Text style={styles.gameNameMode}>Crazy Ones</Text>
          <Image style={styles.Image} source={require('../../assets/mobile/CrazyOnes.jpg')}></Image>
          <View style={styles.box}>
            <View>
              <Text style={styles.text}>
                Crazy Ones เกมมือถือแนว Dating Sim สไตล์อนิเมะสุดน่ารัก พาคุณเข้าสู่โลกของความรักสุดโรแมนติก
                กับเหล่าสาวสวยสุดคิ้วท์ 4 คน ที่พร้อมจะมาขโมยหัวใจคุณ ผสมผสานความสนุกของ Visual Novel เข้ากับเกม
                Dating Sim แบบ Interactive ได้อย่างลงตัว ทำให้คุณรู้สึกเหมือนได้เป็นพระเอกในอนิเมะเรื่องโปรด
              </Text>
              {/* move to Details if click */}
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Details', {
                    itemName: 'Crazy Ones',
                    synopsis: "Crazy Ones เกมมือถือแนว Dating Sim สไตล์อนิเมะสุดน่ารักจาก Noctua Games เปิดให้ลงทะเบียนล่วงหน้าบนสโตร์ไทยแล้วทั้ง iOS และ Android เกมนี้จะพาคุณเข้าสู่โลกของความรักสุดโรแมนติก กับเหล่าสาวสวยสุดคิ้วท์ 4 คน ที่พร้อมจะมาขโมยหัวใจคุณ!",
                    descripsion: "Crazy Ones ไม่ใช่แค่เกม Dating Sim ธรรมดา แต่เป็นเกมที่ผสมผสานความสนุกของ Visual Novel เข้ากับเกม Dating Sim แบบ Interactive ได้อย่างลงตัว ทำให้คุณรู้สึกเหมือนได้เป็นพระเอกในอนิเมะเรื่องโปรดเลยล่ะ!",
                    image: require('../../assets/mobile/CrazyOnes.jpg'),
                    image2: require('../../assets/mobile/CrazyOnes-1.jpg'),

                  })
                }
              >
                <Text style={styles.link}>Details</Text>
              </TouchableOpacity>
            </View>
          </View>


          {/* game 3 ragnarok m classic*/}
          <Text style={styles.gameNameMode}>Ragnarok M : Classic</Text>
          <Image style={styles.Image} source={require('../../assets/mobile/RagnarokM.jpg')}></Image>
          <View style={styles.box}>
            <View>
              <Text style={styles.text}>
                Ragnarok M: Classic เกมมือถือ MMORPG สุดคลาสสิก ที่แฟนๆ Ragnarok ต่างรอคอย
                เตรียมตัวกลับไปสัมผัสประสบการณ์การผจญภัยในโลก Ragnarok อีกครั้ง พร้อมกับระบบเกมเพลย์
                ที่ให้ความสำคัญกับการเล่นแบบ Fair Play อย่างแท้จริง
              </Text>
              {/* move to Details if click */}
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Details', {
                    itemName: 'Ragnarok M : Classic',
                    synopsis: "Ragnarok M: Classic เกมมือถือ MMORPG สุดคลาสสิก ที่แฟนๆ Ragnarok ต่างรอคอย เตรียมตัวกลับไปสัมผัสประสบการณ์การผจญภัยในโลก Ragnarok อีกครั้ง พร้อมกับระบบเกมเพลย์ที่ให้ความสำคัญกับการเล่นแบบ Fair Play อย่างแท้จริง",
                    descripsion: "หลังจากการทดสอบ CBT ได้รับกระแสตอบรับอย่างล้นหลาม ล่าสุด Gravity Interactive, Inc. ก็ออกมาประกาศข่าวดีให้แฟน ๆ Ragnarok ได้ทราบโดยทั่วกันว่า Ragnarok M: Classic เกมมือถือ MMORPG จาก IP ชื่อดังอย่าง Ragnarok Online มีแผนจะเปิด OBT อย่างเป็นอย่างทางการในวันแห่งความรัก 14 กุมภาพันธ์นี้ ทั้งในระบบ iOS และ Android ผ่าน Apple App Store และ Google Play Store โดยตัวเกมจะรองรับภาษาไทยให้เราได้ใช้งานกันด้วย",
                    image: require('../../assets/mobile/RagnarokM.jpg'),
                    image2: require('../../assets/mobile/RagnarokM-1.jpg'),

                  })
                }
              >
                <Text style={styles.link}>Details</Text>
              </TouchableOpacity>
            </View>
          </View>


          {/* game 4 MONGIL: STAR DIVE*/}
          <Text style={styles.gameNameMode}>MONGIL: STAR DIVE</Text>
          <Image style={styles.Image} source={require('../../assets/mobile/MSD.jpg')}></Image>
          <View style={styles.box}>
            <View>
              <Text style={styles.text}>
                MONGIL: STAR DIVE สร้างสรรค์ด้วย Unreal Engine 5 พาผู้เล่นผจญภัยไปกับ Verna
                และ Cloud สองตัวละครหลัก พร้อมด้วย Yaongi เพื่อนคู่ใจที่ใช้ความสามารถพิเศษในการจับ
                และฝึกสัตว์ประหลาด สร้างทีมต่อสู้ 3 ตัว และเข้าร่วมการต่อสู้แบบแท็กทีมเชิงกลยุทธ์
              </Text>
              {/* move to Details if click */}
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Details', {
                    itemName: 'MONGIL: STAR DIVE',
                    synopsis: "Netmarble และ Netmarble Monster ผู้พัฒนาเกมชื่อดังได้ปล่อยตัวอย่างแรกของ MONGIL: STAR DIVE เกม RPG แอ็กชั่นภาคต่อของเกม RPG ชื่อดังอย่าง Monster Taming ออกมาให้ชมกันแล้ว โดยมีเปิดให้เล่นทั่วโลกบนคอนโซล, PC, iOS และ Android ในช่วงครึ่งหลังของปี 2025",
                    descripsion: "MONGIL: STAR DIVE สร้างสรรค์ด้วย Unreal Engine 5 พาผู้เล่นผจญภัยไปกับ Verna และ Cloud สองตัวละครหลัก พร้อมด้วย Yaongi เพื่อนคู่ใจที่ใช้ความสามารถพิเศษในการจับและฝึกสัตว์ประหลาด สร้างทีมต่อสู้ 3 ตัว และเข้าร่วมการต่อสู้แบบแท็กทีมเชิงกลยุทธ์ฟีเจอร์หลัก",
                    image: require('../../assets/mobile/MSD.jpg'),
                    image2: require('../../assets/mobile/MSD2.jpg'),

                  })
                }
              >
                <Text style={styles.link}>Details</Text>
              </TouchableOpacity>
            </View>
          </View>


          {/* game 5 Star Savior*/}
          <Text style={styles.gameNameMode}>Star Savior</Text>
          <Image style={styles.Image} source={require('../../assets/mobile/StarSavior.jpg')}></Image>
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
              {/* move to Details if click */}
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Details', {
                    itemName: 'Star Savior',
                    synopsis: "นับตั้งแต่ ‘Star Savior’ ได้เปิดเผยชื่ออย่างเป็นทางการสู่สาธารณชนครั้งแรกในวันที่ 29 พ.ย. ที่ผ่านมา Studio Byside ก็ได้รับการตอบรับที่ดีจากผู้เล่นด้วยการปล่อยภาพ Key Visual และระบบฝึกฝนที่มาพร้อมกับตัวละครและฉากหลังของเกมที่น่าดึงดูดใจ",
                    descripsion: "ผู้เกี่ยวข้องของ Studio Byside กล่าวว่า “ขณะนี้ Star Savior กำลังอยู่ในขั้นตอนสุดท้ายของการพัฒนาและมีเป้าหมายที่จะเปิดให้เล่นภายในปีนี้” และยังกล่าวเสริมว่า “เราจะอัปเดตข้อมูลใหม่เกี่ยวกับเกมผ่านช่องทาง SNS อย่างเป็นทางการของเราอย่างต่อเนื่อง ยังไงก็ช่วยติดตามกันด้วยนะครับ",
                    image: require('../../assets/mobile/StarSavior.jpg'),
                    image2: require('../../assets/mobile/StarSavior-1.jpg'),

                  })
                }
              >
                <Text style={styles.link}>Details</Text>
              </TouchableOpacity>
            </View>
          </View>


          {/* game 6 Game of Thrones: Kingsroad*/}
          <Text style={styles.gameNameMode}>GOT: Kingsroad</Text>
          <Image style={styles.Image} source={require('../../assets/mobile/got.jpg')}></Image>
          <View style={styles.box}>
            <View>
              <Text style={styles.text}>
                Game of Thrones: Kingsroad เกม RPG แอ็กชันผจญภัย ผู้เล่นจะได้สัมผัสเรื่องราวใหม่โดยสวมบทบาท
                เป็นตัวละครใหม่ ผู้ที่กลายเป็นทายาทของตระกูลไทเรด้วยโชคชะตาอันแปลกประหลาด ซึ่งเป็นตระกูลชนชั้นสูงเล็ก ๆ ทางตอนเหนือ  นอกเหนือจากการปรับแต่งตัวละครด้วยผู้สร้างตัวละครที่แข็งแกร่งแล้ว ผู้เล่นยังจะสามารถเลือกคลาสได้จากหนึ่งในสามคลาส ได้แก่ ทหารรับจ้าง, อัศวิน, หรือ นักฆ่า เมื่อผู้เล่นก้าวเข้าสู่โลกแห่งเวสเทอรอส
              </Text>
              {/* move to Details if click */}
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Details', {
                    itemName: 'GOT: Kingsroad',
                    synopsis: "Netmarble และ Warner Bros. Interactive Entertainment ประกาศในวันนี้ว่า Game of Thrones: Kingsroad เกม RPG แอ็กชันผจญภัย มีกำหนดเปิดตัวในปี 2025  เหล่าเกมเมอร์นับล้านคนได้รับชมเกมเป็นครั้งแรกด้วยตัวอย่างที่ฉายรอบปฐมทัศน์ในช่วงงาน The Game Awards  เกม Game of Thrones: Kingsroad กำลังอยู่ในระหว่างการพัฒนาสำหรับอุปกรณ์มือถือ พร้อมพิจารณาสำหรับแพลตฟอร์มอื่น ๆ",
                    descripsion: "สร้างขึ้นจาก A Song of Ice and Fire ซีรีส์หนังสือนิยายชื่อดังของคุณ จอร์จ อาร์. อาร์. มาร์ติน  Game of Thrones ซีรีส์ HBO ที่คว้ารางวัล Emmy® Award ติดตามกษัตริย์และราชินี, อัศวินและคนทรยศ, คนหลอกลวงและขุนนาง ที่มีส่วนร่วมในเกมแห่งการชิงไวชิงพริบสุดอันตรายเพื่อควบคุมอาณาจักรทั้งเจ็ดแห่งเวสเทอรอส เรื่องราวมหากาพย์ซีรีส์สุดยิ่งใหญ่แสดงถึงความทรยศและขุนนาง ครอบครัวและเกียรติยศ ความทะเยอทะยานและความรัก ตลอดจนความตายและการอยู่รอด ซึ่งได้ตราตรึงจินตนาการของแฟน ๆ ทั่วโลก และกลายเป็นหนึ่งในรายการโทรทัศน์ที่ได้รับความนิยมมากที่สุด",
                    image: require('../../assets/mobile/got.jpg'),
                    image2: require('../../assets/mobile/got2.png'),

                  })
                }
              >
                <Text style={styles.link}>Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
