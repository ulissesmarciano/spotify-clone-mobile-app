import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    itemContainer:{
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 15,
        marginRight: 15,
    },

    itemFilter:{
        color: '#rgb(177, 177, 177)',
        fontSize: 12,
        fontWeight: 'bold',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#rgb(98, 98, 98)',
        marginRight: 12,
        paddingLeft: 14,
        paddingRight: 14,
        paddingTop: 7,
        paddingBottom: 7,
        borderRadius: 50,
        borderWidth: 1,
    },

    baselineContainer:{
        backgroundColor: 'black',
        height: 2,
        marginTop: 10,
    },

    orderContanier: {
        flexDirection: 'row',
        marginTop: 8,
        marginLeft: 15,
        marginRight: 15,
    },

    arrowsIcon: {
        height: 25,
        width: 25,
        alignSelf: 'center',
        marginRight: 10,
    },

    titleResults: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',        
    },

    gridOrientation: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end',
    },

    gridIcon: {
        height: 25,
        width: 25,
    },

    itemListContainer: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },

    itemImage: {
        height: 55,
        width: 55,
    },

    itemImage2: {
        height: 55,
        width: 55,
        borderRadius: 100,
    },

    itemImage3: {
        height: 27.5,
        width: 27.5,
    },

    itemImageContent: {
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 28,
        fontWeight: '600',
    },

    itemImageContent2: {
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 12,
        fontWeight: '600',
    },

    itemTitleOrientation: {
        marginLeft: 10,
        alignSelf: 'center',
    },

    itemTitle: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },

    itemSubtitle: {
        color: '#rgb(98, 98, 98)',
        fontWeight: '700',
    },

});