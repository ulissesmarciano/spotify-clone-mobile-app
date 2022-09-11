import React from 'react';
import { View, StatusBar,ScrollView } from 'react-native';
import BioSection from './components/bio/bio.js';
import ListenerSection from './components/listeners/listeners.js';
import PhotoCarouselSection from './components/photocarousel/photocarousel.js';

const Background = ({children}) => {
    return(
        <View style={{flex: 1, backgroundColor: '#121212'}}>
            {children}
        </View>
    );
};

const Bottom = () => {
    return(
        <View style={{marginBottom: 80}} />
    );
};

export default function AboutArtistScreen (){
    return(
        <Background>
            <StatusBar barStyle="light-content" backgroundColor="black" />
            <ScrollView>
                <PhotoCarouselSection />
                <ListenerSection />
                <BioSection />
                <Bottom />
            </ScrollView>
        </Background>
    );
};