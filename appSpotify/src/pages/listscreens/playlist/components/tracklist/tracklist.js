import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import S from './styled.js'

import Options from './icons/optionsicon.png';

const mockedImage = 'https://avatars.githubusercontent.com/u/104742158?v=4';

const Item = () => {
    return(
        <View style={S.container}>
            <View style={S.imageContainer}>
                <Image style={S.trackImage} source={{uri: mockedImage}} />
            </View>
            <View style={S.textContainer}>
                <Text style={S.title}>Música</Text>
                <View style={S.artistContainer}>
                    <View style={S.preSubtitleBackground}>
                        <Text style={S.preSubtitle}>LYRICS</Text>
                    </View>
                    <Text style={S.subtitle}>Artista</Text>
                </View>
            </View>
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