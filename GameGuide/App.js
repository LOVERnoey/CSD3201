import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthenticationNavigator from './navigators/AuthenticationNavigator';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem("user");
        console.log("User from App: ", storedUser);
        
        if (storedUser) {
          setUser(JSON.parse(storedUser)); // แปลงจาก string -> object
        }
      } catch (error) {
        console.error("Error loading user:", error);
      }
      setIsLoading(false); // โหลดเสร็จแล้ว
    };

    checkUser();
  }, []);

  if (isLoading) return null; // กันการโหลด UI ก่อนเช็ค user

  return (
    <NavigationContainer>
      <AuthenticationNavigator user={user} />
    </NavigationContainer>
  );
}
