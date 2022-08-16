import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    headOrientation: {
        flexDirection: 'row',
      },
  
      avatar: {
        alignSelf: 'center',
        height: 50,
        width: 50,
        borderRadius: 100,
    },

    container: {
        marginTop: 15,
        marginLeft: 15,
    },

    containerOrientation: {
        flexDirection: 'row',
    },

    supTitle: {
        marginLeft: 12,
        color: '#rgb(135, 135, 135)',
        fontSize: 16,
        fontWeight: 'bold',
    },

    item:{
        width: 160,
        marginRight: 12,
    },

    title: {
        marginLeft: 12,
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
    },
    
    imageItem: {
        marginTop: 15,
        height: 160,
        width: 160,
    },

    albumTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 15,
    },

    albumSubtitle: {
        color: '#rgb(135, 135, 135)',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 2,
    },
});