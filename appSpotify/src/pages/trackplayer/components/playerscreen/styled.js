import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    screenContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        height: 380,
    },

    coverScreen: {
        height: 350,
        width: 350,
    },

    playerContainer: {
        alignItems: 'center',
        height: 220,
    },

    buttonPlayerScreen: {
        marginTop: 20,
        width: 330,
        height: 220,
    },

    tittleArea:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    title: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },

    subTitle:{
        color: '#bbb',
        fontSize: 14,
        fontWeight: 'bold',
    },

    likeIcon: {
        width: 20,
        height: 20,
    },

    timeContainer: {
        marginTop: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    timeStyle: {
        color: '#bbb',
        fontSize: 14,
        fontWeight: '500'
    },

    sliderContainer: {
        flex: 1,
        justifyContent: 'center',
    },

    controlArea: {
        flex: 3,        
    },

    buttonTrackArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    borderControllers: {
        height: 30,
        width: 30,
    },

    trackButton: {
        height: 30,
        width: 30,
    },

    playButton: {
        height: 70,
        width: 70,
    },

    shareIcons:{
        height: 20,
        width: 20,
    },

    shareControls: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    dispositiveOrientation: {
        flex: 4,
    },

    shareListOrientation: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    lyricsContainer: {
        height: 500,
        backgroundColor: 'blue',
    },
});