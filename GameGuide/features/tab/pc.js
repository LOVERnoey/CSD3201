import React from "react";
import styles from "../../style";
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView, TouchableOpacity } from "react-native";
export default function Pc({ navigation }) {
  return (
    <ImageBackground source={require('../../assets/background.jpg')} style={styles.background}>
      <ScrollView>
        <View style={styles.container}>
          
          {/* game 1 4GROUND9*/}
          <View style={styles.rowContainerMode}>
            <Text style={styles.gameText}>Game </Text>
            <Text style={styles.redText}>PC       </Text>
          </View>
          <Text style={styles.gameNameMode}>FINAL FANTASY VII REBIRTH</Text>
          <Image style={styles.Image} source={require('../../assets/final1.png')}></Image>
          <View style={styles.box}>
            <View>
              <Text style={styles.text}>
              FINAL FANTASY VII REMAKE ยังคงยึดมั่นกับเหตุการณ์ของเกมต้นฉบับ แต่ก็ได้แยกตัวออกจากเรื่องราวที่เกิดขึ้นในช่วงหัวเลี้ยวหัวต่อที่สำคัญ 
              การเปลี่ยนแปลงเหล่านี้ยังได้รับการยอมรับในการดำเนินเรื่องด้วยการแนะนำ Whisper ผู้ชี้ชะตาลึกลับที่ปรากฏตัวขึ้นเมื่อวิถีแห่งโชคชะตาเปลี่ยนไป
              </Text>
              {/* move to Details if click */}
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Details', {
                    itemName: 'FINAL FANTASY VII REBIRTH',
                    synopsis: 'FINAL FANTASY VII REBIRTH คือภาคล่าสุดของโปรเจกต์นี้ ซึ่งอาจจะแนะนำว่าคุณจำเป็นต้องเล่น FINAL FANTASY VII REMAKE ก่อน อย่างไรก็ตาม FINAL FANTASY VII REBIRTH ถูกออกแบบมาให้เป็นประสบการณ์แบบสแตนด์อโลน ที่คุณสามารถเข้าสู่ซีรีส์เกม FINAL FANTASY VII ที่เป็นเอกลักษณ์เป็นเกมแรกได้',
                    descripsion: 'คุณสามารถสำรวจโลกด้วยการเดินเท้า แต่จะง่ายกว่าถ้าเดินทางด้วยรถบักกี้และ รถล้อเลื่อน ที่ต้องทรงตัวเอง หรือขี่ Chocobo ที่เป็นเอกลักษณ์ของ FINAL FANTASY การจับสัตว์ประหลาดขนนกเหล่านี้จะช่วยให้คุณสำรวจโลกได้หลากหลายวิธี ด้วยความสามารถในการปีนหน้าผาและแม้แต่เหินไปบนท้องฟ้า โดยขึ้นอยู่กับสภาพแวดล้อมนที่อันเป็นที่รักจากเกมต้นฉบับปี 1997 กลับมาใน FINAL FANTASY VII REBIRTH รวมถึง Forgotten Capital, Shinra Manor, Mythril Mine และ The Gold Saucer สวนสนุกขนาดยักษ์ที่เต็มไปด้วยมินิเกมให้เล่น',
                    image: require('../../assets/final1.png'),
                    image2: require('../../assets/final2.jpg'),
                      
                  })
                }
              >
                <Text style={styles.link}>Details</Text>
              </TouchableOpacity>
            </View>
          </View>


          {/* game 2 Crazy Ones*/}
          <Text style={styles.gameNameMode}>TCG Card Shop Simulator</Text>
          <Image style={styles.Image} source={require('../../assets/tcg1.jpg')}></Image>
          <View style={styles.box}>
            <View>
              <Text style={styles.text}>
              TCG Card Shop Simulator คือการจำลองร้านค้าการ์ดที่คุณขายการ์ดบูสเตอร์แพ็คเพื่อหารายได้และสร้างธุรกิจร้านขายการ์ดของคุณ
              </Text>
              {/* move to Details if click */}
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Details', {
                    itemName: 'TCG Card Shop Simulator',
                    synopsis: "จัดการร้านค้าของคุณ:ออกแบบร้าน TCG ของคุณเอง จัดระเบียบชั้นวางและชุดการ์ดเพื่อให้ประสบการณ์การช็อปปิ้งของลูกค้าราบรื่นและง่ายดาย",
                    descripsion: "ขยายธุรกิจของคุณ:รับผลกำไรเพื่อลงทุนในร้านค้าของคุณอีกครั้ง ขยายพื้นที่ของคุณ ปลดล็อกชุดการ์ดใหม่ และอัปเกรดสิ่งอำนวยความสะดวกของคุณเพื่อดึงดูดลูกค้าให้มากขึ้นและเพิ่มรายได้",
                    image: require('../../assets/tcg1.jpg'),
                    image2: require('../../assets/tcg2.jpg'),
                      
                  })
                }
              >
                <Text style={styles.link}>Details</Text>
              </TouchableOpacity>
            </View>
          </View>


          {/* game 3 ragnarok m classic*/}
          <Text style={styles.gameNameMode}>Ghost of Tsushima</Text>
          <Image style={styles.Image} source={require('../../assets/ghost1.png')}></Image>
          <View style={styles.box}>
            <View>
              <Text style={styles.text}>
              Ghost of Tsushima™ เป็นเกมแอ็กชันโอเพ่นเวิลด์ที่มีฉากหลังเป็นญี่ปุ่นยุคศักดินา ตัวเอกคือจิน ซาไค ซามูไรผู้ยอมเดิมพันทุกอย่างเพื่อปกป้องเกาะสึชิมะจากการรุกรานของมองโกล 
              พบกับศึกการดวลดาบและการต่อสู้ระยะไกลแบบบุคคลที่สามที่จะมีให้คุณได้สัมผัสอย่างต่อเนื่อง การโจมตีที่ประสบความสำเร็จจะตัดอวัยวะและศีรษะของศัตรู และมักเต็มไปด้วยเอฟเฟกต์
              เลือดสาดเป็นวงกว้าง ผู้เล่นยังสามารถใช้การลอบเร้นเพื่อลอบสังหารศัตรูได้อีกด้วย ฉากคัตซีนและฉากอื่น ๆ จะแสดงให้เห็นถึงความรุนแรงอย่างมาก เช่น ฉากที่ชาวบ้านถูกเผาทั้งเป็น 
              ฉากที่แสดงให้เห็นคนถูกตัดศีรษะ และมีการยกศีรษะที่ถูกตัดออกให้กล้องเห็น เลือดสีแดงจะปรากฏในสภาพแวดล้อม เครื่องแต่งกาย และกระจายออกจากตัวศัตรูเมื่อทำการโจมตีสำเร็จ
              </Text>
              {/* move to Details if click */}
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Details', {
                    itemName: 'Ghost of Tsushima',
                    synopsis: "สัมผัสการเดินทางของจิน ซาไคเป็นครั้งแรกบน PC และค้นพบประสบการณ์ Ghost of Tsushima ฉบับสมบูรณ์ในเวอร์ชันไดเร็กเตอร์คัทนี้ในช่วงปลายศตวรรษที่ 13 อาณาจักรมองโกลบดขยี้นานาประเทศที่เดินทัพผ่านจนราบคาบ ด้วยมุ่งหมายที่จะเป็นผู้พิชิตแห่งซีกโลกตะวันออก เกาะสึชิมะเป็นปราการสุดท้ายที่อยู่ระหว่างเกาะหลักของญี่ปุ่นและการรุกรานของทัพเรือมองโกลที่นำโดยโคตุนข่าน จอมทัพผู้โหดเหี้ยมและเฉียบแหลม",
                    descripsion: "แม้ทั้งเกาะจะไม่อาจต้านทานแสนยานุภาพของทัพมองโกลและถูกเผาทำลายในการโจมตีเพียงระลอกเดียว แต่ซามูไรนักรบผู้กล้าหาญ จิน ซาไค ก็ยังคงยืนหยัดอย่างเด็ดเดี่ยว ในฐานะผู้รอดชีวิตคนสุดท้ายของตระกูล เขาได้ตัดสินใจว่าจะทำทุกวิถีทางเพื่อปกป้องผู้คนและกอบกู้บ้านเกิดเมืองนอนของเขา ไม่ว่าจะยากลำบากเพียงใดก็ตาม เขาต้องละทิ้งธรรมเนียมที่หล่อเลี้ยงให้เขาเติบโตเป็นนักรบ และออกเดินทางบนเส้นทางใหม่อันเป็นเส้นทางแห่งนักรบปีศาจ และเปิดศึกที่ไร้กฎเกณฑ์ใด ๆ เพื่อปลดปล่อยสึชิมะสู่อิสรภาพ",
                    image: require('../../assets/ghost1.png'),
                    image2: require('../../assets/ghost2.jpg'),
                      
                  })
                }
              >
                <Text style={styles.link}>Details</Text>
              </TouchableOpacity>
            </View>
          </View>


          {/* game 4 MONGIL: STAR DIVE*/}
          <Text style={styles.gameNameMode}>DRAGON BALL: Sparking! ZERO</Text>
          <Image style={styles.Image} source={require('../../assets/Db1.jpg')}></Image>
          <View style={styles.box}>
            <View>
              <Text style={styles.text}>
              DRAGON BALL: Sparking! ZERO สืบทอดระบบต่อสู้ดั้งเดิมของซีรีส์ Budokai Tenkaichi พร้อมพัฒนาการสู่ระดับใหม่อย่างไม่เคยมีมาก่อน 
              เรียนรู้และฝึกฝนการใช้ตัวละครอันยอดเยี่ยมที่มีให้เลือกเล่นมากมาย พร้อมด้วยพลังเฉพาะตัวของตัวละคร การแปลงร่าง และทักษะต่างๆ
              </Text>
              {/* move to Details if click */}
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Details', {
                    itemName: 'DRAGON BALL: Sparking! ZERO',
                    synopsis: "รับบทเป็นนักรบและต่อสู้ระดับทะลุสวรรค์สะท้านโลกันต์แบบฉบับ Dragon Ball ที่แท้จริง!จำนวนตัวละครที่มากที่สุดในประวัติศาสตร์ของซีรีส์ปล่อยพลังทะลุขีดจำกัดของเหล่านักรบกว่า 180 ชีวิตจาก Dragon Ball Z， Dragon Ball Super, Dragon Ball GT, และมูฟวี่ Dragon Ball อีกมากมายซึ่งจะตบเท้ากันมาอย่างพร้อมเพรียงในเกมภาคหลัก! โดยทุกตัวละครจะมีท่าต่อสู้ประจำตัวที่รู้จักกันดี รวมถึงความสามารถ การเปลี่ยนร่าง และเทคนิคที่แฟนๆ คุ้นเคยเป็นอย่างดีให้คุณเป็นเจ้าของพลังทำลายล้างของนักรบผู้แกร่งที่สุดที่เคยปรากฏตัวใน Dragon Ball!แอ็กชันต่อสู้ 3D สุดตระการตา",
                    descripsion: "เข้าร่วมการต่อสู้ 3D ความเร็วสูงสุดระทึกใจที่เป็นไปตามเนื้อเรื่องอนิเมะและซีรีส์วิดีโอเกม ด้วยภาพอันน่าทึ่งและการเคลื่อนไหวในการต่อสู้แบบ Dragon Ball ของแท้ เช่น การปะทะลำแสง การจู่โจม การเคลื่อนไหวที่เร็วจนมองตามไม่ทัน และการโจมตีขั้นอัลติเมทสะท้านโลกันต์",
                    image: require('../../assets/Db1.jpg'),
                    image2: require('../../assets/Db2.jpg'),
                      
                  })
                }
              >
                <Text style={styles.link}>Details</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* game 5 */}
          <Text style={styles.gameNameMode}>Streamer Life Simulator 2</Text>
          <Image style={styles.Image} source={require('../../assets/Sls1.png')}></Image>
          <View style={styles.box}>
            <View>
              <Text style={styles.text}>
              Streamer Life Simulator เป็นเกมที่คุณเริ่มต้นจากศูนย์และพยายามเป็นสตรีมเมอร์อินเทอร์เน็ตยอดนิยม หากต้องการเป็นสตรีมเมอร์ที่ดีขึ้น คุณต้องอัปเกรดอุปกรณ์ของคุณ 
              (เช่น กล้อง โปรเซสเซอร์ หรือการ์ดวิดีโอ) และการเชื่อมต่ออินเทอร์เน็ต คุณต้องพัฒนาทักษะของคุณและตัดสินใจได้อย่างถูกต้องระหว่างการสตรีมเพื่อมอบเนื้อหาที่ดีขึ้นแก่ผู้ชม
              ที่ดูสตรีมของคุณ คุณสามารถแสดงความบริสุทธิ์หรือวิพากษ์วิจารณ์ผู้ชมอย่างรุนแรงได้ ขึ้นอยู่กับคุณแล้วว่าจะตัดสินใจได้อย่างถูกต้องตามสถานการณ์ การตัดสินใจของคุณระหว่าง
              การสตรีมจะส่งผลต่อจำนวนผู้ชมและมีบทบาทสำคัญในการพัฒนาของคุณ
              </Text>
              {/* move to Details if click */}
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Details', {
                    itemName: 'Streamer Life Simulator 2',
                    synopsis: "นับตั้งแต่ ‘Star Savior’ ได้เปิดเผยชื่ออย่างเป็นทางการสู่สาธารณชนครั้งแรกในวันที่ 29 พ.ย. ที่ผ่านมา Studio Byside ก็ได้รับการตอบรับที่ดีจากผู้เล่นด้วยการปล่อยภาพ Key Visual และระบบฝึกฝนที่มาพร้อมกับตัวละครและฉากหลังของเกมที่น่าดึงดูดใจ",
                    descripsion: "ผู้เกี่ยวข้องของ Studio Byside กล่าวว่า “ขณะนี้ Star Savior กำลังอยู่ในขั้นตอนสุดท้ายของการพัฒนาและมีเป้าหมายที่จะเปิดให้เล่นภายในปีนี้” และยังกล่าวเสริมว่า “เราจะอัปเดตข้อมูลใหม่เกี่ยวกับเกมผ่านช่องทาง SNS อย่างเป็นทางการของเราอย่างต่อเนื่อง ยังไงก็ช่วยติดตามกันด้วยนะครับ",
                    image: require('../../assets/Sls1.png'),
                    image2: require('../../assets/Sls2.jpg'),
                      
                  })
                }
              >
                <Text style={styles.link}>Details</Text>
              </TouchableOpacity>
            </View>
          </View>


          {/* game 6 Game of Thrones: Kingsroad*/}
          <Text style={styles.gameNameMode}>Marvel's Spider-Man 2</Text>
          <Image style={styles.Image} source={require('../../assets/Sm1.jpg')}></Image>
          <View style={styles.box}>
            <View>
              <Text style={styles.text}>
              สวมหน้ากากออกไปรับบทฮีโร่โหนใยที่ตื่นเต้นเร้าใจกว่าเดิมใน Marvel’s Spider-Man 2 ในรูปแบบ PC
              พัฒนาโดย Insomniac Games ร่วมกับ Marvel และปรับปรุงลง PC โดย Nixxes Softwareเมืองถูกบุกยึด!
              คู่หูสไปเดอร์แมนทั้งปีเตอร์ ปาร์กเกอร์ และไมลส์ โมราเลสต้องเผชิญกับบททดสอบความแข็งแกร่งสุดโหดทั้งภาย
              ใต้หน้ากากและในชีวิตจริงขณะต่อสู้เพื่อปกป้องเมือง ปกป้องซึ่งกันและกัน ตลอดจนปกป้องคนที่พวกเขารักจากวีน่อมผู้ชั่วร้ายและภัยครั้งใหม่จากซิมไบโอตสุดอันตราย
              </Text>
              {/* move to Details if click */}
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Details', {
                    itemName: 'Marvels Spider-Man 2',
                    synopsis: "กราฟิกที่ปรับแต่งสำหรับ PC กอบกู้โลกอย่างมีสไตล์ด้วยตัวเลือกคุณภาพกราฟิกที่คุณเลือกเอง และปลดล็อกเฟรมเรตเพื่อโชว์ลูกเล่นของซูเปอร์ฮีโร่ได้ไหลลื่นขึ้น เพลิดเพลินกับเทคโนโลยีเพิ่มประสิทธิภาพต่าง ๆ รวมถึงการอัปสเกลและการสร้างเฟรมของ NVIDIA DLSS 3 และ AMD FSR 3.1¹ทั้งยังรองรับเทคโนโลยีอัปสเกลของ Intel XeSS ด้วยเช่นกัน¹ Ray Tracing ที่ปรับปรุงให้ดียิ่งขึ้น¹ภาพสะท้อนแบบ Ray Tracing เงาแบบ Ray Tracing และการจำลองแสงเงาวัตถุแบบ Ray Tracing ช่วยให้เมืองนิวยอร์กของ Marvel มีชีวิตชีวาขึ้นรอบ ๆ ตัวคุณ เลือกโหมดคุณภาพที่คัดสรรมาแล้ว และตื่นตาตื่นใจกับวิวอันน่าทึ่งจากมุมสูง ผู้ที่ใช้ NVIDIA GeForce RTX GPU สามารถใช้งานฟังก์ชัน DLSS Ray Reconstruction ได้ เทคนิคนี้ใช้เครือข่าย AI ที่ฝึกจากซูเปอร์คอมพิวเตอร์ของ NVIDIA ที่สร้างพิกเซลคุณภาพสูงขึ้นระหว่างลำแสงตัวอย่าง ช่วยให้ได้ภาพแบบ Ray Tracing ที่คมชัดและสมจริงยิ่งขึ้น",
                    descripsion: "เดินทางสำรวจนิวยอร์กของ Marvel ที่กว้างขึ้นสำรวจเมืองนิวยอร์กในแบบฉบับ Marvel ที่กว้างขวางกว่าเดิม โดยมีสองเขตใหม่ คือ บรุกลินและควีนส์ ตลอดจนสถานที่ต่าง ๆ เช่น โคนีย์ไอส์แลนด์ และที่อื่น ๆ อีกมากมายโหนใย กระโดด และใช้เว็บวิงส์ที่ได้มาใหม่เดินทางไปทั่วเมือง สลับตัวระหว่างปีเตอร์ ปาร์กเกอร์ กับไมลส์ โมราเลส ขณะสำรวจโลกโอเพนเวิลด์ได้ทันที เพื่อสัมผัสเนื้อเรื่องที่แตกต่างและสุดยอดพลังใหม่ ๆเล่นเป็นสไปเดอร์แมนได้ทั้งสองตัวละครใช้พลังซิมไบโอตที่ได้มาใหม่ของปีเตอร์และพลังวีน่อมชีวไฟฟ้าที่รุนแรงของไมลส์ ค้นพบอุปกรณ์ไฮเทคที่อัปเกรดได้มาช่วยเสริมประสบการณ์ในการต่อสู้ เพื่อสัมผัสเกมเพลย์ที่ล้ำลึกและหลากหลายเป็นพิเศษ",
                    image: require('../../assets/Sm1.jpg'),
                    image2: require('../../assets/Sm2.jpg'),
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