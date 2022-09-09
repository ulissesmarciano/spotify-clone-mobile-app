import React from 'react';
import {View, Text, Image, TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import S from './styled.js';

const Item = () =>{

    const navigator = useNavigation();

    return(
        <TouchableOpacity onPress={() => navigator.navigate("Track Player")}>
            <LinearGradient style={S.imageItem} colors={['#4af244', '#034f01']}>
                <View style={S.selectContainer}>
                    <LinearGradient style={S.avatarStyle} colors={['#e67a22', '#a66702']}>
                        <Text style={S.avatarTextStyle}>U</Text>
                    </LinearGradient>
                    <Text style={S.itemSelectStyle}>Música selecionada</Text>
                </View>
                <View style={S.textImageContainer}>
                    <Text style={S.textImageStyle}>M</Text>
                </View>
                <View style={S.albumContainer}>
                    <LinearGradient style={S.albumStyle} colors={['#5bc0eb', '#013b54']}>
                        <Text style={S.textAlbumStyle}>M</Text>
                    </LinearGradient>
                    <View style={S.titleContainer}>
                        <Text style={S.albumTitle}>Música</Text>
                        <Text style={S.albumSubtitle}>Faixa . Lançamento</Text>
                    </View>
                </View>
            </LinearGradient>
        </TouchableOpacity>
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