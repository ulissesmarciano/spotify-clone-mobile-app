import { StyleSheet } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

export default StyleSheet.create({

    headContainer: {
        margin: 8,
    },

    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginTop: 36,
    },

    headImage: {
        height: 220,
        width: 220,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textImageStyle: {
        color: 'white',
        fontSize: 90,
    },

    albumNameStyle: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 18,
    },

    artistContainerOrientation: {
        flexDirection: 'row',
        marginTop: 12,
    },

    avatarImage: {
        height: 24,
        width: 24,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textAvatarStyle: {
        color: 'white',
        fontWeight: 'bold',
    },

    nameArtistStyle: {
        color: 'white',
        marginLeft: 8,
        fontSize: 18,
        fontWeight: 'bold',
    },

    subtitleStyle: {
        color: '#AAAAAA',
        fontSize: 18,
        fontWeight: '500',
        marginTop: 8,
    },
});