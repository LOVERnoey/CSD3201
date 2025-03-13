import React, { useEffect, useState } from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, TextInput, FlatList, KeyboardAvoidingView, Platform } from "react-native";
import styles from "../../style";
import axios from "axios";
import { FontAwesome } from "@expo/vector-icons"; // For heart icon

const API_URL_FAVORITE = "http://192.168.1.33/game_guide/api/user/favorite.php";
const API_URL_COMMENT = "http://192.168.1.33/game_guide/api/user/comment.php";

export default function Details({ route }) {
    const { itemName, synopsis, image, image2, descripsion, game_id, user_id } = route.params;

    // State variables
    const [isFavorite, setIsFavorite] = useState(false);
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState("");

    useEffect(() => {
        fetchFavoriteStatus();
        fetchComments();
    }, []);

    // ✅ Check if game is favorite
    const fetchFavoriteStatus = async () => {
        try {
            const response = await axios.get(`${API_URL_FAVORITE}?game_id=${game_id}&user_id=${user_id}`);
            setIsFavorite(response.data.isFavorite ?? false);
        } catch (error) {
            console.error("Error fetching favorite status:", error);
        }
    };

    // ✅ Toggle favorite
    const toggleFavorite = async () => {
        try {
            if (isFavorite) {
                await axios.delete(API_URL_FAVORITE, { data: { game_id, user_id } });
            } else {
                await axios.post(API_URL_FAVORITE, { game_id, user_id });
            }
            fetchFavoriteStatus(); // Re-fetch favorite status after API call
        } catch (error) {
            console.error("Error toggling favorite:", error);
        }
    };

    // ✅ Fetch comments
    const fetchComments = async () => {
        try {
            const response = await axios.get(`${API_URL_COMMENT}?game_id=${game_id}`);
            setComments(Array.isArray(response.data.comments) ? response.data.comments : []);
        } catch (error) {
            console.error("Error fetching comments:", error);
        }
    };

    // ✅ Post a comment
    const postComment = async () => {
        if (!commentText.trim()) return;
        try {
            await axios.post(API_URL_COMMENT, { game_id, user_id, comment_text: commentText });
            setCommentText("");
            fetchComments(); // Refresh comments
        } catch (error) {
            console.error("Error posting comment:", error);
        }
    };

    const handleCommentChange = (text) => {
        setCommentText(text);
    };
    

    const renderHeader = () => (
        <View>
            {/* Title & Favorite Button */}
            <View style={styles.titleContainer}>
                <Text style={styles.nameGameDetails}>{itemName}</Text>
                <TouchableOpacity onPress={toggleFavorite} style={styles.heart}>
                    <FontAwesome name="heart" size={30} color={isFavorite ? "red" : "gray"} />
                </TouchableOpacity>
            </View>

            {/* Game Images & Description */}
            <Image source={image} style={styles.Image} />
            <View style={styles.box}><Text style={styles.text}>{synopsis}</Text></View>
            <Image source={image2} style={styles.Image} />
            <View style={styles.box}><Text style={styles.text}>{descripsion}</Text></View>
        </View>
    );

    return (
        <ImageBackground source={require('../../assets/background.jpg')} style={styles.background}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                <FlatList
                    ListHeaderComponent={renderHeader}
                    data={comments}
                    keyExtractor={(item) => item.comment_id ? item.comment_id.toString() : Math.random().toString()}
                    renderItem={({ item }) => (
                        <View style={styles.commentBox}>
                            <Text style={styles.commentUser}>{item.username} - {item.time_stamp}</Text>
                            <Text style={styles.commentText}>{item.comment_text}</Text>
                        </View>
                    )}
                    keyboardShouldPersistTaps="handled"
                />
                {/* Comment Input */}
                <View style={styles.addCommentContainer}>
                    <TextInput
                        style={styles.commentInput}
                        placeholder="Write a comment..."
                        placeholderTextColor="#888"
                        value={commentText}
                        onChangeText={handleCommentChange} // ✅ This updates the state properly
                        multiline={true}
                        // autoFocus={true}
                    />
                    <TouchableOpacity onPress={postComment} style={styles.commentButton}>
                        <Text style={styles.commentButtonText}>Post Comment</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
}

const extraStyles = {
    heart: {
        paddingRight : 50,
        paddingTop: 40
    },
    titleContainer: { 
        flexDirection: "row", 
        justifyContent: "", 
        alignItems: "center", 
        paddingHorizontal: 30
    },
    addCommentContainer: { 
        padding: 15, 
        backgroundColor: "#333", // Dark background like the image
        borderRadius: 10, 
        margin: 10 
    },
    commentInput: { 
        backgroundColor: "#444", // Slightly lighter than the container
        color: "white",
        padding: 12, 
        borderRadius: 8, 
        marginBottom: 10,
        maxHeight: 100 // Limit height for better UX
    },
    commentButton: { 
        backgroundColor: "#555", // Darker button
        padding: 10, 
        borderRadius: 5,
        alignItems: "center" 
    },
    commentButtonText: { 
        color: "white", 
        fontWeight: "bold" 
    },
    commentBox: { 
        backgroundColor: "#222", // Dark box for comments
        padding: 15, 
        borderRadius: 10, 
        marginVertical: 5
    },
    commentUser: { 
        color: "white", 
        fontWeight: "bold", 
        marginBottom: 5, 
        borderBottomWidth: 1, 
        borderBottomColor: "#555", 
        paddingBottom: 5 
    },
    commentText: { 
        color: "#bbb", // Light grey text 
        marginTop: 5 
    }
};

// ✅ Merge the styles
Object.assign(styles, extraStyles);