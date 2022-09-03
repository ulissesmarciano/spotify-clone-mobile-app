import { StyleSheet } from 'react-native';

export default StyleSheet.create ({
    titleSection: {
        color: 'white',
        marginTop: 25,
        fontSize: 22,
        marginLeft: 8,
        fontWeight: 'bold',
        marginBottom: 4,
    },

    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 8,
    },

    albumScreen: {
        height: 70,
        width: 70,
    },

    titleContainer: {
        marginLeft: 12,
    },

    itemTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },

    itemSubtitle: {
        color: '#BBBBBB',
        fontSize: 16,
        fontWeight: '400',
    },

    buttonAlbunContainer: {
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderColor: '#rgb(90, 90, 90)',
        borderWidth: 1,
        borderRadius: 50,
        width: 180,
        height: 30,
    },

    albunsButton: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        
    },
});