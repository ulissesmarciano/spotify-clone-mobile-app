import React from 'react';
import { ScrollView, View, StatusBar } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import ControllListSection from './components/controlllist/controlllist.js';

import HeaderSection from './components/header/header.js';

const Background = ( {children} ) => {
    return (
        <LinearGradient colors={['#6d6d6d','#121212', '#121212']} style={{flex:1}}>
            {children}
        </LinearGradient>
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
                <Botton/>
            </ScrollView>
        </Background>
    );
}; 