import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 22,
        margin: 8,
    },

    profileImage: {
        height: 35,
        width: 35,
        borderRadius: 100,
    },

    headTitle: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 4,
    },

    imagesIconContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end',
    },

    iconsHead: {
        marginLeft: 30,
        height: 25,
        width: 25,
        alignSelf: 'center',
    },
});