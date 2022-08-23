import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    titlePage: {
        color: 'white',
        margin: 18,
        fontSize: 22,
        fontWeight: 'bold',
    },

    itemContainer: {
        flexDirection: 'row',
        marginTop: 8,
    },

    itemImage: {
        height: 60,
        width: 60,
        marginLeft: 15,
    },

    itemImage2: {
        height: 60,
        width: 60,
        marginLeft: 15,
        borderRadius: 100,
    },

    itemOrientation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 305,
    },

    itemTitle: {
        color: 'white',
        fontSize: 18,
        marginTop: 8,
        marginLeft: 8,
        fontWeight: '700',
    },

    itemSubtitle: {
        color: '#rgb(137, 137, 137)',
        marginLeft: 8,
        fontWeight: '700',
        marginBottom: 8,
    },

    closeButton: {
        height: 20,
        width: 20,
    }
});
