import React from 'react';
import { View, TextInput, Image } from 'react-native';

import S from './styled.js';

export default function SearchLibraryInput() {
    return (
        <View>
            <View style={S.headContainer}>
                <Image style={S.backImage} source={require('./icons/backpageicon.png')} />
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

