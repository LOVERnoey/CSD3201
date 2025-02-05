import React from "react";
import styles from "../../style";
import { View, Text, ImageBackground, Image, ScrollView, TouchableOpacity } from "react-native";
export default function Console({ navigation }) {
  return (
    <ImageBackground source={require('../../assets/background.jpg')} style={styles.background}>
      <ScrollView>
        <View style={styles.container}>


          {/* game 1 4GROUND9*/}
          <View style={styles.rowContainerMode}>
            <Text style={styles.gameText}>  Game </Text>
            <Text style={styles.redText}>Console</Text>
          </View>
          <Text style={styles.gameNameMode}>Dynasty Warriors Origins</Text>
          <Image style={styles.Image} source={require('../../assets/DWO1.jpg')}></Image>
          <View style={styles.box}>
            <View>
              <Text style={styles.text}>
              มุมมองการเล่นที่แตกต่างของไป ถือว่าเป็นอีกหนึ่งเกมที่แฟน ๆ ซีรีส์ Dynasty Warriors ไม่ควรพลาดด้วยประการทั้งปวง
              </Text>
              {/* move to Details if click */}
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Details', {
                    itemName: 'Dynasty Warriors Origins',
                    synopsis: 'ดื่มด่ำไปกับการต่อสู้อันน่าตื่นเต้นในฐานะฮีโร่นิรนามในสามก๊กแอ็คชั่นที่น่าตื่นเต้นที่สุดในประวัติศาสตร์ของซีรีส์สนามรบที่เต็มไปด้วยความตึงเครียด ซึ่งคุณปะทะกับกองทัพขนาดใหญ่ที่ทอดยาวไปไกลสุดลูกหูลูกตา คุณจะรับมือกับการโจมตีของศัตรูได้อย่างไร? ความกล้าหาญทางทหารของคุณจะเป็นประโยชน์ต่อคุณในการต่อสู้ควบคู่กับพันธมิตรในการต่อสู้ทางยุทธวิธีที่ไม่เหมือนใครในแฟรนไชส์ ​​"DYNASTY WARRIORS" และสัมผัสประสบการณ์แอ็คชั่นที่น่าตื่นเต้นที่สุดในประวัติศาสตร์ของซีรีส์นี้',
                    descripsion: 'เวอร์ชันใหม่ของสามก๊กจากมุมมองของตัวเอกดั้งเดิมเรื่องราวของสามก๊กมีเรื่องราวเกิดขึ้นบนแผ่นดินใหญ่อันกว้างใหญ่ของจีน ที่ซึ่งความเชื่อมั่นของฮีโร่ต่าง ๆ มาบรรจบกัน สัมผัสโลกอันงดงามและน่าหลงใหลนี้ผ่านสายตาของตัวเอกดั้งเดิม "ฮีโร่นิรนาม"',
                    image: require('../../assets/DWO1.jpg'),
                    image2: require('../../assets/DWO2.jpg'),
                      
                  })
                }
              >
                <Text style={styles.link}>Details</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* game 2 Astro Bot*/}
          <Text style={styles.gameNameMode}>Astro Bot</Text>
          <Image style={styles.Image} source={require('../../assets/astro.webp')}></Image>
          <View style={styles.box}>
            <View>
              <Text style={styles.text}>
              ยานแม่ PS5® พังย่อยยับ ทำให้ ASTRO และบ็อตลูกเรือทั้งหลายต้องกระจัดกระจายไปทั่วกาแล็กซี ถึงเวลาขับ Dual Speeder 
              คู่ใจสำรวจดาวเคราะห์กว่า 50 ดวงที่เต็มไปด้วยความสนุกสนาน อันตราย และเรื่องน่าประหลาดใจ ใช้พลังใหม่ของ ASTRO ให้เป็นประโยชน์ขณะเดินทาง 
              และพบเจอกับฮีโร่ชื่อดังมากมายจากจักรวาล PlayStation อีกครั้ง!
              </Text>
              {/* move to Details if click */}
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Details', {
                    itemName: 'Astro Bot',
                    synopsis: "ASTRO BOT คือตัวการ์ตูนในเครื่อง PlayStation ที่เริ่มมีบทบาทในหลายๆ รุ่น แต่ชัดสุดจะเป็น PS5 เพราะในเวอร์ชั่นของในเครื่องรุ่นนี้มีการติดตั้ง เวอร์ชั่นฟรีอย่าง ASTRO BOT Game Play แต่ล่าสุดนี้ Sony Interactive ได้เปิดตัวภาคใหม่ที่มีชื่อว่า ASTRO BOT กับความสำเร็จกว่า 30 ปีของ Playstion รอบนี้เรามารีวิวกันว่าเกมนี้เป็นอย่างไร",
                    descripsion: "สำหรับเกมนี้จะเป็นการพาน้อง Astro Bot ไปในที่ค่างๆ โดยตะลุยด่านทั้ง หาดทราย ป่าเขียวขจี หรือภูเขาไฟร้อนระอุ สำรวจดาวเคราะห์ที่น่าจดจำมากมายเพื่อตามหาลูกเรือที่หายไปของ Astro! ซึ่งการควบคุมนั้นไม่ยากเพราะว่ามีคำแนะนำ และรวมถึงการใช้งานกับ คอนโทรลเลอร์ไร้สาย DualSense เรียกว่าใช้งานแทบทุกส่วน",
                    image: require('../../assets/astro.webp'),
                    image2: require('../../assets/astrobot2.webp'),
                      
                  })
                }
              >
                <Text style={styles.link}>Details</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* game 3 Ninjala*/}
          <Text style={styles.gameNameMode}>Ninjala</Text>
          <Image style={styles.Image} source={require('../../assets/Nl1.jpg')}></Image>
          <View style={styles.box}>
            <View>
              <Text style={styles.text}>
              Ninjala อีกหนึ่งเกมฟรีแนวแอ็กชั่นบนแพลตฟอร์ม Nintendo Switch 
              อันโด่งดังที่มียอดดาวน์โหลดกว่า 8 ล้านครั้งทั่วโลก ล่าสุดได้มีการประกาศทำเป็นฉบับอนิเมะแล้ว! 
              ซึ่งครั้งนี้ยังมีการเผยภาพคีย์วิชวลหลักพร้อมกับเพลงประกอบออกมาด้วย 
              โดยกำหนดการฉายตอนแรกจะเป็นวันที่ 8 มกราคม 2022 ที่กำลังจะถึงนี้
              </Text>
              {/* move to Details if click */}
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Details', {
                    itemName: 'Ninjala',
                    synopsis: "Ninjala เดิมเป็นเกมแนวแอ็กชั่นต่อสู้บนแพลตฟอร์ม Nintendo Switch โดยจะเกี่ยวข้องกับเหล่าลูกหลานนินจาที่ใช้พลัง Shinobi ในการต่อสู้พร้อมกับอาวุธอย่าง “Bubble Gum” ที่สามารถแปลงสภาพเป็นอาวุธได้หลากหลายสไตล์ ซึ่งฉบับอนิเมะจะมีการโฟกัสไปที่ตัวละคร Burton กับ Berecca รวมถึงเหล่านินจาคนอื่น ๆ อย่าง Ronm, Jane, Van, Lucy, Kappei, Emma และ Gumchi",
                    descripsion: " รายชื่อตัวละครหลักของ Ninjala Burton (CV. Sakurai Takahiro) Berecca (CV. Kito Akari) แพลตฟอร์ม : Switch ",
                    image: require('../../assets/Nl1.jpg'),
                    image2: require('../../assets/Nl2.jpg'),
                      
                  })
                }
              >
                <Text style={styles.link}>Details</Text>
              </TouchableOpacity>
            </View>
          </View>


          {/* game 4 Donkey Kong Country Returns HD*/}
          <Text style={styles.gameNameMode}>Donkey Kong Country Returns HD</Text>
          <Image style={styles.Image} source={require('../../assets/Dk1.jpg')}></Image>
          <View style={styles.box}>
            <View>
              <Text style={styles.text}>
              Donkey Kong Country Returns HD คือเกมแนวแพลตฟอร์มสุดคลาสสิกที่ถูกนำมาปรับปรุงใหม่ในรูปแบบ HD โดย Retro Studios 
              และเผยแพร่โดย Nintendo ตัวเกมเป็นการรีเมคจากเวอร์ชัน Wii ที่เปิดตัวครั้งแรกในปี 2010 และได้รับการปรับปรุงกราฟิกให้สวยงามขึ้น 
              พร้อมระบบควบคุมที่ลื่นไหลกว่าเดิม เกมนี้กลับมาพร้อมกับความสนุกในแบบฉบับ Donkey Kong ที่แฟน ๆ จะต้องหลงรัก และยังเหมาะสำหรับ
              ผู้เล่นใหม่ที่อยากสัมผัสความคลาสสิกของเกมแพลตฟอร์มในยุคใหม่
              </Text>
              {/* move to Details if click */}
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Details', {
                    itemName: 'Donkey Kong Country Returns HD',
                    synopsis: "Donkey Kong Country Returns HD คือเกมแนวแพลตฟอร์มสุดคลาสสิกที่ถูกนำมาปรับปรุงใหม่ในรูปแบบ HD โดย Retro Studios และเผยแพร่โดย Nintendo ตัวเกมเป็นการรีเมคจากเวอร์ชัน Wii ที่เปิดตัวครั้งแรกในปี 2010 และได้รับการปรับปรุงกราฟิกให้สวยงามขึ้น พร้อมระบบควบคุมที่ลื่นไหลกว่าเดิม เกมนี้กลับมาพร้อมกับความสนุกในแบบฉบับ Donkey Kong ที่แฟน ๆ จะต้องหลงรัก และยังเหมาะสำหรับผู้เล่นใหม่ที่อยากสัมผัสความคลาสสิกของเกมแพลตฟอร์มในยุคใหม่",
                    descripsion: "รับบทเป็น DK และ Diddy Kong ต้องออกผจญภัยทวงคืนกล้วยที่หายไปโดยฝีมือของพวก Tiki Tak Tribe ให้ได้ โดยเกมนี้เป็นการนำเวอร์ชัน Wii มาพอร์ตลง Switch แล้วปรับปรุงภาพกราฟิกให้สวยงามไม่ตกยุค นอกจากนี้ ตัวเกมได้เพิ่มด่านเสริมที่มีให้เล่นเฉพาะเวอร์ชัน 3DS และรองรับการเล่น CO-OP 2 คนแบบ Local อีกด้วย หรือบอกได้ว่าเป็นเกมครบแพ็กเกจอย่างแท้จริง",
                    image: require('../../assets/Dk1.jpg'),
                    image2: require('../../assets/Dk2.jpg'),
                      
                  })
                }
              >
                <Text style={styles.link}>Details</Text>
              </TouchableOpacity>
            </View>
          </View>


          {/* game 5 Sniper Elite: Resistance*/}
          <Text style={styles.gameNameMode}>Sniper Elite: Resistance</Text>
          <Image style={styles.Image} source={require('../../assets/Se1.jpg')}></Image>
          <View style={styles.box}>
            <View>
              <Text style={styles.text}>
              Sniper Elite: Resistance เกมแนวแอ็คชั่นสุดมันส์ในมุมมองบุคคลที่สามเชิงกลยุทธ์ที่ในภาคนี้จะอยู่ในช่วงเดียวกันกับภาค 5 
              ผู้เล่นจะได้รับบทเป็นตัวเอกอย่าง Harry Hawker เจ้าหน้าที่หน่วยปฏิบัติการพิเศษ (SOE) ตัวเกมในภาคนี้ยังนำเสนอจุดเด่นหลักอย่างกล
              ไกการซุ่มยิง ลอบเร้น มาพร้อมโหมดผู้เล่นหลายคนและโหมด Co-op และ Invasion ภายในเกมผู้เล่นสามารถปรับแต่งอาวุธให้เหมาะสมกับรูปแบบ
              ในการปฏิบัติการหรือภารกิจที่ได้รับมอบหมาย ไม่ว่าจะเป็นปืนไรเฟิล ปืนลูกซอง และปืนพก อย่าลืมเลือกกระสุนให้เหมาะสมกับงาน เช่น กระสุนเจาะเกราะหรือ
              กระสุนสังหาร เป็นต้น เตรียมพบกับปฏิบัติการใหม่ ภัยคุกคามใหม่และแคมเปญมหากาพย์ใหม่ ใครที่เป็นแฟนซีรีส์ Sniper Elite ต้องไม่พลาดเด็ดขาด
              </Text>
              {/* move to Details if click */}
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Details', {
                    itemName: 'Sniper Elite: Resistance',
                    synopsis: "Sniper Elite: Resistance เกมแนวแอ็คชั่นสุดมันส์ในมุมมองบุคคลที่สามเชิงกลยุทธ์ที่ในภาคนี้จะอยู่ในช่วงเดียวกันกับภาค 5 ผู้เล่นจะได้รับบทเป็นตัวเอกอย่าง Harry Hawker เจ้าหน้าที่หน่วยปฏิบัติการพิเศษ (SOE) ตัวเกมในภาคนี้ยังนำเสนอจุดเด่นหลักอย่างกลไกการซุ่มยิง ลอบเร้น มาพร้อมโหมดผู้เล่นหลายคนและโหมด Co-op และ Invasion ",
                    descripsion: "ภายในเกมผู้เล่นสามารถปรับแต่งอาวุธให้เหมาะสมกับรูปแบบในการปฏิบัติการหรือภารกิจที่ได้รับมอบหมาย ไม่ว่าจะเป็นปืนไรเฟิล ปืนลูกซอง และปืนพก อย่าลืมเลือกกระสุนให้เหมาะสมกับงาน เช่น กระสุนเจาะเกราะหรือกระสุนสังหาร เป็นต้น เตรียมพบกับปฏิบัติการใหม่ ภัยคุกคามใหม่และแคมเปญมหากาพย์ใหม่ ใครที่เป็นแฟนซีรีส์ Sniper Elite ต้องไม่พลาดเด็ดขาด",
                    image: require('../../assets/Se1.jpg'),
                    image2: require('../../assets/Se2.jpg'),
                      
                  })
                }
              >
                <Text style={styles.link}>Details</Text>
              </TouchableOpacity>
            </View>
          </View>


          {/* game 6 Wuthering Waves*/}
          <Text style={styles.gameNameMode}>Wuthering Waves</Text>
          <Image style={styles.Image} source={require('../../assets/Ww1.jpg')}></Image>
          <View style={styles.box}>
            <View>
              <Text style={styles.text}>
              หลังจากที่ก่อนหน้านี้เคยเปิดให้เล่นบน PC และมือถือไปแล้ว ในที่สุด Wuthering Waves เกม Open-World Action RPG เล่นฟรีที่พัฒนาและให้บริการ
              โดย Kuro Game ก็ได้ฤกษ์เปิดให้เล่นกันบน PS5 เป็นที่เรียบร้อย ผู้เล่นจะได้รับบทบาทเป็น Rover ผู้ที่ตื่นขึ้นมาพบกับสงครามบนโลกใบใหม่ ตัวเกมเสนอ
              เรื่องราวที่มีความหลากหลาย มีอิสระในการเลือกเล่น มีตะขอเกี่ยวที่ใช้สำหรับปีนขึ้นบนกำแพง และการเดินทางในครั้งนี้จะเต็มไปด้วยการต่อสู้ แก้ปริศนาและพบปะผู้คนมากมาย</Text>
              {/* move to Details if click */}
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Details', {
                    itemName: 'Wuthering Waves',
                    synopsis: "หลังจากที่ก่อนหน้านี้เคยเปิดให้เล่นบน PC และมือถือไปแล้ว ในที่สุด Wuthering Waves เกม Open-World Action RPG เล่นฟรีที่พัฒนาและให้บริการโดย Kuro Game ก็ได้ฤกษ์เปิดให้เล่นกันบน PS5 เป็นที่เรียบร้อย ผู้เล่นจะได้รับบทบาทเป็น Rover ผู้ที่ตื่นขึ้นมาพบกับสงครามบนโลกใบใหม่ ตัวเกมเสนอเรื่องราวที่มีความหลากหลาย มีอิสระในการเลือกเล่น มีตะขอเกี่ยวที่ใช้สำหรับปีนขึ้นบนกำแพง และการเดินทางในครั้งนี้จะเต็มไปด้วยการต่อสู้ แก้ปริศนาและพบปะผู้คนมากมาย",
                    descripsion: "Wuthering Waves นั้นเป็นเกม Open-World Action RPG ที่พัฒนาและให้บริการโดย Kuro Game โดยตัวเกมนั้นจะเป็นเกม Open-World ที่เต็มไปด้วยเรื่องราว และมีอิสระในระดับสูง ซึ่งในเกมนั้นเราจะได้มารับบทบาทเป็น Rover ผู้ตื่นขึ้นมาจากการหลับใหลและได้มาพบกับโลกใบใหม่อันแสนกว้างใหญ่นี้",
                    image: require('../../assets/Ww1.jpg'),
                    image2: require('../../assets/Ww2.jpg'),
                      
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