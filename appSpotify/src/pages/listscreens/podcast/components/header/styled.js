import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        marginTop: 50,
        marginHorizontal: 15,
    },

    headContainer: {
        flexDirection: 'row',
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

    podcastHeaderImage: {
        height: 170,
        width: 170,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textHeaderImage: {
        color: 'white',
        fontSize: 60,
        fontWeight: 'bold',
    },

    titleContainer: {
        marginLeft: 15,
    },

    title: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },

    subtitle: {
        color: 'white',
        marginTop: 15,
    },

    controllContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 15,
    },

    controllIcon: {
        marginLeft: 30,
        height: 28,
        width: 28,
    },

    followButtonStyle: {
        borderStyle: 'solid',
        borderColor: '#rgb(169, 169, 169)',
        borderWidth: 1,
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 6,
    },

    followButtonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: '500'
    }
});