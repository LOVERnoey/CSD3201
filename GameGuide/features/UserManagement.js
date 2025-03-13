import React, { useState, useEffect } from 'react';
import {
    View, Text, TouchableOpacity, Alert, TextInput, Modal, StyleSheet, ScrollView
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { DataTable } from 'react-native-paper';
import axios from 'axios';

const API_URL = "http://192.168.1.33/game_guide/api/usermanagement/users.php";

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get(API_URL);
            setUsers(response.data.users);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    const banUser = async (user_id) => {
        try {
            const response = await axios.post("http://192.168.1.33/game_guide/api/usermanagement/ban.php", { user_id });

            if (response.data.status === "success") {
                Alert.alert("Success", response.data.message);
                fetchUsers(); // Refresh the user list
            } else {
                Alert.alert("Error", response.data.message);
            }
        } catch (error) {
            console.error("Error banning user:", error);
        }
    };


    const handleLogout = async () => {
        await AsyncStorage.clear();
        Alert.alert("Success", "Logged out successfully");

        navigation.reset({
            index: 0,
            routes: [{ name: "Login" }],
        });
    };

    const addAdmin = async () => {
        if (!email || !password) {
            Alert.alert("Error", "Please enter both email and password");
            return;
        }

        try {
            const response = await axios.post(API_URL, { email, password, role: "Admin" });

            if (response.data.status === "success") {
                Alert.alert("Success", "Admin added successfully!");
                fetchUsers();
                setEmail('');
                setPassword('');
                setModalVisible(false);
            } else {
                Alert.alert("Error", response.data.message);
            }
        } catch (error) {
            console.error("Error adding admin:", error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>User Management</Text>

            <ScrollView horizontal>
                <DataTable style={styles.table}>
                    <DataTable.Header style={styles.header}>
                        <DataTable.Title>ID</DataTable.Title>
                        <DataTable.Title>Email</DataTable.Title>
                        <DataTable.Title>Role</DataTable.Title>
                        <DataTable.Title>Created At</DataTable.Title>
                        <DataTable.Title>Actions</DataTable.Title>
                    </DataTable.Header>

                    {users.map((user) => (
                        <DataTable.Row key={user.user_id}>
                            <DataTable.Cell>{user.user_id}</DataTable.Cell>
                            <DataTable.Cell>{user.email}</DataTable.Cell>
                            <DataTable.Cell>{user.role}</DataTable.Cell>
                            <DataTable.Cell>{user.created_at}</DataTable.Cell>
                            <DataTable.Cell>
                                <TouchableOpacity style={styles.banButton} onPress={() => banUser(user.user_id)}>
                                    <Text style={styles.banText}>BAN</Text>
                                </TouchableOpacity>
                            </DataTable.Cell>
                        </DataTable.Row>
                    ))}
                </DataTable>
            </ScrollView>

            {/* Logout and Add Admin Buttons */}
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
                    <Text style={styles.buttonText}>Add Admin</Text>
                </TouchableOpacity>
            </View>

            {/* Modal for Adding Admin */}
            <Modal visible={modalVisible} transparent animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.subtitle}>Add Admin</Text>
                        <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
                        <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
                        <TouchableOpacity style={styles.modalAddButton} onPress={addAdmin}>
                            <Text style={styles.modalButtonText}>Add Admin</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                            <Text style={styles.cancelText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    table: {
        width: 800,
    },
    header: {
        backgroundColor: '#ddd',
    },
    column: {
        flex: 1,
        justifyContent: 'center',
    },
    banButton: {
        backgroundColor: 'red',
        padding: 8,
        borderRadius: 5,
    },
    banText: {
        color: 'white',
        fontWeight: 'bold',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    logoutButton: {
        backgroundColor: 'gray',
        padding: 15,
        borderRadius: 5,
        flex: 1,
        marginRight: 10,
        alignItems: 'center',
    },
    addButton: {
        backgroundColor: 'purple',
        padding: 15,
        borderRadius: 5,
        flex: 1,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
    },
    modalAddButton: {
        backgroundColor: 'purple',
        padding: 15,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
    },
    modalButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        width: '100%',
        marginBottom: 10,
    },
    cancelText: {
        marginTop: 10,
        color: 'red',
    },
});

export default UserManagement;
