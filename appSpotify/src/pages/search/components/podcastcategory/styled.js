import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    title:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 15,
    },

    itemContainer:{
        marginTop: 15,
        marginHorizontal: 7.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    imageContainer: {
        flex: 1,
        marginHorizontal: 7.5,
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