import React from 'react';
import { View, Text } from 'react-native';

import S from './styled.js';

const LibraryPlaceSection = () => {
    return (
        <View style={S.container} >
            <Text style={S.titleSection} >Encontre seus favoritos</Text>
            <Text style={S.subtitleSection} >Busque tudo que você curtiu, seguiu ou criou.</Text>
        </View>
    );
};

export default LibraryPlaceSection;