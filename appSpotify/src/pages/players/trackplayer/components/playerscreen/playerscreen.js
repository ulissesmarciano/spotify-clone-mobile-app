import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';

import S from './styled.js';

import LikeImg from './icons/like.png';
import LikedImg from './icons/liked.png';

import PlayButton from './icons/playicon.png';
import PauseButton from './icons/pauseicon.png';

import RepeatIcon from './icons/repeaticon.png';
import RepeatIconFoc from './icons/repeaticonfoc.png';
import RepeatIconFoc1 from './icons/repeaticonfoc1.png'; //ALTERNAR PARA TERCEIRA IMAGEM

import RandomIcon from './icons/randomicon.png';
import RandomIconFoc from './icons/randomiconfoc.png';


const mockedImage = 'https://avatars.githubusercontent.com/u/104742158?v=4';


export default function PlayerScreen () {
    const [alternateRandomButton, setAlternateRandomButton] = useState(true);
    const changeRandomButton = () => {
        setAlternateRandomButton(previousState => !previousState);
    };

    const[alternateLikeImage, setAlternateLikeImage] = useState(true);
    const changeLikeButton = () => {
        setAlternateLikeImage(alternateLikeImage => !alternateLikeImage);
    };

    const[alternatePlayButton, setPlayButton] = useState(true);
    const changePlayButton = () => {
        setPlayButton(previousState => !previousState);
    };

    const[alternateRepeatButton, setRepeatButton] = useState(true);
    const changeRepeatButton = () => {
        setRepeatButton(previousState => !previousState)
    };
    
    const[segundos, setSegundos] = useState(0);

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
                        <TouchableOpacity onPress={changeLikeButton}>
                            {alternateLikeImage && <Image source={LikeImg} style={S.likeIcon}/>}
                            {!alternateLikeImage && <Image source={LikedImg} style={S.likeIcon}/>}
                        </TouchableOpacity>                       
                    </View>
                    <View style={S.sliderContainer} >
                        <Slider 
                        minimumValue={0}
                        maximumValue={100}
                        thumbTintColor="#FFFFFF"
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#BBBBBB"
                        value={segundos}
                        step={1}
                        onValueChange={(value) => {setSegundos(value);
                        }}
                        />
                    </View>    
                    <View style={S.timeContainer}>
                        <Text style={S.timeStyle}>{segundos}</Text>
                        <Text style={S.timeStyle}>6:21</Text>
                    </View>                    
                    <View style={S.controlArea} >
                        <View style={S.buttonTrackArea} >
                            <TouchableOpacity onPress={changeRandomButton}>
                                {alternateRandomButton && <Image source={RandomIcon} style={S.borderControllers}/> }
                                {!alternateRandomButton && <Image source={RandomIconFoc} style={S.borderControllers}/> }
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={S.trackButton} source={require('./icons/rwicon.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={changePlayButton}>
                                {alternatePlayButton && <Image source={PlayButton} style={S.playButton}/>}
                                {!alternatePlayButton && <Image source={PauseButton} style={S.playButton}/>}                            
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={S.trackButton} source={require('./icons/fwicon.png')} />
                            </TouchableOpacity> 
                            <TouchableOpacity onPress={changeRepeatButton}>
                                {alternateRepeatButton && <Image source={RepeatIcon} style={S.borderControllers}/>}
                                {!alternateRepeatButton && <Image source={RepeatIconFoc} style={S.borderControllers}/>}
                            </TouchableOpacity>
                        </View>
                        <View style={S.shareControls}>
                            <View style={S.dispositiveOrientation} >
                                <TouchableOpacity>
                                    <Image style={S.shareIcons} source={require('./icons/playersicon.png')} />
                                </TouchableOpacity>
                            </View>
                            <View style={S.shareListOrientation}>
                            <TouchableOpacity>
                                <Image style={S.shareIcons} source={require('./icons/shareicon.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={S.shareIcons} source={require('./icons/listicon.png')} />
                            </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={S.lyricsContainer}>

            </View>
        </View>
    );
};


