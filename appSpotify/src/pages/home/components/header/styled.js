import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 55,
        marginHorizontal: 11,
        alignItems: 'center',
    },

    titleContainer: {
        flex: 5,
    },

    title: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
    },

    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 3,
    },

    iconStyle: {
        height: 30,
        width: 30,
    },
    
});