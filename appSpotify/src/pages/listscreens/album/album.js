import React from 'react';
import { ScrollView, View, StatusBar } from 'react-native';

import ControllListSection from './components/controlllist/controlllist.js';

import HeaderSection from './components/header/header.js';
import MoreOfSection from './components/moreof/moreof.js';
import ResumeTracklistSection from './components/resumetracklist/resumetracklist.js';
import TracklistSection from './components/tracklist/tracklist.js';

const Background = ( {children} ) => {
    return (
        <View style={{flex:1, backgroundColor: '#121212'}}>
            {children}
        </View>
    );
};

const Botton = () => {
    return(
        <View style={{height: 60}} />
    );
};

export default function AlbumScreen(){
    return(
        <Background>
            <StatusBar barStyle="light-content" translucent={true} backgroundColor= "#rgba(1, 1, 1, 0.3)"/>
            <ScrollView>
                <HeaderSection/>
                <ControllListSection />
                <TracklistSection />
                <ResumeTracklistSection />
                <MoreOfSection />
                <Botton/>
            </ScrollView>
        </Background>
    );
}; 