import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import S from './styled.js';

export default function LastReleaseScreen (){
    const navigator = useNavigation();
    return(
        <View>
            <View>
                <Text style={S.title}>Ultimo lançamento</Text>
            </View>
        <TouchableOpacity style={S.container} onPress={() => navigator.navigate("Album Screen")}>
            <LinearGradient style={S.imageItemStyle} colors={['#51befc', '#03588a']}>
                <Text style={S.textImageSyle}>A</Text>
            </LinearGradient>
            <View>
                <Text style={S.itemTitle}>Nome do Álbum</Text>
                <Text style={S.itemSubtitle}>2022</Text>
            </View>
        </TouchableOpacity>
        </View>
    );
};