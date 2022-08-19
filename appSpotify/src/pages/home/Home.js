import React from "react";
import { View, SafeAreaView, StyleSheet, ScrollView, StatusBar } from "react-native";

import RecentSection from "./components/recent/recent.js";
import PodcastSection from "./components/podcast/podcast.js";
import OldMusicsSection from "./components/oldmusics/oldmusics.js";
import PlayRecentsSection from "./components/playsrecents/playsrecents.js"
import AlbunsSection from "./components/albuns/albuns.js";
import DiscoverSection from "./components/discover/discover.js";
import DialySugestionsSection from "./components/dialysugestions/dialysugestions.js";
import MixSugestionSection from "./components/mixsugestions/mixsugestion.js";
import MyPlaylistsSection from "./components/myplaylists/myplaylists.js";
import NewReleasesSection from "./components/releases/releases.js";
import FanOfSection from "./components/fanof/fanof.js";
import ParadeSection from "./components/parade/parade.js";
import BestOfArtistsSection from "./components/bestofartists/bestofartists.js";
import BottonSection from "./components/bottoncontainer/botton.js";


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
                <NewReleasesSection />
                <FanOfSection />
                <ParadeSection />
                <BestOfArtistsSection />
                <BottonSection />
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

export default Home;