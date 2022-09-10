import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    titleSection: {
        color: 'white',
        marginTop: 15,
        fontSize: 22,
        marginLeft: 8,
        fontWeight: 'bold',
    },

    backgroundItemImage: {
        backgroundColor: 'black',
        justifyContent: 'space-between',
        borderRadius: 8,
        margin: 8,
        height: 320,
        marginTop: 20,
        
    },

    imageTextStyle: {
        color: 'white',
        fontSize: 70,
        fontWeight: 'bold',
        alignSelf: 'center',
        opacity: 0.6,
    },

    verifiedContainer: {
        flexDirection: 'row',
        margin: 8,
    },

    verifiedIcon: {
        height: 20,
        width: 20,
    },

    virifiedTitle: {
        color: 'white',
        fontSize: 16,
        marginLeft: 8,
    },

    dataContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    aboutContainer:{
        width: 300
    },

    numberListenerOrientation: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },

    monthlyListenerNumber: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 8,
    },

    monthlyListenerText: {
        color: 'white',
        marginLeft: 8,
    },

    aboutArtistText: {
        flexWrap: 'wrap',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 8,
    },

    arrouButton: {
        height: 25,
        width: 25,
        alignSelf: 'flex-end',
        marginBottom: 30,
        marginRight: 20,
    }
});