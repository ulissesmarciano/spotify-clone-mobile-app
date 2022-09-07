import React from 'react';
import { View, StatusBar, ScrollView } from 'react-native';

import HeaderSection from './components/header/header.js';
import DescriptionSection from './components/description/description.js';
import LastEpisodeSection from './components/lastepisode/lastepisode.js';
import ControllListSection from './components/controlllists/controlllists.js';
import EpisodesSection from './components/episodes/episodes.js';
import SearchSection from './components/seachsection/searchsection.js';

const Background = ( {children} ) => {
    return(
        <View style={{backgroundColor: '#121212', flex: 1}}>
            {children}
        </View>
    );
};

const Bottom = () => {
    return(
        <View style={{marginBottom: 200}}/>
    );
};

export default function PodcastScreen (){
    return(
        <Background>
            <StatusBar barStyle="light-content" translucent={true} backgroundColor= "#rgba(1, 1, 1, 0.3)"/>
            <ScrollView>
            <HeaderSection />
            <DescriptionSection />
            <LastEpisodeSection />
            <ControllListSection />
            <SearchSection/>
            <EpisodesSection/>
            <Bottom />
            </ScrollView>
        </Background>        
    );
};