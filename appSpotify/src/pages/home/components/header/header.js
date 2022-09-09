import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity } from 'react-native';

import S from './styled.js';

import Sign from './icons/sino.png';
import History from './icons/historico.png';
import Config from './icons/config.png';

export default function HeaderSection() {
    return(
        <SafeAreaView style={S.container}>
            <View style={S.titleContainer}>
                <Text style={S.title}>Boa noite</Text>
            </View>
            <View style={S.buttonsContainer}>
                <TouchableOpacity>
                    <Image style={S.iconStyle} source={Sign}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={S.iconStyle} source={History}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={S.iconStyle} source={Config}/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};