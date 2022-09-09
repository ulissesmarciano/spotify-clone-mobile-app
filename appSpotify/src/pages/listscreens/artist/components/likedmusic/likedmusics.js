import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import S from './styled.js';

export default function LikedMusics () {

    const navigator = useNavigation(); 

    return(
        <TouchableOpacity onPress={() => navigator.navigate("Playlist Screen")}>
        <View style={S.container}>
            <View>
                <LinearGradient style={S.artistAvatar} colors={['#8a33f5', '#310469']}>
                    <Text style={S.textImageStyle}>U</Text>
                    <Image style={S.likeImage} source={require('./icons/likedIcon.png')}/>
                </LinearGradient>
            </View>
            <View style={S.textContainer}>
                <Text style={S.title}>Músicas Curtidas</Text>
                <Text style={S.subtitle}>25 músicas de Ulisses Gonçalves</Text>
            </View>
        </View>
        </TouchableOpacity>
    );
};