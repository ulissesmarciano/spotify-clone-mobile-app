import React from 'react';
import { StatusBar, ScrollView, View } from 'react-native';

import HeadScreen from './components/header/header';
import ControlListSection from './components/controlllist/controlllist';
import LikedMusics from './components/likedmusic/likedmusics';
import PopularHitsSection from './components/popularhits/popularhits';
import ChoseOfTheArtistSection from './components/choseoftheartist/choseoftheartist';
import PopularReleasesSection from './components/popularreleases/popularreleases';
import ParticipatePlaylistSection from './components/participateinplaylist/participateplaylist';
import AboutArtistSection from './components/aboutartist/about';
import PlaylistOfArtistSection from './components/playlistofartist/playlistofartist';
import RelatedArtistsSection from './components/relatedartists/relatedartists';
import AppearsInSection from './components/appearsin/appearsin';

const Background = ( {children} ) => {
    return (
        <View style={{flex:1, backgroundColor:'#121212'}}>
            {children}
        </View>
    );
};

const Botton = () => {
    return(
        <View style={{height: 60}} />
    );
};

export default function ArtistScreen (){
    return(
        <Background>
            <StatusBar barStyle="light-content" translucent={true} backgroundColor= "#rgba(1, 1, 1, 0.3)"/>
            <ScrollView>
                <HeadScreen />
                <ControlListSection />
                <LikedMusics />
                <PopularHitsSection/>
                <ChoseOfTheArtistSection/>
                <PopularReleasesSection/>
                <ParticipatePlaylistSection />
                <AboutArtistSection />
                <PlaylistOfArtistSection />
                <RelatedArtistsSection />
                <AppearsInSection />
                <Botton />
            </ScrollView>
        </Background>
    );
};