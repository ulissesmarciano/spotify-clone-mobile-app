import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { useNavigation } from '@react-navigation/native';

import S from './styled.js';

import Play from './icons/playlistplayicon.png';

const PodcastSection = () => {
    const navigation = useNavigation();
    return (
        <View style={S.container}>
            <LinearGradient style={S.backgroundContainer} colors={['#rgba(227, 154, 225, 0.6)', '#rgba(191, 71, 188, 0.6)', '#rgba(102, 18, 100, 0.6)']} >
                <View style={S.contentContainer}>
                    <View>
                        <Text style={S.title}>Podcast do Ulisses</Text>
                        <Text style={S.subtitle}>Ouça o melhor podcast sobre desenvolvimento de software</Text>
                    </View>
                    <TouchableOpacity style={S.buttonContainer} onPress={() => navigation.navigate("Podcast Screen")}>
                        <Image style={S.playIconStyle} source={Play}/>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>
    );
};

export default PodcastSection;