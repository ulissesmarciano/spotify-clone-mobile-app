import React from 'react';
import { View, StatusBar } from 'react-native';
import HeaderSection from './components/header/header';

const Background = ( {children} ) => {
    return(
        <View style={{backgroundColor: '#121212', flex: 1}}>
            {children}
        </View>
    );
};

export default function PodcastScreen (){
    return(
        <Background>
            <StatusBar barStyle="light-content" translucent={true} backgroundColor= "#rgba(1, 1, 1, 0.3)"/>
            <HeaderSection />
        </Background>        
    );
};