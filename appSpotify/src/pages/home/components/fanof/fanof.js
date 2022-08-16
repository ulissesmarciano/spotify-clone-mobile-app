import React from "react";
import { View, Text, Image } from 'react-native';
import S from './styled'

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/104742158?v=4';

const FanOfSection = () => {    
    return (
        <View style={S.container}>
                <View style={S.headOrientation}>
                    <Image style={S.avatar} source={{uri: imageProfileGithub}}/>
                    <View>
                        <Text style={S.supTitle}>PARA FÃS DE</Text>
                        <Text style={S.title}>Ulisses Marciano</Text>
                    </View>
                </View>
            <View style={S.containerOrientation}>
                <View style={S.item}>
                    <Image style={S.imageItem} source={{uri: imageProfileGithub}}/>
                    <Text style={S.albumTitle}>Nome do Álbum</Text>
                    <Text style={S.albumSubtitle}>Album - Ulisses Marciano</Text>
                </View>
                <View style={S.item}>
                    <Image style={S.imageItem} source={{uri: imageProfileGithub}}/>
                    <Text style={S.albumTitle}>Nome do Álbum</Text>
                    <Text style={S.albumSubtitle}>Album - Ulisses Marciano</Text>
                </View>
            </View>
        </View>
    );
};

export default FanOfSection;