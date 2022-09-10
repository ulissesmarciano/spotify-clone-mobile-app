import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import S from './styled.js';

const Item = () => {
    const navigator = useNavigation();
    return(
        <View>
        <TouchableOpacity style={S.container} onPress={() => navigator.navigate("Album Screen")}>
            <LinearGradient style={S.imageItemStyle} colors={['#ff5c72', '#8a0315']}>
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

export default function AlbumListSection(){
    return(
        <View>
            <Text style={S.title}>Álbuns</Text>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </View>
    );
};