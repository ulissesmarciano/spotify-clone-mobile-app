import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

import S from './styled.js'

const PodcastCategorySection = () => {
    return (
        
        <View>
            <View>
                <Text style={S.title}>Categorias populares de podcasts</Text>
            </View>
            <View style={S.imageContainer}>
                <ImageBackground 
                style={S.item}
                imageStyle={{ borderRadius: 4}} 
                source={require('./backimages/lancamentospodcast.png')}
                >
                    <Text style={S.textItem}>Lança-{'\n'}mentos de{'\n'}Podcast</Text>
                </ImageBackground>
                <ImageBackground 
                style={S.item} 
                imageStyle={{ borderRadius: 4}} 
                source={require('./backimages/playnovoto.png')}
                >
                    <Text style={S.textItem}>Play no Voto</Text>
                </ImageBackground>
            </View>
        </View>
    );
};

export default PodcastCategorySection;