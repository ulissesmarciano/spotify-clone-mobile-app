import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

import S from './styled.js'

const VariousSection = () => {
    return (
        
        <View>
            <View>
                <Text style={S.title}>Navegar por todas as seções</Text>
            </View>
            <View style={S.imageContainer}>
                <ImageBackground 
                style={S.item}
                imageStyle={{ borderRadius: 4}} 
                source={require('./backimages/podcasts.png')}
                >
                    <Text style={S.textItem}>Podcasts</Text>
                </ImageBackground>
                <ImageBackground 
                style={S.item} 
                imageStyle={{ borderRadius: 4}} 
                source={require('./backimages/feitoparavoce.png')}
                >
                    <Text style={S.textItem}>Feito para{'\n'}você</Text>
                </ImageBackground>
            </View>
            <View style={S.imageContainer}>
                <ImageBackground 
                style={S.item1}
                imageStyle={{ borderRadius: 4}} 
                source={require('./backimages/outros.png')}
                >
                    <Text style={S.textItem}>Outros...</Text>
                </ImageBackground>
                <ImageBackground 
                style={S.item2} 
                imageStyle={{ borderRadius: 4}} 
                source={require('./backimages/outros.png')}
                >
                    <Text style={S.textItem}>Outros...</Text>
                </ImageBackground>
            </View>
            <View style={S.imageContainer}>
                <ImageBackground 
                style={S.item3}
                imageStyle={{ borderRadius: 4}} 
                source={require('./backimages/outros.png')}
                >
                    <Text style={S.textItem}>Outros...</Text>
                </ImageBackground>
                <ImageBackground 
                style={S.item4} 
                imageStyle={{ borderRadius: 4}} 
                source={require('./backimages/outros.png')}
                >
                    <Text style={S.textItem}>Outros...</Text>
                </ImageBackground>
            </View>
            <View style={S.imageContainer}>
                <ImageBackground 
                style={S.item5}
                imageStyle={{ borderRadius: 4}} 
                source={require('./backimages/outros.png')}
                >
                    <Text style={S.textItem}>Outros...</Text>
                </ImageBackground>
                <ImageBackground 
                style={S.item6} 
                imageStyle={{ borderRadius: 4}} 
                source={require('./backimages/outros.png')}
                >
                    <Text style={S.textItem}>Outros...</Text>
                </ImageBackground>
            </View>
            <View style={S.imageContainer}>
                <ImageBackground 
                style={S.item7}
                imageStyle={{ borderRadius: 4}} 
                source={require('./backimages/outros.png')}
                >
                    <Text style={S.textItem}>Outros...</Text>
                </ImageBackground>
                <ImageBackground 
                style={S.item8} 
                imageStyle={{ borderRadius: 4}} 
                source={require('./backimages/outros.png')}
                >
                    <Text style={S.textItem}>Outros...</Text>
                </ImageBackground>
            </View>            
        </View>
    );
};
export default VariousSection;