import React from 'react';
import { ScrollView, StatusBar } from 'react-native';

import HeadBar from './components/headbar/headbar';
import PlayerScreen from './components/playerscreen/playerscreen';

import LinearGradient from 'react-native-linear-gradient';

const Background = ( {children} ) => {
    return (
        <LinearGradient colors={['#48685d','#121212']} style={{flex:1}}>
            {children}
        </LinearGradient>
    );
};

export default function TrackPlayer (){
    return(
            <Background>
            <StatusBar barStyle="light-content" translucent={true} backgroundColor= "#rgba(1, 1, 1, 0.3)"/>
            <ScrollView>
                    <HeadBar />
                    <PlayerScreen />
            </ScrollView>
            </Background>
    );
};


