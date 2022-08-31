import React from 'react';
import { Image, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';

import ArrowIcon from './icons/arrowicon.png';
import OptionIcon from './icons/optionsicon.png';

import S from './styled.js';

export default function HeadBar() {
    return(
    <SafeAreaView style={S.container}>
        <TouchableOpacity style={S.buttonContainer}>
            <Image style={S.iconImage} source={ArrowIcon} />
        </TouchableOpacity>
        <View style={S.textContainer}>
            <Text style={S.title}>TOCANDO PODCAST</Text>
            <Text style={S.subtitle}>Nome do Podcast</Text>
        </View>
        <TouchableOpacity style={S.buttonContainer}>
            <Image style={S.iconImage} source={OptionIcon} />
        </TouchableOpacity>
    </SafeAreaView>
    );
};