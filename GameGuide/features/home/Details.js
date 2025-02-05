import React from 'react';
import { View, Text, Image, ScrollView, ImageBackground } from 'react-native';
import styles from "../../style";

export default function Details({ route }) {
    const { itemName, synopsis, image, image2, descripsion } = route.params;

    return (
        <ImageBackground source={require('../../assets/background.jpg')} style={styles.background}>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.nameGameDetails}>{itemName}</Text>
                    <Image source={image} style={styles.Image} />
                    <View style={styles.box}>
                        <Text style={styles.text}>{synopsis}</Text>
                    </View>
                    <View style={styles.container}>
                        <Image source={image2} style={styles.Image} />
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.text}>{descripsion}</Text>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}
