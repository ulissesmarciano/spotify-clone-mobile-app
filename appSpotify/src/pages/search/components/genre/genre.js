import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

import S from './styled.js'

const GenreSection = () => {
    return (
        
        <View>
            <View>
                <Text style={S.title}>Seus gêneros favoritos</Text>
            </View>
            <View style={S.imageContainer}>
                <ImageBackground 
                style={S.item}
                imageStyle={{ borderRadius: 4}} 
                source={require('./backimages/pop.png')}
                >
                    <Text style={S.textItem}>Pop</Text>
                </ImageBackground>
                <ImageBackground 
                style={S.item} 
                imageStyle={{ borderRadius: 4}} 
                source={require('./backimages/randb.png')}
                >
                    <Text style={S.textItem}>R&B</Text>
                </ImageBackground>
            </View>
        </View>
    );
};

export default GenreSection;
