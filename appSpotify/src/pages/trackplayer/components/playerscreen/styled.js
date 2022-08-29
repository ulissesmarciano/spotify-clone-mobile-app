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
        marginTop: 25,
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

    sliderStyle: {
        
    },

    controlArea: {
        backgroundColor: 'red',
        flex: 3,
    },

    lyricsContainer: {
        height: 500,
        backgroundColor: 'blue',
    }
});