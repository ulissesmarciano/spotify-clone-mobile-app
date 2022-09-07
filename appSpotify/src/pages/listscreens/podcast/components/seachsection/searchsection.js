import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import S from './styled.js';

import SearchImage from './icons/searchicon.png';

export default function SearchSection (){
    return(
        <View style={S.container}>
            <View style={S.searchInputStyle}>
                <Image style={S.imagePlaceholder} source={SearchImage}/>
                <TextInput
                style={S.textInputStyle} 
                placeholderTextColor={'white'} 
                placeholder="  Procurar no programa"
                />
            </View>
            <TouchableOpacity style={S.buttonStyle}>
                <Text style={S.buttonText}>Classificar</Text>
            </TouchableOpacity>
        </View>
    );
};