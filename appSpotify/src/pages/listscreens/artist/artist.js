import React from 'react';
import { StatusBar, ScrollView } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import HeadScreen from './components/header/header';
import ControlListSection from './components/controlllist/controlllist';
import LikedMusics from './components/likedmusic/likedmusics';
import PopularHitsSection from './components/popularhits/popularhits';

const Background = ( {children} ) => {
    return (
        <LinearGradient colors={['#6d6e45','#121212']} style={{flex:1}}>
            {children}
        </LinearGradient>
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
                <PopularHitsSection />
            </ScrollView>
        </Background>
    );
};