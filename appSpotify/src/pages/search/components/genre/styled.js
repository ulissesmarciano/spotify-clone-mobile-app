import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    title:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 15,
        marginLeft: 15,
    },

    itemContainer:{
        flex: 1,
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
        height: 100,
    },

    textItem: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 5,
    },
});