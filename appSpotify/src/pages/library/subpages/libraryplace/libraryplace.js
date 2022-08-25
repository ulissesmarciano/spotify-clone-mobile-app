import React from 'react';
import { SafeAreaView, View, TextInput, Image, StyleSheet } from 'react-native';

import SearchLibraryInput from './components/searchlibraryinput';

const colorDefault = '#rgb(18, 18, 18)';

export default function LibraryPlace() {
    return (
        <SafeAreaView style={styles.container} >
            <SearchLibraryInput />
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