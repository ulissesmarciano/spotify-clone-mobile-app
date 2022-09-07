import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },

    searchInputStyle: {
        backgroundColor: '#rgb(39, 39, 39)',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        borderRadius: 8,
        height: 40,
        flex: 1,
    },

    textInputStyle: {
        fontWeight: 'bold',
        flexDirection: 'row',
        color: 'white',
        marginLeft: 6,
        fontSize: 12,
        flex: 1,
    },

    imagePlaceholder: {
        height: 20,
        width: 20,
    },

    buttonStyle: {
        backgroundColor: '#rgb(39, 39, 39)',
        height: 40,
        justifyContent: 'center',
        marginLeft: 10,
        borderRadius: 6,
        paddingHorizontal: 15,
    },

    buttonText: {
        color: '#rgb(169, 169, 169)',
        fontWeight: 'bold',
        fontSize: 12,
    },
});