import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function DetailsScreen({ route: { params: { name, image, price, description, platform } } }) {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.price}>Price: ฿{price}</Text>
            <Text style={styles.platform}>Platform: {platform}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', backgroundColor: '#ffcabf', padding: 20 },
    image: { width: 200, height: 200, borderRadius: 10, marginBottom: 20 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
    price: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 10 },
    description: { fontSize: 16, color: '#666', marginBottom: 20, textAlign: 'center' },
    platform: { fontSize: 16, fontWeight: 'bold', color: '#333' },
});
