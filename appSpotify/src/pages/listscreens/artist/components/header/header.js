import React from 'react';
import { View, ImageBackground, Text } from 'react-native';

import S from './styled.js';

const mockedImage = 'https://avatars.githubusercontent.com/u/104742158?v=4';

export default function HeadScreen () {
    return(
        <View style={S.headContainer}>
            <ImageBackground source={{uri:mockedImage}} 
            style={S.artistPhoto}
            imageStyle={{opacity: 0.7}}>
                <View style={S.titleContainer}>
                    <Text style={S.title}>Ulisses Gonçalves</Text>
                </View>
            </ImageBackground>          
        </View>
    );
};
