import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        marginTop: 10
    },
    
    boxContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 11,
    },

    recentItemContainer: {
        backgroundColor: '#rgb(48, 48, 48)',
        flex: 1,
        borderRadius: 6,
        margin: 4,
    },

    itemOrientation:{
        flexDirection: 'row',
        alignItems: 'center',
    },

    itemScreen:{
        height: 56,
        width: 56,
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },

    itemImageContent: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },

    textBox: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 8,
    },
});