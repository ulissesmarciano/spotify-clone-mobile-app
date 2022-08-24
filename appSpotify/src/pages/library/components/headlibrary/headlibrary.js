import React from 'react';
import { View, Text, Image } from 'react-native';

import S from './styled.js';

const mockImage = 'https://avatars.githubusercontent.com/u/104742158?v=4';

const HeadSection = () => {
    return(
        <View style={S.container}>
            <Image style={S.profileImage} source={{uri: mockImage}}/>
            <Text style={S.headTitle}> Sua Biblioteca</Text>
            <View style={S.imagesIconContainer}>
                <Image style={S.iconsHead} source={require('./icons/searchicon.png')} />
                <Image style={S.iconsHead} source={require('./icons/adicicon.png')} /> 
            </View>            
        </View>
    );
};

export default HeadSection;