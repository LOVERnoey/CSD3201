import React, { useEffect, useState } from "react";
import { View, FlatList, TouchableOpacity, Image, ImageBackground, Text } from "react-native";
import styles from "../../style";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL_FAVORITE = "http://192.168.1.33/game_guide/api/user/favorite.php";
const IMAGE_BASE_URL = "http://192.168.1.33/game_guide/image/";

export default function Favorite({ navigation }) {
    const [favoriteGames, setFavoriteGames] = useState([]);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        loadUserData();
    }, []);

    useEffect(() => {
        if (userId) {
            fetchFavoriteGames();
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

    // ✅ Fetch user's favorite games
    const fetchFavoriteGames = async () => {
        try {
            const response = await axios.get(`${API_URL_FAVORITE}?user_id=${userId}`);
            if (response.data.status === "success") {
                setFavoriteGames(response.data.games);
            } else {
                console.log("No favorite games found.");
            }
        } catch (error) {
            console.error("Error fetching favorite games:", error);
            setFavoriteGames([]); // If there's an error, set to empty array
        }
    };

    // ✅ Render each favorite game profile image with navigation to Details.js
    const renderFavoriteGame = ({ item }) => (
        <TouchableOpacity
            onPress={() =>
                navigation.navigate('Details', {
                    itemName: item.game_name,
                    synopsis: item.game_description_details_1,
                    descripsion: item.game_description_details_2,
                    image: { uri: IMAGE_BASE_URL + item.game_profile_pic },
                    image2: { uri: IMAGE_BASE_URL + item.game_pic_details_2 },
                    game_id: item.game_id,
                    user_id: userId // Pass userId to Details
                })
            }
            style={styles.favoriteItemContainer}
        >
            <Image
                source={{ uri: IMAGE_BASE_URL + item.game_profile_pic }}
                style={styles.favoriteGameImage}
                resizeMode="cover"
            />
        </TouchableOpacity>
    );

    return (
        <ImageBackground source={require('../../assets/background.jpg')} style={styles.background}>
            <FlatList
                data={favoriteGames}
                keyExtractor={(item) => item.game_id.toString()}
                renderItem={renderFavoriteGame}
                numColumns={3} // Show as grid
                contentContainerStyle={styles.favoriteListContainer}
                ListEmptyComponent={<Text style={styles.noFavoriteText}>No favorite games found.</Text>}
            />
        </ImageBackground>
    );
}

const extraStyles = {
    favoriteItemContainer: { 
        flex: 1, 
        margin: 5 
    },
    favoriteGameImage: { 
        width: '100%', 
        height: 150 
    },
    favoriteListContainer: { 
        padding: 10 
    },
    noFavoriteText: { 
        textAlign: 'center', 
        marginTop: 20, 
        fontSize: 18, 
        color: '#fff' 
    }
};

// Merge the styles
Object.assign(styles, extraStyles);