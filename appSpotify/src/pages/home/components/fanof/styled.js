import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        marginTop: 15,
        marginLeft: 15,
    },

    headOrientation: {
        flexDirection: 'row',
        alignItems: 'center',
    },
  
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textAvatarImage: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },


    containerOrientation: {
        flexDirection: 'row',
    },

    containerItem:{
        marginTop: 8,
        marginRight: 12,
        width: 160,
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
        justifyContent: 'center',
        alignItems: 'center',
        height: 160,
        width: 160,
    },

    textImageStyle: {
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
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