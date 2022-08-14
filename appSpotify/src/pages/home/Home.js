import React from "react";
import { SafeAreaView, StyleSheet, ScrollView, StatusBar } from "react-native";

import RecentSection from "./components/recent/recent.js";
import PodcastSection from "./components/podcast/podcast.js";
import OldMusics from "./components/oldmusics/oldmusics.js";
import PlayRecents from "./components/playsrecents/playsrecents.js"


const colorDefault = '#rgb(18, 18, 18)';

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor= "black" />
            <ScrollView>
                <RecentSection />
                <PodcastSection />
                <OldMusics />
                <PlayRecents/>
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