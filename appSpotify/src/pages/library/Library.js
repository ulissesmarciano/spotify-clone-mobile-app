import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import HeadSection from './components/headlibrary/headlibrary.js';
import LibraryResultsSection from './components/libraryresults/libraryresults.js';


const colorDefault = '#rgb(18, 18, 18)';

const Library = () => {
    return(
        <SafeAreaView style={styles.container}>
        <HeadSection />
        <LibraryResultsSection />
        </SafeAreaView>
    );
};

export default Library;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorDefault,
    }
})

