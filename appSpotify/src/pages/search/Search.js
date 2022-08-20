import React from "react";
import { SafeAreaView, StatusBar, ScrollView, StyleSheet } from "react-native";

import SearchSection from "./components/search/search";
import BottomSection from "./components/bottomcontainer/bottom";

const colorDefault = '#rgb(18, 18, 18)';

const Search = () => {
    return (
        <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor= "black" />
            <ScrollView>
                <SearchSection />
                <BottomSection />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Search;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorDefault,
    },
});