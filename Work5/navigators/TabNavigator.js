import React from 'react'; // น าเข ้า React เพอื่ ใชง้านคอมโพเนนต์
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // น าเข ้า Bottom Tab Navigator
import HomeScreen from '../features/home/HomeScreen'; // น าเข ้าหน้าจอ Home
import ProfileScreen from '../features/profile/ProfileScreen'; // น าเข ้าหน้าจอ Profile
import SettingsScreen from '../features/settings/SettingsScreen'; // น าเข ้าหน้าจอ Settings
import { Ionicons } from '@expo/vector-icons'; // น าเขา้ไลบรารสี าหรับแสดงไอคอนใน Tab Bar
// สร ้างตัวแปร Tab ส าหรับจดั การ Tab Navigation
const Tab = createBottomTabNavigator();
export default function TabNavigator() {
    return (
    // เริ่มต ้น Tab Navigator
    <Tab.Navigator
    // screenOptions: ใชก้ าหนดการตงั้คา่ ทวั่ ไปของทกุ Tab
    screenOptions={({ route }) => ({
    // tabBarIcon: กา หนดไอคอนสา หรับแตล่ ะ Tab
    tabBarIcon: ({ focused, color, size }) => {
    let iconName; // ตัวแปรส าหรับเก็บชอื่ ไอคอน
    // ตรวจสอบชอื่ Route และกา หนดไอคอนตามชอื่
    if (route.name === 'Home') {
    iconName = focused ? 'home' : 'home-outline'; // ไอคอน Home
    } else if (route.name === 'Profile') {
    iconName = focused ? 'person' : 'person-outline'; // ไอคอน Profile
    } else if (route.name === 'Settings') {
    iconName = focused ? 'settings' : 'settings-outline'; // ไอคอน Settings
    }
    // คืนค่าไอคอนที่ก าหนดไว ้
    return <Ionicons name={iconName} size={size} color={color} />;
    },
    // ก าหนดสเีมอื่ Tab อยู่ในสถานะ Active หรือ Inactive
    tabBarActiveTintColor: 'tomato', // สไีอคอนเมอื่ Tab ถูกเลือก
    tabBarInactiveTintColor: 'gray', // สไีอคอนเมอื่ Tab ไม่ถูกเลือก
    })}
    >
    {/* ก าหนด Tab แรก: Home */}
    <Tab.Screen
    name="Home" // ชอื่ ของ Tab
    component={HomeScreen} // คอมโพเนนต์ที่จะแสดงเมื่อเลือก Tab นี้
    />
    {/* ก าหนด Tab ที่สอง: Profile */}
    <Tab.Screen
    name="Profile" // ชอื่ ของ Tab
    component={ProfileScreen} // คอมโพเนนต์ที่จะแสดงเมื่อเลือก Tab นี้
    />
    {/* ก าหนด Tab ที่สาม: Settings */}
    <Tab.Screen
    name="Settings" // ชอื่ ของ Tab
    component={SettingsScreen} // คอมโพเนนต์ที่จะแสดงเมื่อเลือก Tab นี้
    />
    </Tab.Navigator>
    );
    }