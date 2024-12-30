import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    ActivityIndicator,
    ScrollView,
} from "react-native";

const App = () => {
    const [loading, setLoading] = useState(true);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Header */}
            <Text style={styles.title}>Image Examples</Text>
            <Text style={styles.subtitle}>Programmer Name: Woraphon Udom</Text>

            {/* Local Image Example */}
            <Text style={styles.sectionTitle}>Local Image Example</Text>
            <Image source={require("../assets/local-image.png")} style={styles.image} />

            {/* Remote Image Example */}
            <Text style={styles.sectionTitle}>Remote Image Example</Text>
            <Image
                source={{
                    uri: "https://i.pinimg.com/736x/87/d3/eb/87d3ebd45e7a220c07b930f898c570a3.jpg",
                }}
                style={styles.image}
            />

            {/* Image Background Example */}
            <Text style={styles.sectionTitle}>Image Background Example</Text>
            <ImageBackground
                source={{
                    uri: "https://t3.ftcdn.net/jpg/00/57/08/46/360_F_57084608_ciyjhtwgdKSjeZwhDTNDyuMdWik8gNF9.jpg",
                }}
                style={styles.imageBackground}
            >
                <Text style={styles.overlayText}>Hello on Background!</Text>
            </ImageBackground>

            {/* Placeholder Image Example */}
            <Text style={styles.sectionTitle}>Placeholder Image Example</Text>
            {loading && <ActivityIndicator size="large" color="#0000ff" />}
            <Image
                source={{
                    uri: "https://www.veipd.org/earlyintervention/wp-content/uploads/2015/12/gift-281x300.jpg",
                }}
                style={styles.image}
                onLoadEnd={() => setLoading(false)}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: "#f0f8ff",
        alignItems: "center",
    },
    title: {
        top: 20,
        padding: 20,
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#004080",
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 20,
        color: "#555",
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 10,
        color: "#006400",
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
    },
    imageBackground: {
        width: 300,
        height: 300,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        borderRadius: 15,
        overflow: "hidden",
    },
    overlayText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },
});

export default App;
