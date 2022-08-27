//ARRUMAR A PRECISÃO DO CLIQUE NA IMAGEM.

import React from 'react';
import { View, TextInput, Image, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';


import S from './styled.js';

export default function SearchLibraryInput() {

    const navigation = useNavigation();
    
    return (
        <View>
            <View style={S.headContainer}>
                <View>
                    <TouchableOpacity
                    style={S.test} 
                    hitSlop={{top: 100, bottom: 100, left: 50, right: 50}}
                    onPress={() => navigation.navigate('Biblioteca')}
                    >
                        <Image style={S.backImage} source={require('./icons/backpageicon.png')} />
                    </TouchableOpacity>
                   </View>
                <TextInput 
                style={S.textInput} 
                placeholder='Busque na Sua Biblioteca'
                placeholderTextColor={'#rgb(169, 169, 169)'}                
                />
            </View>
            <View style={S.linerDivisioner} />
        </View>
    );
};

