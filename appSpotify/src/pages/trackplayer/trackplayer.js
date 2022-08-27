import React from 'react';
import {Background, TopBar } from './styled';

export default function TrackPlayer (){
    return(
        <Background>
            <TopBar>
                <TopBar.Title>TOCANDO DA PLAYLIST</TopBar.Title>
                <TopBar.Subtitle>Nome da Playlist</TopBar.Subtitle>
            </TopBar>
        </Background>
    );
};

