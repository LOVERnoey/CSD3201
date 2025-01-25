import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";

const books = [
  { id: "001", title: "NOW I UNDERSTAND", author: "ต้นกล้า นัยนา" },
  { id: "002", title: "ประทับในใจราษฎร์ (พิมพ์กระดาษอาร์ตมัน 4 สีทั้งเล่ม)", author: "กองบรรณาธิการมติชน" },
  { id: "003", title: "บิ๊กจอร์จ", author: "Eric Pringle" },
];

export default function HomeScreen({ navigation }) {
  const renderBookItem = ({ item }) => (
    <View style={styles.bookContainer}>
      <Text style={styles.bookTitle}>{item.title}</Text>
      <Text style={styles.bookAuthor}>by {item.author}</Text>
      <Button
        title="View Details"
        onPress={() =>
          navigation.navigate("Details", {
            bookId: item.id,
            bookTitle: item.title,
            bookAuthor: item.author,
          })
        }
        color="#ff0000" 
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book Store</Text>
      <FlatList
        data={books}
        renderItem={renderBookItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#E8F4FF" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center", color: "#333" },
  listContainer: { paddingBottom: 20 },
  bookContainer: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  bookTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 5 },
  bookAuthor: { fontSize: 16, color: "#555", marginBottom: 10 },
});
