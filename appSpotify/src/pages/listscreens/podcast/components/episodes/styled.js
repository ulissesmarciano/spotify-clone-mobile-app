import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginTop: 20,
        borderRadius: 8,
    },

    titleContainer: {
        flexDirection: 'row',
    },

    itemImage: {
        height: 50,
        width: 50,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textItemImage: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },

    title: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 8,
        marginLeft: 8,
        flexWrap: 'wrap',
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

    divisionLine: {
        backgroundColor: '#rgb(39, 39, 39)',
        height: 3,
        marginTop: 8,
    }
});