import React from 'react';
import { View, Text, Image } from 'react-native';

import S from './styled.js';

import OptionsIcon from './icons/optionsicon.png';

const Item = ({title, subtitle}) => {
    return(
        <View style={S.containerOrientation}>
            <View>
                <Text style={S.titleStyle}>{title.toUpperCase()}</Text>
                <Text style={S.subtitleStyle}>{subtitle}</Text>
            </View>
            <Image style={S.optionsIconStyle} source={OptionsIcon}/>
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