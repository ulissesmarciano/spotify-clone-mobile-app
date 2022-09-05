import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    buttonContainer: {
        borderStyle: 'solid',
        borderWidth: 1.2,
        borderRadius: 50,
        borderColor: '#rgb(169, 169, 169)',
        height: 30,
        paddingHorizontal: 10,
    },

    textButon: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },

    leftButton: {
        height: 25,
        width: 25,
    },

    playButton: {
        height: 50,
        width: 50,
    },

    buttonAddContainer: {
        alignItems: 'center',
        marginTop: 15,
    },
    
    buttonAddStyle: {
        borderStyle: 'solid',
        borderColor: '#rgb(148, 148, 148)',
        borderWidth: 1.5,
        borderRadius: 40,
        height: 35,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },

    textButtonAdd: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
});