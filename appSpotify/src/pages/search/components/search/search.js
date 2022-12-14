import React from 'react';
import { View, Text, TouchableOpacity, Image } from "react-native";

import { useNavigation } from '@react-navigation/native';

import S from './styled.js';

import SearchIcon from './icons/search.png';


export default function SearchSection () {
    const navigation = useNavigation(); 
    return(
        <View style={S.headContainer}>
            <Text style={S.titleSection}>Buscar</Text>
            <TouchableOpacity style={S.inputStyle} onPress={() => navigation.navigate('Details')}>
                <Image style={S.bottomImage} source={SearchIcon} />
                <Text style={S.placeHolderText}>O que você quer ouvir?</Text>
            </TouchableOpacity>                       
        </View>

    );
};


