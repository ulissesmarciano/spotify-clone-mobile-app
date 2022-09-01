import React from 'react';
import { StatusBar } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import HeadBar from './components/headbar/headbar.js';
import PlayerScreen from './components/playerscreen/playerscreen.js';

const Background = ( {children} ) => {
    return (
        <LinearGradient colors={['#6c456e','#121212']} style={{flex:1}}>
            {children}
        </LinearGradient>
    );
};

export default function PodcastPlayer (){
    return(
        <Background>
            <StatusBar barStyle="light-content" translucent={true} backgroundColor= "#rgba(1, 1, 1, 0.3)"/>
                <HeadBar/>
                <PlayerScreen />
        </Background>
    );
};