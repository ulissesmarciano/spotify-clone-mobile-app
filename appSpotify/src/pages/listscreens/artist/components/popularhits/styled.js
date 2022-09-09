import { StyleSheet } from 'react-native';

export default StyleSheet.create ({
    titleSection: {
        color: 'white',
        marginTop: 15,
        fontSize: 22,
        marginLeft: 8,
        fontWeight: 'bold',
    },

    itemContainer: {
        flexDirection: 'row',
        margin: 8,
        alignItems: 'center',
    },
    
    idStyle:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        flex: 1,
    },

    buttonOrientation: {
        flexDirection:'row',
        flex: 14,
    },
    
    imageMusic: {
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textImageStyle: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },

    titleContainer: {
        paddingLeft: 8,
    },

    titleItem: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },

    subtitleItem: {
        color: '#BBBBBB',
        fontSize: 16,
        fontWeight: '600'
    },

    optionsMusic: {
        height: 25,
        width: 18,
        justifyContent: 'flex-end'
    },

});