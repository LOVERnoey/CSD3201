import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Modal, StyleSheet } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import axios from 'axios';

const API_URL = "http://192.168.1.33/game_guide/api/usermanagement/users.php";

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [adminName, setAdminName] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get(API_URL);
            setUsers(response.data);
        } catch (error) {
            console.error(error);
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
        try {
            await axios.post(API_URL, { username: adminName, password, role: 'Admin' });
            fetchUsers();
            setAdminName('');
            setPassword('');
            setModalVisible(false);
        } catch (error) {
            console.error(error);
        }
    };

    const banUser = async (id) => {
        try {
            await axios.post(`${API_URL}/ban.php`, { id });
            fetchUsers();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>DASHBOARD</Text>
                <Text style={styles.subtitle}>User Management</Text>

                <FlatList
                    data={users}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.userRow}>
                            <Text>{item.id}</Text>
                            <Text>{item.username}</Text>
                            <Text>{item.role}</Text>
                            <TouchableOpacity style={styles.banButton} onPress={() => banUser(item.id)}>
                                <Text style={styles.buttonText}>BAN</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />

                <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
                    <Text style={styles.buttonText}>Add Admin</Text>
                </TouchableOpacity>

                {/* Modal for Adding Admin */}
                <Modal visible={modalVisible} transparent animationType="slide">
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.subtitle}>Add Admin</Text>
                            <TextInput placeholder="Admin Name" value={adminName} onChangeText={setAdminName} style={styles.input} />
                            <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
                            <TouchableOpacity style={styles.addButton} onPress={addAdmin}>
                                <Text style={styles.buttonText}>Add Admin</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <Text style={styles.cancelText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                                <Text style={styles.buttonText}>Logout</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    userRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
    },
    banButton: {
        backgroundColor: 'red',
        padding: 10,
    },
    addButton: {
        backgroundColor: 'purple',
        padding: 15,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        width: '100%',
        marginBottom: 10,
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
    cancelText: {
        marginTop: 10,
        color: 'red',
    },
});

export default UserManagement;
