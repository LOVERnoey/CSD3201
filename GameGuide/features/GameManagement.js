import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, FlatList, Image, TouchableOpacity, Modal, StyleSheet, ScrollView } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const API_URL = "http://192.168.1.33/game_guide/gamemanagement/game.php";
const IMAGE_BASE_URL = "http://192.168.1.33/game_guide/image/";

const GameManagement = () => {
    const navigation = useNavigation();
    const [games, setGames] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedGame, setSelectedGame] = useState(null);
    const [gameName, setGameName] = useState("");
    const [gameFont, setGameFont] = useState("");
    const [gameDescription1, setGameDescription1] = useState("");
    const [gameDescription2, setGameDescription2] = useState("");

    useEffect(() => {
        fetchGames();
    }, []);

    const fetchGames = async () => {
        try {
            const response = await axios.get(API_URL);
            if (response.data.status === "success") {
                setGames(response.data.games);
            }
        } catch (error) {
            console.error("Error fetching games:", error);
        }
    };

    const deleteGame = async (gameId) => {
        try {
            await axios.delete(API_URL, { data: { game_id: gameId } });
            fetchGames();
        } catch (error) {
            console.error("Error deleting game:", error);
        }
    };

    const openEditModal = (game) => {
        setSelectedGame(game);
        setGameName(game.game_name);
        setGameFont(game.game_description_font);
        setGameDescription1(game.game_description_details_1);
        setGameDescription2(game.game_description_details_2);
        setModalVisible(true);
    };

    const updateGame = async () => {
        try {
            await axios.put(API_URL, {
                game_id: selectedGame.game_id,
                game_name: gameName,
                game_description_font: gameFont,
                game_description_details_1: gameDescription1,
                game_description_details_2: gameDescription2,
            });
            fetchGames();
            setModalVisible(false);
        } catch (error) {
            console.error("Error updating game:", error);
        }
    };

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Game Management</Text>

            {/* Table Header */}
            <View style={styles.tableHeader}>
                <Text style={[styles.headerCell, { flex: 2 }]}>Game</Text>
                <Text style={styles.headerCell}>Font</Text>
                <Text style={styles.headerCell}>Actions</Text>
            </View>

            {/* Table Body */}
            <FlatList
                data={games}
                keyExtractor={(item) => item.game_id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.tableRow}>
                        <View style={[styles.cell, { flex: 2, flexDirection: "row", alignItems: "center" }]}>
                            <Image source={{ uri: IMAGE_BASE_URL + item.game_profile_pic }} style={styles.gameImage} />
                            <Text style={styles.gameTitle}>{item.game_name}</Text>
                        </View>
                        <Text style={styles.cell}>{item.game_description_font}</Text>
                        <View style={styles.cell}>
                            <TouchableOpacity onPress={() => openEditModal(item)} style={styles.editButton}>
                                <Text style={styles.buttonText}>Edit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => deleteGame(item.game_id)} style={styles.deleteButton}>
                                <Text style={styles.buttonText}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />

            {/* Edit Game Modal */}
            <Modal visible={modalVisible} transparent animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <ScrollView>
                            <TextInput value={gameName} onChangeText={setGameName} placeholder="Game Name" style={styles.input} />
                            <TextInput value={gameFont} onChangeText={setGameFont} placeholder="Game Font" style={styles.input} />
                            <TextInput value={gameDescription1} onChangeText={setGameDescription1} placeholder="Description 1" style={styles.input} />
                            <TextInput value={gameDescription2} onChangeText={setGameDescription2} placeholder="Description 2" style={styles.input} />
                            <Button title="Save Changes" onPress={updateGame} />
                            <Button title="Cancel" onPress={() => setModalVisible(false)} color="red" />
                        </ScrollView>
                    </View>
                </View>
            </Modal>

            {/* Add Game Button */}
            <TouchableOpacity onPress={() => navigation.navigate("AddGame")} style={styles.addButton}>
                <Text style={styles.buttonText}>+ Add Game</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: "#fff" },
    backButton: { backgroundColor: "#ccc", padding: 10, borderRadius: 5, marginBottom: 10 },
    title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
    
    /* Table Styles */
    tableHeader: { flexDirection: "row", backgroundColor: "#ddd", padding: 10, borderRadius: 5 },
    headerCell: { flex: 1, fontWeight: "bold", textAlign: "center" },
    tableRow: { flexDirection: "row", paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: "#ccc", alignItems: "center" },
    cell: { flex: 1, textAlign: "center", paddingHorizontal: 5 },

    /* Game Image */
    gameImage: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
    gameTitle: { fontSize: 16, fontWeight: "bold" },

    /* Buttons */
    editButton: { backgroundColor: "blue", padding: 5, borderRadius: 5, marginBottom: 5 },
    deleteButton: { backgroundColor: "red", padding: 5, borderRadius: 5 },
    addButton: { backgroundColor: "#63009E", padding: 10, marginTop: 20, borderRadius: 5 },

    /* Modal */
    modalContainer: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)" },
    modalContent: { width: 300, padding: 20, backgroundColor: "white", borderRadius: 10 },
    input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 10, borderRadius: 5 },

    /* Button Text */
    buttonText: { color: "#fff", textAlign: "center" },
});

export default GameManagement;