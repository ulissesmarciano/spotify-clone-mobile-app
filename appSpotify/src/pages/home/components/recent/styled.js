import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    headContainer: {
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10,
    },

    title: {
        alignSelf: 'center',
        flex: 5,
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
    },

    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 3,
    },

    iconSize: {
        height: 30,
        width: 30,
    },

    boxContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 11,
        marginRight: 11,
    },

    recentItemContainer: {
        backgroundColor: '#rgb(48, 48, 48)',
        flex: 1,
        borderRadius: 6,
        margin: 4,
    },

    itemOrientation:{
        flexDirection: 'row',
        alignItems: 'center',
    },

    itemScreen:{
        height: 56,
        width: 56,
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },

    itemImageContent: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },

    textBox: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 8,
    },
});