import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import SearchLibraryInput from './components/libraryinput/searchlibraryinput';
import LibraryPlaceSection from './components/libraryplaceresults/libraryplaceresults';

const colorDefault = '#rgb(18, 18, 18)';

export default function LibraryPlace() {
    return (
        <SafeAreaView style={styles.container} >
            <ScrollView>
                <SearchLibraryInput />
                <LibraryPlaceSection />
            </ScrollView>
        </SafeAreaView>
    );
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorDefault,
    },
});