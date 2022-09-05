import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        marginBottom: 50,
    },
    
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

    },

    title: {
        color: 'white',
        marginTop: 12,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    subtitle: {
        color: '#rgb(169, 169, 169)',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
    },

    arrowStyle: {
        height: 25,
        width: 25,
    },

    itemContainer: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },

    itemImage: {
        height: 65,
        width: 65,
    },

    itemTitleContainer: {
        marginLeft: 10,
        flex: 1,
    },

    titleItem: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },

    subtitleItem: {
        color: '#rgb(169, 169, 169)',
        fontSize: 18,
        fontWeight: '500',
    },

    addMusicIcon: {
        height: 18,
        width: 18,
    },

    buttonStyle: {
        backgroundColor: '#272727',
        margin: 15,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        width: 150,
        height: 50,
        borderRadius: 50,
    },

    textButtonStyle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
});