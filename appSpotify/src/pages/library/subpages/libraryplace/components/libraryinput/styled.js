import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    headContainer:{
        flexDirection: 'row',
        alignItems: 'center',  
        marginTop: 25,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
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
    },
    
    linerDivisioner: {
        backgroundColor: '#rgb(12, 12, 12)',
        height: 4,
    }
});