import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    coverContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        height: 350,
        marginLeft: 15,
        marginRight: 15,
    },

    coverScreen: {
        height: 350,
        width: 350,
        borderRadius: 10,
    },

    controllContainer: {
        marginTop: 30,
        marginLeft: 15,
        marginRight: 15,
        height: 220,
    },

    titleContainer: {
     marginBottom: 8,
    },

    podcastTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },

    podcastSubtitle: {
        color: '#BBBBBB',
        fontSize: 14,
        fontWeight: '700',
    },

    timerContainer: {
        padding: 0,
        margin: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    time: {
        color: '#BBBBBB',
        fontWeight: '600',
    },

    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },

    marginIcon: {
        height: 20,
        width: 20,
    },

    setTimeIcon: {
        height: 40,
        width: 40,
    },

    playIcon: {
        height: 65,
        width: 65,
    },

    buttonBottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16,
    },

    bottomIconPlayersContainer: {
        flex: 4,
    },

    botomIconOrientation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    },

    bottomIcon:{
        height: 20,
        width: 20,
    }
});