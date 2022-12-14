import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        height: 35,
    },

    avatarStyle: {
        height: 35,
        width: 35,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textImageStyle: {
        color: 'white',
        fontWeight: 'bold',
    },

    headTitle: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 4,
    },

    buttonContainer: {
        flex: 1,
        height: 35,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },   

    iconsHead: {
        height: 25,
        width: 25,
        marginLeft: 30,
        marginRight: 10,
    },

});