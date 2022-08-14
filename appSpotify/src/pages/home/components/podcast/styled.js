import { StyleSheet } from 'react-native';

export default StyleSheet.create ({
    podcastStyle: {
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 15,
        marginRight: 15,
    },

    backImage: {
        height: 183, 
        width: 365,
    },

    textIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    allText: {
        marginLeft: 12,
    },

    descriptionPodcast: {
        fontSize: 18,
        marginTop: 10,
        color: 'white',
        fontWeight: 'bold',
    },

    titlePodcast: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },

    playIcon: {
        height: 50,
        width: 50,
        marginRight: 15,
        marginTop: 120,
    },

});