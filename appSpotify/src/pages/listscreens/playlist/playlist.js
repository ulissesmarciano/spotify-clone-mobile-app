import React from 'react';
import { View, ScrollView, StatusBar } from 'react-native';
import HeaderSection from './components/header/header';

const Background = ( {children} ) => {
    return (
        <View style={{flex:1, backgroundColor:'#121212'}}>
            {children}
        </View>
    );
};

export default function PlaylistScreen(){
    return(
        <Background>
        <StatusBar barStyle="light-content" translucent={true} backgroundColor= "#rgba(1, 1, 1, 0.3)"/>
        <ScrollView>
            <HeaderSection/>
        </ScrollView>
        </Background>
    );
};