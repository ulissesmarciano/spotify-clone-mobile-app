import React from 'react';
import { SafeAreaView, View, TextInput, Image, StyleSheet } from 'react-native';

import SearchLibraryInput from './components/libraryinput/searchlibraryinput';

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
});