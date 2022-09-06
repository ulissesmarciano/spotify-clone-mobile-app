import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        margin: 15,
    },

    textStyle: {
        color: '#rgb(169, 169, 169)',
        fontSize: 12,
        fontWeight: '500',
    },

    buttonTextStyle: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },

    textContainer: {
        flexDirection: 'row',
    },

    controllContainer: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },

    buttonScore: {
        flexDirection: 'row',
        backgroundColor: '#rgb(39, 39, 39)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        height: 30,
        borderRadius: 50,
    },

    textButtonScore: {
        color: 'white',
        fontSize: 14,
        fontWeight: '500',
    },

    starIcon: {
        height: 15,
        width: 15,
        marginLeft: 4,
    },

    textButtonScoreComplement: {
        color: '#rgb(169, 169, 169)',
        marginLeft: 4,
    },

    cinemaButton: {
        backgroundColor: '#rgb(39, 39, 39)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 90,
        height: 30,
        borderRadius: 50,
        marginLeft: 20,
    },

    cinemaButtonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },

    tvButton: {
        backgroundColor: '#rgb(39, 39, 39)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 30,
        borderRadius: 50,
        marginLeft: 20,
    },

    tvTextButton: {
        color: 'white',
        fontWeight: 'bold',
    },
});