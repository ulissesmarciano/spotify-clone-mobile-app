import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#rgb(39, 39, 39)',
        marginHorizontal: 15,
        padding: 15,
        borderRadius: 8,
    },

    title: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },

    subtitle:{
        color: '#rgb(169, 169, 169)',
        fontSize: 13,
        marginBottom: 8,
        fontWeight: '500',
    },

    controllContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    leftIconsContainer: {
        flexDirection: 'row',
        flex: 1,
    },

    leftIcons: {
        height: 25,
        width: 25,
        marginRight: 25,
    },

    playIcon: {
        height: 35,
        width: 35,
    },
});