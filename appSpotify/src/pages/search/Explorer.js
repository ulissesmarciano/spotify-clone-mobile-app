import React from "react";
import { SafeAreaView, StatusBar, ScrollView, StyleSheet } from "react-native";

import SearchSection from "./components/search/search";
import BottomSection from "./components/bottomcontainer/bottom";
import GenreSection from "./components/genre/genre";
import PodcastCategorySection from "./components/podcastcategory/podcastcategory.js";

const colorDefault = '#rgb(18, 18, 18)';

const Explorer = () => {
    return (
        <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor= "black" />
            <ScrollView>
                <SearchSection />
                <GenreSection />
                <PodcastCategorySection />
                <BottomSection />
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