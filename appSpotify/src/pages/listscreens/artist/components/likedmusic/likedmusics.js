import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';

import S from './styled.js'

const mockedImage = 'https://avatars.githubusercontent.com/u/104742158?v=4';


export default function LikedMusics () {
    return(
        <TouchableOpacity>
        <View style={S.container}>
            <View>
                <ImageBackground 
                style={S.artistAvatar} 
                source={{uri:mockedImage}}
                imageStyle={{borderRadius: 100}}
                >
                    <Image style={S.likeImage} source={require('./icons/likedIcon.png')}/>
                </ImageBackground>
            </View>
            <View style={S.textContainer}>
                <Text style={S.title}>Músicas Curtidas</Text>
                <Text style={S.subtitle}>25 músicas de Ulisses Gonçalves</Text>
            </View>
        </View>
        </TouchableOpacity>
    );
};