import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import S from './styled.js'

import Options from './icons/optionsicon.png';

const mockedImage = 'https://avatars.githubusercontent.com/u/104742158?v=4';

const Item = () => {
    const navigator = useNavigation();
    return(
        <View style={S.container}>
            <View style={S.imageContainer}>
                <LinearGradient style={S.trackImage} colors={['#0073ff', '#002d63']} >
                    <Text style={S.textTrackImage}>M</Text>
                </LinearGradient>
            </View>
            <TouchableOpacity style={S.textContainer} onPress={() => navigator.navigate("Track Player")}>
                <Text style={S.title}>Música</Text>
                <View style={S.artistContainer}>
                    <View style={S.preSubtitleBackground}>
                        <Text style={S.preSubtitle}>LYRICS</Text>
                    </View>
                    <Text style={S.subtitle}>Artista</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={S.optionsIcon} source={Options}/>
            </TouchableOpacity>
        </View>
    );
};

export default function TracklistScreen (){
    return(
        <View >
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </View>
    );
};