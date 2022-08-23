import { StyleSheet } from "react-native";

export default StyleSheet.create({
    backInputStyle: {
        backgroundColor: '#rgb(41, 41, 41)',
        height: 70,
    },

    sectionStyle: {
        flexDirection: 'row', 
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#rgb(83, 83, 83)',
        borderWidth: 0.5, 
        borderColor: '#000', 
        height: 50, 
        borderRadius: 5, 
        margin: 8, 
    },

    textInputStyle: {
        flex: 1,
        backgroundColor: '#rgb(83, 83, 83)',
        padding: 15,
        borderRadius: 5,
        fontSize: 18,
        fontWeight: 'bold',
    },

    imageContainer: {
        justifyContent: "flex-end",
        backgroundColor: '#rgb(83, 83, 83)',
        padding: 8,
        margin: 8,
        height: 45,
    },

    imageInputStyle: {
        marginRight: 15,
        height: 30,
        width: 30,
    },
        
});