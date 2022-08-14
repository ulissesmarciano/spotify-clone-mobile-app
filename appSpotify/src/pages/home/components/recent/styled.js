import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    headContainer: {
        marginTop: 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 15,
        marginRight:15,
    },

    titleRcent: {
        color: 'white',
        fontSize: 34,
        fontWeight: 'bold',
    },

    iconsHeader: {
        flexDirection: 'row',
        minWidth: 120,
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    iconSize: {
        width: 30,
        height: 30,
    },

    boxContent: {
        flexDirection: 'row',
        marginLeft: 13,
        marginRight: 13,
        justifyContent: 'space-between',
    },

    recentItem: {
        flexDirection: 'row',
        backgroundColor: '#rgb(42, 42, 42)',
        marginTop: 10,
        width: 180,
        height: 60,
        borderRadius: 4,
    },

    imageContainer: {
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        width: 60,
        height: 60,
    },

    textBox: {
        marginLeft: 8,
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
});