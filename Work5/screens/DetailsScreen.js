import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function DetailsScreen({ route, navigation }) {
  const { bookId, bookTitle, bookAuthor } = route.params;

  // กำหนดรายละเอียดหนังสือตาม bookId
  let bookDetails = "";
  if (bookId === "001") {
    bookDetails =
      "Details: ระหว่างทางนั้นมีความสำคัญไม่น้อยไปกว่าปลายทางเลยเดินไปด้วยความสุขถ้าคิดแบบเก่าๆ แล้วยังไปไม่ถึงไหนก็เปลี่ยนวิธีคิดถ้าวิธีทำเหมือนเก่าแล้วผลลัพธ์ไม่เปลี่ยนแปลงก็เปลี่ยนวิธีทำถ้ามองโลกแบบเก่าแล้วยังปวดร้าวอยู่ต้องเปลี่ยนวิธีมองใช้หัวใจให้มากขึ้นชีวิตจะง่ายขึ้น";
  } else if (bookId === "002") {
    bookDetails =
      "Details: หนังสือประมวลภาพประวัติศาสตร์และพระราชพิธีเฉลิมฉลองสิริราชสมบัติ 60 ปี หนังสือจะเริ่มจัดส่งวันที่ 10 กรกฎาคม 2549";
  } else if (bookId === "003") {
    bookDetails =
      "Details: ค.ศ. 1103 เกิดเหตุการณ์ประหลาดขึ้นเมื่อมียานอวกาศหล่นโหม่งโลกกลางป่าในอังกฤษ สิ่งที่โผล่ออกมาจากยานนั้นคือ มนุษย์เรืองแสง ตัวใหญ่ยักษ์ เขาแปลกประหลาด ต่างจากมนุษย์คนอื่นๆทำให้ผู้คนล้วนแต่หวาดกลัวเขา ยกเว้น ทิลลี่ มิลเลอร์ ลูกสาวช่างโม่ที่กลายเป็นเพื่อนกับเขา เป็นมิตรภาพที่ไม่มีเส้นแบ่งแยกแม้ลักษณะทางกายภาพ หรือ ภาษาจะแตกต่างกัน";
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book Details</Text>
      <Text style={styles.text}>ID: {bookId}</Text>
      <Text style={styles.text}>Title: {bookTitle}</Text>
      <Text style={styles.text}>Author: {bookAuthor}</Text>
      {bookDetails && <Text style={styles.text}>{bookDetails}</Text>} 
      <View style={styles.buttonContainer}>
        <Button title="Go Back" onPress={() => navigation.goBack()} color="#ff0000" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#E8F4FF" }, 
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, color: "#333" },
  text: { fontSize: 18, marginBottom: 10, color: "#555" },
  buttonContainer: { marginVertical: 5 },
});
