import React from 'react';
import { View, ImageBackground, Text } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import S from './styled.js';

const Background = ( {children} ) => {
    return (
        <LinearGradient colors={['#6d6e45','#121212']} style={{flex:1}}>
            {children}
        </LinearGradient>
    );
};

export default function HeadScreen () {
    return(
        <Background>
        <View style={S.headContainer}>
            <LinearGradient style={S.artistPhoto} colors={['#1bb0f5', '#00405e']}>
                <View style={S.textImageContainer}/>
                <View style={S.titleContainer}>
                    <Text style={S.title}>Nome do Artista</Text>
                </View>
            </LinearGradient>          
        </View>
        </Background>
    );
};
