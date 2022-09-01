import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        height: 80,
    },

    listenedContent: {
        color: '#rgb(169, 169, 169)',
        fontSize: 16,
        fontWeight: '500',
        marginTop: 5,
        marginLeft: 8,
    },
    
    controllContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    
    leftControllerOrientation: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 150,
        justifyContent: 'space-between',
        marginLeft: 8,
    },

    rightControllerOrientation: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 100,
        justifyContent: 'space-between',
        marginRight: 8,
    },



    buttonStyle: {
        borderStyle:'solid',
        borderWidth: 1.5,
        borderColor: '#BBBBBB',
        justifyContent: 'center',
        alignItems: 'center',
        height: 35,
        width: 100,
        borderRadius: 4,
    },

    textButtonStyle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },

    optionIconStyle: {
        height: 23,
        width: 23,
    },

    optionPlayIconStyle: {
        height: 50,
        width: 50,
    },
});