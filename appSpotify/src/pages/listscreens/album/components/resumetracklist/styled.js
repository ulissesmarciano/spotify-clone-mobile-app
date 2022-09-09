import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        margin: 8,
    },

    resumeText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',        
    },

    artistContainer: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },

    avatarStyle: {
        height: 50,
        width: 50,
        borderRadius: 100,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textAvatarStyle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }
});