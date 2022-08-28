import { StyleSheet } from 'react-native';

export default StyleSheet.create({
   container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    marginLeft: 15,
    marginRight: 15,
    height: 50,
   },
   
   image: {
    height: 20,
    width: 20,
   },

   imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
   },

   midleText: {
    alignItems: 'center',
    justifyContent: 'center',
   },

   title: {
    color: '#rgb(230, 230, 230)',
    textTransform: 'uppercase',
   },

   subtitle: {
    color: 'white',
    fontWeight: 'bold',
   }
});