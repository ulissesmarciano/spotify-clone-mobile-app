import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { useNavigation } from '@react-navigation/native';

import S from './styled.js';

export default function HeadSection() {

    const navigation = useNavigation();

    return(
        <View style={S.container}>                
            <LinearGradient style={S.avatarStyle} colors={['#fa7da5', '#ff0051']}>
                <Text style={S.textImageStyle}>U</Text>
            </LinearGradient>
            <Text style={S.headTitle}> Sua Biblioteca</Text>
            <View style={S.buttonContainer} >
                <TouchableOpacity style={S.buttonStyle} onPress={() => navigation.navigate('Detalhes')}>
                    <Image style={S.iconsHead} source={require('./icons/searchicon.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={S.buttonStyle} >
                    <Image style={S.iconsHead} source={require('./icons/adicicon.png')} /> 
                </TouchableOpacity>
            </View>                                    
        </View>
    );
};

