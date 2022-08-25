import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    headContainer:{
        flexDirection: 'row',
        alignItems: 'center',  
        margin: 25,
        justifyContent: 'space-between',     
    },

    backImage: {
        height: 25,
        width: 25,
    },

    textInput: {
        backgroundColor: '#rgb(40, 40, 40)',
        color: 'white',
        fontWeight: 'bold',
        width: 300,
        height: 40,
        borderRadius: 6,
        paddingLeft: 15,
    }    
});