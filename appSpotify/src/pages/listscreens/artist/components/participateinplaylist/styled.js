import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
    },

    titleSection: {
        color: 'white',
        marginTop: 35,
        fontSize: 22,
        marginLeft: 8,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    
    item: {
        marginVertical: 8,
        marginHorizontal: 8,
        maxWidth: 140,
    },

    itemImage: {
        height: 140,
        width: 140,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textItemImage: {
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
    },

    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
    },
  });
  