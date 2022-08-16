import React from "react";
import { SafeAreaView, StyleSheet, ScrollView, StatusBar } from "react-native";

import RecentSection from "./components/recent/recent.js";
import PodcastSection from "./components/podcast/podcast.js";
import OldMusicsSection from "./components/oldmusics/oldmusics.js";
import PlayRecentsSection from "./components/playsrecents/playsrecents.js"
import AlbunsSection from "./components/albuns/albuns.js";
import DiscoverSection from "./components/discover/discover.js";
import DialySugestionsSection from "./components/dialysugestions/dialysugestions.js";
import MixSugestionSection from "./components/mixsugestions/mixsugestion.js";
import MyPlaylistsSection from "./components/myplaylists/myplaylists.js";


const colorDefault = '#rgb(18, 18, 18)';

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor= "black" />
            <ScrollView>
                <RecentSection />
                <PodcastSection />
                <OldMusicsSection />
                <PlayRecentsSection/>
                <AlbunsSection />
                <DiscoverSection />
                <DialySugestionsSection />
                <MixSugestionSection />
                <MyPlaylistsSection />
            </ScrollView>
        </SafeAreaView>
    );
};


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorDefault,
    }
});

export default Home;