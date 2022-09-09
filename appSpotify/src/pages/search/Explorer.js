import React from "react";
import { SafeAreaView, StatusBar, ScrollView, StyleSheet, View } from "react-native";

import SearchSection from "./components/search/search";
import GenreSection from "./components/genre/genre";
import PodcastCategorySection from "./components/podcastcategory/podcastcategory.js";
import VariousSection from "./components/variousselection/variousselection";

const colorDefault = '#rgb(18, 18, 18)';

const Bottom = () => {
    return(
        <View style={{marginBottom: 80}}/>
    );
};

const Explorer = () => {
    return (
        <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor= "black" />
            <ScrollView>
                <SearchSection />
                <GenreSection />
                <PodcastCategorySection />
                <VariousSection />
                <Bottom/>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Explorer;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorDefault,
    },
});