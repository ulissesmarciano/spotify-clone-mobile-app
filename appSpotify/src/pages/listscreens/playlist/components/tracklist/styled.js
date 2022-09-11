import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',
    },

    imageContainer: {
        flex: 1,
    },

    trackImage: {
        height: 70,
        width: 70,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textTrackImage: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },

    textContainer: {
        marginLeft: 10,
        flex: 4,
    },

    artistContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    title: {
        color: 'white',
        fontSize: 22,
    },

    preSubtitleBackground: {
        backgroundColor: '#rgb(169, 169, 169)',
        borderradius: 4,
        height: 15,
        paddingHorizontal: 2,
        marginLeft: 6,
    },

    preSubtitle: {
        color: '#121212',
        fontSize: 12,
        fontWeight: 'bold',
    },

    subtitle: {
        color: '#rgb(169, 169, 169)',
        marginLeft: 10,
        fontSize: 18,
    },


    optionsIcon: {
        height: 20,
        width: 20,
    }
});