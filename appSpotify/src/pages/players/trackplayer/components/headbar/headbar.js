import React from 'react';
import { Image, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';

import ArrowIcon from './icons/arrowicon.png';
import OptionIcon from './icons/optionsicon.png';

import S from './styled.js';

export default function HeadBar() {
    return(
    <SafeAreaView style={S.container}>
        <View style={S.buttonContainer}>
            <TouchableOpacity>
                <Image style={S.iconImage} source={ArrowIcon} />
            </TouchableOpacity>
        </View>
        <View style={S.textContainer}>
            <Text style={S.title}>TOCANDO DO ÁLBUM</Text>
            <Text style={S.subtitle}>Nome da música</Text>
        </View>
        <View style={S.buttonContainer}>
            <TouchableOpacity>
                <Image style={S.iconImage} source={OptionIcon} />
            </TouchableOpacity>
        </View>        
    </SafeAreaView>
    );
};