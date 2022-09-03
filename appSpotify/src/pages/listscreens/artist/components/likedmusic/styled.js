import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginLeft: 8,
        marginRight: 8,
        marginTop: 8,
    },

    artistAvatar: {
        alignItems: 'flex-end',
        flexDirection: 'row-reverse',
        height: 50,
        width: 50,
    },

    likeImage: {
        height: 20,
        width: 20,
    },

    textContainer: {
        marginLeft: 8,
    },

    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500'
    },

    subtitle: {
        color: '#BBBBBB',
        fontSize: 16,
        fontWeight: 'bold',

    },
});