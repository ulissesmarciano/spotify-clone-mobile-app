import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 28,
        marginLeft: 10,
        marginRight: 10,
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