import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, Image, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const Profile = ({ navigation }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        picture: "",
        name: "",
    });

    // Fetch user profile
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get("https://192.168.1.33/api/profile");
                setProfile(response.data);
            } catch (error) {
                console.error("Error fetching profile:", error);
            }
        };

        fetchProfile();
    }, []);

    // Handle profile input change
    const handleChange = (field, value) => {
        setProfile((prev) => ({ ...prev, [field]: value }));
    };

    // Save edited profile
    const handleSave = async () => {
        try {
            const response = await axios.put("https://192.168.1.33/api/saveProfile", profile);
            if (response.status === 200) {
                Alert.alert("Success", "Profile updated successfully!");
                setIsEditing(false);
            } else {
                throw new Error("Failed to save profile");
            }
        } catch (error) {
            console.error("Error saving profile:", error);
            Alert.alert("Error", "Failed to update profile.");
        }
    };

    // Logout user
    const handleLogout = async () => {
        await AsyncStorage.clear();
        Alert.alert("Success", "Logged out successfully");

        navigation.reset({
            index: 0,
            routes: [{ name: "Login" }],
        });
        // ไม่ให้ใช้ :)
        // try {
        //     const user = await AsyncStorage.getItem("user");
        //     console.log(user);

        //     await axios.post("https://192.168.1.33/api/auth/logout", { user });

        // } catch (error) {
        //     console.error("Failed to log out:", error);
        //     Alert.alert("Error", "Failed to log out");
        // }
    };

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                {/* Profile Picture */}
                <Image source={{ uri: profile.picture }} style={styles.profileImage} />

                {/* Profile Name */}
                {isEditing ? (
                    <TextInput
                        style={styles.input}
                        value={profile.name}
                        onChangeText={(text) => handleChange("name", text)}
                        placeholder="Enter your name"
                    />
                ) : (
                    <Text style={styles.profileName}>{profile.name}</Text>
                )}

                {/* Edit & Save Buttons */}
                {isEditing ? (
                    <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={styles.editButton} onPress={() => setIsEditing(true)}>
                        <Text style={styles.buttonText}>Edit</Text>
                    </TouchableOpacity>
                )}

                {/* Logout Button */}
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
    },
    profileContainer: {
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    profileName: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        width: 200,
        marginBottom: 10,
    },
    editButton: {
        backgroundColor: "#3498db",
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    saveButton: {
        backgroundColor: "#2ecc71",
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    logoutButton: {
        backgroundColor: "#e74c3c",
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },
});
