import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import S from './styled.js';

const mockedImage = 'https://avatars.githubusercontent.com/u/104742158?v=4';

const Background = ({children}) => {
    return (
      <LinearGradient colors={['#6d6d6d','#6d6d6d', '#121212']} style={{flex: 1}}>
          {children}
      </LinearGradient>
    );  
  };


export default function HeaderSection () {

    const navigator = useNavigation();

    return(
        <Background>
        <View style={S.headContainer}>
            <View style={S.imageContainer}>
                <LinearGradient style={S.headImage} colors={['#f584f1', '#a623a1', '#52024f']}>
                    <Text style={S.textImageStyle}>M</Text>
                </LinearGradient>
            </View>
            <View>
                <Text style={S.albumNameStyle}>NOME DO ALBUM</Text>
                <TouchableOpacity style={S.artistContainerOrientation} onPress={() => navigator.navigate("Artist Screen")}>
                    <LinearGradient style={S.avatarImage} colors={['#4797ff', '#073c82']}>
                        <Text style={S.textAvatarStyle}>U</Text>
                    </LinearGradient>
                    <Text style={S.nameArtistStyle}>Nome do Artista</Text>
                </TouchableOpacity>
                <Text style={S.subtitleStyle}>Álbum - 2019</Text>                
            </View>
        </View>
        </Background>
    );
};