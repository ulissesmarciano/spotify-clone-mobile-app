import { StyleSheet } from 'react-native';

export default StyleSheet.create({
   container: {
      marginTop: 35,
      flexDirection: 'row',
      marginLeft: 15,
      marginRight: 15,
   },

   iconImage: {
      height: 20,
      width: 20,
      alignSelf: 'center',
   },

   textContainer: {
      flex: 8,
      alignItems: 'center',
      justifyContent: 'center',
   },

   buttonContainer: {
      justifyContent: 'center',
      flex: 1,
   },

   title: {
      color: '#BBBBBB',
      fontSize: 12,
      fontWeight: '600',
   },

   subtitle: {
      color: 'white',
      fontSize: 12,
      fontWeight: 'bold',
   },

});