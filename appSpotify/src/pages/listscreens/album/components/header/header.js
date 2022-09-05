import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

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
    return(
        <Background>
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
        </Background>
    );
};