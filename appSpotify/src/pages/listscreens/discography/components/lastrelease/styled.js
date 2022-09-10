import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    title: {
        margin: 15,
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },

    container: {
        flex: 1,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },

    imageItemStyle: {
        height: 75,
        width: 75,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
    },

    textImageSyle: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },

    itemTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    },

    itemSubtitle: {
        color: '#BBBBBB',
        fontSize: 14,
        fontWeight: '600',
    }
});