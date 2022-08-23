import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import SearchInputSection from './components/searchinput/searchinput';
import RecentSearchSection from './components/recentsearch/recentsearch';

export default function SearchPlaceSection () {
    return(
        <SafeAreaView style={styles.container}>
            <SearchInputSection />
            <RecentSearchSection />
        </SafeAreaView>
    );
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#rgb(18, 18, 18)',
    }
});

