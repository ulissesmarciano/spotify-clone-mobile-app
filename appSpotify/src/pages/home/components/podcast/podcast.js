import React from 'react';
import { View, ImageBackground, Text, Image, TouchableOpacity } from 'react-native';
import S from './styled.js';

import { useNavigation } from '@react-navigation/native';

import Play from './icons/playlistplayicon.png';

const mockedImage = 'https://avatars.githubusercontent.com/u/104742158?v=4';

const PodcastSection = () => {
    const navigation = useNavigation();
    return (
        <View style={S.container}>
            <ImageBackground 
            source={{uri: mockedImage}} 
            imageStyle={{
                borderRadius: 6, 
                opacity: 0.6,
            }}>
                <View style={S.contentContainer}>
                    <View>
                        <Text style={S.title}>Podcast do Ulisses</Text>
                        <Text style={S.subtitle}>Ouça o melhor podcast sobre desenvolvimento de software</Text>
                    </View>
                    <TouchableOpacity style={S.buttonContainer} onPress={() => navigation.navigate("Podcast Screen")}>
                        <Image style={S.playIconStyle} source={Play}/>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

export default PodcastSection;