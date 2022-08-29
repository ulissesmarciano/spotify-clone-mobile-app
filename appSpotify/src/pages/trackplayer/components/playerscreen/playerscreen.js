import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';

import S from './styled.js';

import LikeImg from './icons/like.png';
import LikedImg from './icons/liked.png';


const mockedImage = 'https://avatars.githubusercontent.com/u/104742158?v=4';


export default function PlayerScreen () {
    const[alternateImage, setAlternateImage] = useState(true);
    const changeImage = () => {
        setAlternateImage(alternateImage => !alternateImage);
      };
    
    return(
        <View>
            <View style={S.screenContainer}>
                <Image style={S.coverScreen} source={{uri: mockedImage}} />
            </View>
            <View style={S.playerContainer}>
                <View style={S.buttonPlayerScreen} >
                    <View style={S.tittleArea} >
                        <View>
                            <Text style={S.title}>Nome da Música</Text>
                            <Text style={S.subTitle}>Artista</Text>
                        </View>
                        <TouchableOpacity onPress={changeImage}>
                        {alternateImage && <Image source={LikeImg} style={S.likeIcon}/>}
                        {!alternateImage && <Image source={LikedImg} style={S.likeIcon}/>}
                        </TouchableOpacity>                       
                    </View>
                    <View style={S.timeContainer}>
                        <Text style={S.timeStyle}>0:01</Text>
                        <Text style={S.timeStyle}>6:21</Text>
                    </View>
                    
                        <Slider 
                        style={S.sliderStyle}
                        minimumValue={0}
                        maximumValue={100}
                        thumbTintColor="#FFFFFF"
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#BBBBBB"
                        mini
                        />
                    
                    <View style={S.controlArea} >
                        
                    </View>
                </View>
            </View>
            <View style={S.lyricsContainer}>

            </View>
        </View>
    );
};


