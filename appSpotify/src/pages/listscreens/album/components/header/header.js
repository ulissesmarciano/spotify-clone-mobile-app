import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';

import S from './styled.js';

const mockedImage = 'https://avatars.githubusercontent.com/u/104742158?v=4';


export default function HeaderSection () {
    return(
        <View style={S.headContainer}>
            <View style={S.imageContainer}>
                <Image style={S.headImage} source={{uri: mockedImage}}/>
            </View>
            <View>
                <Text style={S.albumNameStyle}>NOME DO ALBUM</Text>
                <TouchableOpacity style={S.artistContainerOrientation}>
                    <Image style={S.avatarImage} source={{uri: mockedImage}}/>
                    <Text style={S.nameArtistStyle}>Ulisses Gonçalves</Text>
                </TouchableOpacity>
                <Text style={S.subtitleStyle}>Álbum - 2019</Text>                
            </View>
        </View>
    );
};