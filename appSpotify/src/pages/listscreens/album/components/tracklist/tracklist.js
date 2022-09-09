import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import S from './styled.js';

import OptionsIcon from './icons/optionsicon.png';

const Item = ({title, subtitle}) => {
    
    const navigator = useNavigation();

    return(
        <View style={S.containerOrientation}>
            <TouchableOpacity style={S.titleContainer} onPress={() => navigator.navigate("Track Player")}>
                <Text style={S.titleStyle}>{title.toUpperCase()}</Text>
                <Text style={S.subtitleStyle}>{subtitle}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={S.optionsIconStyle} source={OptionsIcon}/>
            </TouchableOpacity>
        </View>
    );
};

const TracklistSection = () => {
    return (
        <View style={S.container}>
            <Item title="Música" subtitle="Artista"/>
            <Item title="Música" subtitle="Artista"/>
            <Item title="Música" subtitle="Artista"/>
            <Item title="Música" subtitle="Artista"/>
            <Item title="Música" subtitle="Artista"/>
            <Item title="Música" subtitle="Artista"/>
            <Item title="Música" subtitle="Artista"/>
            <Item title="Música" subtitle="Artista"/>
            <Item title="Música" subtitle="Artista"/>
            <Item title="Música" subtitle="Artista"/>
            <Item title="Música" subtitle="Artista"/>
        </View>
    );
};

export default TracklistSection;