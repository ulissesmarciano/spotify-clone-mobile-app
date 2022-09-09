import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import S from './styled.js';

import ReleaseImage from './backimages/lancamentospodcast.png';
import PlayNoVotoImage from './backimages/playnovoto.png';

const PodcastCategorySection = () => {

    const navigator = useNavigation();

    return (
        <View>
            <View>
                <Text style={S.title}>Categorias populares de podcasts</Text>
            </View>
            <View style={S.itemContainer}>
                <TouchableOpacity style={S.imageContainer} onPress={() => navigator.navigate("Podcast Screen")}>
                    <ImageBackground 
                    style={S.item}
                    imageStyle={{ borderRadius: 4}} 
                    source={ReleaseImage}
                    >
                        <Text style={S.textItem}>Lança-{'\n'}mentos de{'\n'}Podcast</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={S.imageContainer} onPress={() => navigator.navigate("Podcast Screen")}>
                    <ImageBackground 
                    style={S.item} 
                    imageStyle={{ borderRadius: 4}} 
                    source={PlayNoVotoImage}
                    >
                        <Text style={S.textItem}>Play no Voto</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default PodcastCategorySection;