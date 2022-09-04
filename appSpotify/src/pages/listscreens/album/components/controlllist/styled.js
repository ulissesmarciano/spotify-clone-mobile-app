import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginLeft: 8,
        marginRight: 8,
    },

    leftIconsContainer: {
        flex: 1,
        maxHeight: 55,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    rightIconsContainer: {
        flex: 2,
        maxHeight: 55,
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },

    iconsLeft: {
        height: 25,
        width: 25,
    },

    randomIconStyle: {
        height: 35,
        width: 35,
        marginRight: 15,
    },

    playIconStyle:{
        height: 55,
        width: 55,
    }
});