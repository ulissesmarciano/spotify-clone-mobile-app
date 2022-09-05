import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import S from './styled.js';

import Arrow from './icons/arrow.png';
import AddIcon from './icons/addmusic.png';

const mockedImage = 'https://avatars.githubusercontent.com/u/104742158?v=4';

const Background = ( {children} ) => {
    return(
        <LinearGradient colors={["#272727", "#121212"]} style={{flex: 1, }}>
            {children}
        </LinearGradient>
    );
};

const Item = ({title, subtitle}) => {
    return(
        <View style={S.itemContainer}>
            <Image style={S.itemImage} source={{uri: mockedImage}}/>
            <TouchableOpacity style={S.itemTitleContainer}>
                <Text style={S.titleItem}>{title}</Text>
                <Text style={S.subtitleItem}>{subtitle}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={S.addMusicIcon} source={AddIcon}/>
            </TouchableOpacity>
        </View>
    );
};

export default function RecomendationSection (){
    return(
        <View  style={S.container}>
            <Background >
                <View style={S.titleContainer}>
                    <View>
                        <Text style={S.title}>Músicas recomendadas</Text>
                        <Text style={S.subtitle}>Com base nas músicas nesta playlist</Text>
                    </View>
                    <TouchableOpacity>
                        <Image style={S.arrowStyle} source={Arrow}/>
                    </TouchableOpacity>
                </View>
            </Background>
            <View>
                <Item title="Música" subtitle="Artista"/>
                <Item title="Música" subtitle="Artista"/>
                <Item title="Música" subtitle="Artista"/>
                <Item title="Música" subtitle="Artista"/>
                <Item title="Música" subtitle="Artista"/>
            </View>
            <TouchableOpacity style={S.buttonStyle}>
                <Text style={S.textButtonStyle}>Atualizar</Text>
            </TouchableOpacity>
        </View>
    );
};