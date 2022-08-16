import React from "react";
import { SafeAreaView, StyleSheet, ScrollView, StatusBar } from "react-native";

import RecentSection from "./components/recent/recent.js";
import PodcastSection from "./components/podcast/podcast.js";
import OldMusicsSection from "./components/oldmusics/oldmusics.js";
import PlayRecentsSection from "./components/playsrecents/playsrecents.js"
import AlbunsSection from "./components/albuns/index.js";


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