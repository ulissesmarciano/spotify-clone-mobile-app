import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10,

    },

    headerScreenOrientation: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'center',
    },

    headerImage: {
        height: 85,
        width: 85,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textHeaderImage: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },

    titleContainer: {
        flex: 1,
        flexDirection: 'row',
    },

    titleStyle: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 10,        
    },

    userOrientation: {
        marginTop: 10,
        flexDirection: 'row',
    },

    avatarStyle: {
        height: 25,
        width: 25,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },

    avatarTextStyle: {
        color: 'white',
        fontWeight: 'bold',
    },

    nameUserStyle: {
        color: 'white',
        fontSize: 16,
        marginLeft: 8,
        fontWeight: 'bold',
    },

    timeContainerOrientation: {
        flexDirection: 'row',
        marginTop: 10,
    },

    timeImage: {
        height: 20,
        width: 20, 
    },

    timeText: {
        color: '#rgb(169, 169, 169)',
        fontSize: 16,
        marginLeft: 8,
        fontWeight: '500',
    },
});