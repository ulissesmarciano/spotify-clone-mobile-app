import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    titleSection: {
        color: 'white',
        marginTop: 15,
        fontSize: 22,
        marginLeft: 8,
        fontWeight: 'bold',
    },

    imageItem: {
        height: 230,
        borderRadius: 6,
        marginTop: 15,
        marginLeft: 8,
        marginRight: 8,
        backgroundColor: 'black',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },

    selectContainer:{
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 50,
        margin: 10,
        padding: 2,
    },

    avatarStyle: {
        height: 25,
        width: 25,
        borderRadius: 100,
    },

    itemSelectStyle: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 8,
        marginRight: 8,
    },

    albumContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        margin: 10,
        alignItems: 'center',
    },

    albumStyle: {
        height: 50,
        width: 50,
    },

    titleContainer: {
        marginLeft: 10,
    },

    albumTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },

    albumSubtitle: {
        color: '#BBBBBB',
        fontSize: 14,
        fontWeight: '600'
    },

});