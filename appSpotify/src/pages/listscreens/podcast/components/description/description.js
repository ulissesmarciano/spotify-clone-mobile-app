import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import S from './styled.js';

import StarIcon from './icons/star.png';

export default function DescriptionSection (){
    return(
        <View style={S.container}>
            <View style={S.textContainer}>
                <Text style={S.textStyle}>Os aventureiros do canal do Ulisses Marciano unem forças para discutir filmes, séries e absurdos do dia a dia com bo...
                <TouchableOpacity>
                    <Text style={S.buttonTextStyle}>ver mais</Text>
                </TouchableOpacity>
                </Text>                
            </View>
            <View style={S.controllContainer}>
                <TouchableOpacity style={S.buttonScore}>
                    <Text style={S.textButtonScore}>4.9</Text>
                    <Image style={S.starIcon} source={StarIcon} />
                    <Text style={S.textButtonScoreComplement}>(14K)</Text>
                </TouchableOpacity>
                <TouchableOpacity style={S.cinemaButton}>
                    <Text style={S.cinemaButtonText}>Cinema</Text>
                </TouchableOpacity>
                <TouchableOpacity style={S.tvButton}>
                    <Text style={S.tvTextButton}>TV</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};