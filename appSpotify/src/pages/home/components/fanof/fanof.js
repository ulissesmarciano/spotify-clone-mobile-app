import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { useNavigation } from '@react-navigation/native';

import S from './styled.js';


const Item = () => {
    const navigator = useNavigation();
    return(
        <TouchableOpacity style={S.containerItem} onPress={() => navigator.navigate("Album Screen")}>
            <LinearGradient style={S.imageItem} colors={['#6357eb', '#190bb3']}>
                <Text style={S.textImageStyle}>A</Text>
            </LinearGradient>
            <Text style={S.albumTitle}>Nome do Álbum</Text>
            <Text style={S.albumSubtitle}>Album - Nome do Artista</Text>
        </TouchableOpacity>
    );
};

const Item2 = () => {
    const navigator = useNavigation();
    return(
        <TouchableOpacity style={S.containerItem} onPress={() => navigator.navigate("Album Screen")}>
            <LinearGradient style={S.imageItem} colors={['#f5d236', '#826c09']}>
                <Text style={S.textImageStyle}>A</Text>
            </LinearGradient>
            <Text style={S.albumTitle}>Nome do Álbum</Text>
            <Text style={S.albumSubtitle}>Album - Nome do Artista</Text>
        </TouchableOpacity>
    );
};

const FanOfSection = () => {    
    return (
        <View style={S.container}>
            <View style={S.headOrientation}>
                <LinearGradient style={S.avatar} colors={['#e89bb4', '#ff0051']}>
                    <Text style={S.textAvatarImage}>B</Text>
                </LinearGradient>
                <View>
                    <Text style={S.supTitle}>PARA FÃS DE</Text>
                    <Text style={S.title}>Nome do Artista</Text>
                </View>
            </View>
            <View style={S.containerOrientation}>
                <Item />
                <Item2 />
            </View>
        </View>
    );
};

export default FanOfSection;