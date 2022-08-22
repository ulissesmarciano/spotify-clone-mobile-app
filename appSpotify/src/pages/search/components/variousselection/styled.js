import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    title:{
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 15,
    },

    imageContainer:{
        marginTop: 15,
        marginHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    item: {
        width: 175,
        height: 100,
    },

    textItem: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 5,
    },
});