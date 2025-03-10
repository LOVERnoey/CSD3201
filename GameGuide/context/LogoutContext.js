import React, { createContext, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const LogoutContext = createContext();

export const LogoutProvider = ({ children }) => {
    const navigation = useNavigation();

    const logout = async () => {
        await AsyncStorage.clear();
        Alert.alert('Success', 'Logged out successfully');
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        });
    };

    return (
        <LogoutContext.Provider value={logout}>
            {children}
        </LogoutContext.Provider>
    );
};

export const useLogout = () => useContext(LogoutContext);