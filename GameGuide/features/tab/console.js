import React, { useEffect, useState } from "react";
import styles from "../../style";
import { View, Text, ImageBackground, Image, ScrollView, TouchableOpacity } from "react-native";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = "http://192.168.1.33/game_guide/gamemanagement/game.php";
const IMAGE_BASE_URL = "http://192.168.1.33/game_guide/image/";

export default function Mobile({ navigation }) {
  const [games, setGames] = useState([]);
    const [userId, setUserId] = useState(null);

  useEffect(() => {
    fetchGames();
  }, []);
  useEffect(() => {
    loadUserData();
  }, []);

  useEffect(() => {
    if (userId) {
      // If you need to fetch orders or other data related to the user, do it here
      // fetchOrders();
    }
  }, [userId]);

  const loadUserData = async () => {
    try {
      const user = await AsyncStorage.getItem("user");
      if (user) {
        const parsedUser = JSON.parse(user);
        setUserId(parsedUser.user_id); // Set user_id from parsedUser
      }
    } catch (error) {
      console.error("Error loading user data:", error);
    }
  };
  const fetchGames = async () => {
    try {
      const response = await axios.get(API_URL);
      if (response.data.status === "success") {
        const pcGames = response.data.games.filter(game => game.platform === "Console");
        setGames(pcGames);
      }
    } catch (error) {
      console.error("Error fetching games:", error);
    }
  };

  return (
    <ImageBackground source={require('../../assets/background.jpg')} style={styles.background}>
      <ScrollView>
        <View style={styles.container}>
        <View style={styles.rowContainerMode}>
                <Text style={styles.gameText}>Game </Text>
                <Text style={styles.redText}>Console</Text>
              </View>
          {games.map((game, index) => (
            <View key={index}>
              <Text style={styles.gameNameMode}>{game.game_name}</Text>
              <Image style={styles.Image} source={{ uri: IMAGE_BASE_URL + game.game_profile_pic }} />
              <View style={styles.box}>
                <View>
                  <Text style={styles.text}>{game.game_description_details_1}</Text>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('Details', {
                        itemName: game.game_name,
                        synopsis: game.game_description_details_1,
                        descripsion: game.game_description_details_2,
                        image: { uri: IMAGE_BASE_URL + game.game_profile_pic },
                        image2: { uri: IMAGE_BASE_URL + game.game_pic_details_2 },
                        game_id: game.game_id,
                        user_id: userId // Pass userId to Details
                      })
                    }
                  >
                    <Text style={styles.link}>Details</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
}