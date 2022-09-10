import React from 'react';
import { StatusBar, ScrollView, View  } from 'react-native';
import AlbumListSection from './components/albumlist/albumlist';
import LastReleaseScreen from './components/lastrelease/lastrelease';

const Background = ( {children} ) => {
    return(
        <View style={{backgroundColor: '#121212', flex: 1}}>
            {children}
        </View>
    );
};

const Bottom = () => {
    return(
        <View style={{marginBottom: 80}}/>
    );
};

export default function DiscographyScreen (){
    return(
        <Background>
            <StatusBar barStyle="light-content" backgroundColor= "black" />
            <ScrollView>
                <LastReleaseScreen />
                <AlbumListSection />
                <Bottom />
            </ScrollView>
        </Background>
    );
};