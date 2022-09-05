import React from 'react';
import { View, ImageBackground, Text } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import S from './styled.js';

const mockedImage = 'https://avatars.githubusercontent.com/u/104742158?v=4';

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
            <ImageBackground source={{uri:mockedImage}} 
            style={S.artistPhoto}
            imageStyle={{opacity: 0.7}}>
                <View style={S.titleContainer}>
                    <Text style={S.title}>Ulisses Gonçalves</Text>
                </View>
            </ImageBackground>          
        </View>
        </Background>
    );
};
