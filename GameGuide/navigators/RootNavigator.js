// import React, { useEffect, useState } from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import LoginScreen from '../features/LoginScreen';
// import RegisterScreen from '../features/RegisterScreen';
// import TabNavigator from './TabNavigator';
// import DashboardScreen from '../features/DashboardScreen';

// const Stack = createStackNavigator();

// export default function AuthenticationNavigator() {
//     const [initialRoute, setInitialRoute] = useState(null);

//     useEffect(() => {
//         const checkUserRole = async () => {
//             try {
//                 const user = await AsyncStorage.getItem("user");
//                 if (!user) {
//                     setInitialRoute("Login"); // Default to login if no user is found
//                     return;
//                 }

//                 const response = await axios.get('http://192.168.1.33/api/user-role');
//                 const role = response.data.role;
//                 setInitialRoute(role === 'Admin' ? 'Dashboard' : 'Main');
//             } catch (error) {
//                 console.error('Error fetching user role:', error);
//                 setInitialRoute('Login'); // Default to login on error
//             }
//         };

//         checkUserRole();
//     }, []);

//     if (initialRoute === null) return null; // Prevent rendering until role is determined

//     return (
//         <NavigationContainer>
//             <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRoute}>
//                 <Stack.Screen name="Login" component={LoginScreen} />
//                 <Stack.Screen name="Register" component={RegisterScreen} />
//                 <Stack.Screen name="Main" component={TabNavigator} />
//                 <Stack.Screen name="Dashboard" component={DashboardScreen} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }
