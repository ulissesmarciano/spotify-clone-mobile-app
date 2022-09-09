import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    headContainer: {
        backgroundColor: 'black',
        height: 280,
        alignItems: 'center',        
    },

    artistPhoto: {
        height: 280,
        width: 400,
    },

    titleContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    textImageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    title: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 6,
    }
});