import React from 'react';
import { SafeAreaView, View, TextInput, Image, StyleSheet } from 'react-native';

const colorDefault = '#rgb(18, 18, 18)';

export default function LibraryPlace() {
    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.headContainer}>
                <Image style={styles.backImage} source={require('./icons/backpageicon.png')} />
                <TextInput 
                style={styles.textInput} 
                placeholder='Busque na Sua Biblioteca'
                placeholderTextColor={'#rgb(169, 169, 169)'}                
                />
            </View>
        </SafeAreaView>
    );
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorDefault,
    },

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