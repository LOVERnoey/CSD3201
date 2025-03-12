import { ImageBackground, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        alignItems: "center",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#fff",
        fontFamily: "Roboto",
    },
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        opacity: 1,
    },
    box: {
        backgroundColor: "rgba(52, 50, 62, 0.8)",
        borderRadius: 10,
        padding: 10,
        margin: 15,
    },
    text: {
        fontSize: 15,
        color: "#fff",
        fontFamily: "Roboto",
    },

    head: {//head use in HomeScreen
        fontSize: 28,
        fontWeight: "bold",
        color: "#fff",
        fontFamily: "Roboto",
    },
    Image: {
        width: 335,
        height: 200,
        marginLeft: 30,
    },
    rowContainer: {
        flexDirection: "row",
        paddingLeft: 40,
        paddingBottom: 5,
        width: "100%",
    },
    gameText: {//Text game white color  
        fontSize: 30,
        color: "#fff",
        fontFamily: "Roboto",
        fontWeight: "bold",
    },
    redText: {//Text PC Mobile Console red color 
        fontSize: 30,
        color: "red",
        fontFamily: "Roboto",
        fontWeight: "bold",
    },
    gameNameHome: {//Text name of game 
        fontSize: 28,
        color: "#fff",
        fontFamily: "Roboto",
        marginBottom: 25,
    },

    //For mobile pc console
    //name mobile pc console
    rowContainerMode: {
        flexDirection: "row",
        paddingRight: 180,
        paddingTop: 10,
    },
    //name game
    gameNameMode: {
        fontSize: 28,
        color: "#fff",
        fontFamily: "Roboto",
        width: "100%",
        paddingLeft: 26,
    },
    //Link Details
    link: {
        color: "#00FFA6",
        fontWeight: "bold",
    },
    nameGameDetails: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#fff",
        fontFamily: "Roboto",
        paddingTop: 40,
        width: "100%",
        paddingLeft: 40,
    },
    logoutButton: {
        flex: 1,
        marginTop: 10,
        marginLeft: "60%",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        width: 150,
        borderRadius: 15,
        marginTop: 10,
        backgroundColor: "red",
    },
    buttonText: {
        color: "white",
        fontSize: 24,
        fontWeight: 700,
    }

});

export default styles;