import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        margin: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },

    titleContainer: {
        flex: 1,
    },

    titleStyle: {
        color: 'white',
        fontSize: 36,
        fontWeight: 'bold',
    },

    subtitleStyle: {
        color: '#BBBBBB',
        fontSize: 11,
        fontWeight: 'bold',
    },

    numbersContainer: {
        backgroundColor: '#4687d6',
        height: 80,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },
    
    numbersTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },

    numbersSubtitle: {
        color: 'white',
        fontSize: 10,
        fontWeight: '500',
    }
});