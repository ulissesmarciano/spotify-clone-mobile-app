import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginLeft: 8,
        marginRight: 8,
        marginTop: 8,
    },

    artistAvatar: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: 50,
        width: 50,
        borderRadius: 100,
    },

    textImageStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    },

    likeImage: {
        height: 20,
        width: 20,
        alignSelf: 'flex-end',
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