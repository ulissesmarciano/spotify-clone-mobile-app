import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import S from './styled.js';

import PopImage from './backimages/pop.png';
import RBImage from './backimages/randb.png';

const GenreSection = () => {

    const navigator = useNavigation();

    return (
        
        <View>
            <View>
                <Text style={S.title}>Seus gêneros favoritos</Text>
            </View>
            <View style={S.itemContainer}>
                <TouchableOpacity style={S.imageContainer} onPress={() => navigator.navigate("Playlist Screen")}>
                    <ImageBackground 
                    style={S.item}
                    imageStyle={{ borderRadius: 4}} 
                    source={PopImage}
                    >
                        <Text style={S.textItem}>Pop</Text>
                    </ImageBackground>
                </TouchableOpacity >
                <TouchableOpacity style={S.imageContainer} onPress={() => navigator.navigate("Playlist Screen")}>
                    <ImageBackground 
                    style={S.item} 
                    imageStyle={{ borderRadius: 4}} 
                    source={RBImage}
                    >
                        <Text style={S.textItem}>R&B</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default GenreSection;
