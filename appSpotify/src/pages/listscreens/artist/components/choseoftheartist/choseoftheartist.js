import React from 'react';
import {View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';

import S from './styled.js';

const mockedImage = 'https://avatars.githubusercontent.com/u/104742158?v=4';

const Item = () =>{
    return(
        <View>
            <ImageBackground 
            style={S.imageItem} 
            source={{uri:mockedImage}} 
            imageStyle={{
                borderRadius: 6,
                opacity: 0.7
            }}>
                <View style={S.selectContainer}>
                    <Image style={S.avatarStyle} source={{uri: mockedImage}} />
                    <Text style={S.itemSelectStyle}>Música selecionada</Text>
                </View>
                <View style={S.albumContainer}>
                    <Image style={S.albumStyle} source={{uri: mockedImage}} />
                    <View style={S.titleContainer}>
                        <Text style={S.albumTitle}>Música</Text>
                        <Text style={S.albumSubtitle}>Faixa . Lançamento</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default function ChoseOfTheArtistSection(){
    return(
        <View>
            <Text style={S.titleSection}>Escolha do artista</Text>
            <TouchableOpacity>
                <Item />
            </TouchableOpacity>
        </View>
    );
};