import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import S from './styled.js';

import PopularReleasesImage from './backimages/podcasts.png';
import ForYouImage from './backimages/feitoparavoce.png';
import OtherImage from './backimages/outros.png';

const VariousSection = () => {

    const navigator = useNavigation();

    return (
        <View>
            <View>
                <Text style={S.title}>Navegar por todas as seções</Text>
            </View>
            <View style={S.itemContainer}>
                <TouchableOpacity style={S.imageContainer} onPress={() => navigator.navigate("Podcast Screen")}>
                    <ImageBackground 
                    style={S.item}
                    imageStyle={{ borderRadius: 4}} 
                    source={PopularReleasesImage}
                    >
                        <Text style={S.textItem}>Podcasts</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={S.imageContainer} onPress={() => navigator.navigate("Podcast Screen")}>
                    <ImageBackground 
                    style={S.item} 
                    imageStyle={{ borderRadius: 4}} 
                    source={ForYouImage}
                    >
                        <Text style={S.textItem}>Feito para{'\n'}você</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
            <View style={S.itemContainer}>
                <TouchableOpacity style={S.imageContainer} onPress={() => navigator.navigate("Podcast Screen")}>
                    <ImageBackground 
                    style={S.item1}
                    imageStyle={{ borderRadius: 4}} 
                    source={OtherImage}
                    >
                        <Text style={S.textItem}>Outros...</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={S.imageContainer} onPress={() => navigator.navigate("Playlist Screen")}>
                    <ImageBackground 
                    style={S.item2} 
                    imageStyle={{ borderRadius: 4}} 
                    source={OtherImage}
                    >
                        <Text style={S.textItem}>Outros...</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
            <View style={S.itemContainer}>
                <TouchableOpacity style={S.imageContainer} onPress={() => navigator.navigate("Podcast Screen")}>
                    <ImageBackground 
                    style={S.item3}
                    imageStyle={{ borderRadius: 4}} 
                    source={OtherImage}
                    >
                        <Text style={S.textItem}>Outros...</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={S.imageContainer} onPress={() => navigator.navigate("Playlist Screen")}>
                    <ImageBackground 
                    style={S.item4} 
                    imageStyle={{ borderRadius: 4}} 
                    source={OtherImage}
                    >
                        <Text style={S.textItem}>Outros...</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
            <View style={S.itemContainer}>
                <TouchableOpacity style={S.imageContainer} onPress={() => navigator.navigate("Podcast Screen")}>
                    <ImageBackground 
                    style={S.item5}
                    imageStyle={{ borderRadius: 4}} 
                    source={OtherImage}
                    >
                        <Text style={S.textItem}>Outros...</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={S.imageContainer} onPress={() => navigator.navigate("Playlist Screen")}>
                    <ImageBackground 
                    style={S.item6} 
                    imageStyle={{ borderRadius: 4}} 
                    source={OtherImage}
                    >
                        <Text style={S.textItem}>Outros...</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
            <View style={S.itemContainer}>
                <TouchableOpacity style={S.imageContainer} onPress={() => navigator.navigate("Podcast Screen")}>
                    <ImageBackground 
                    style={S.item7}
                    imageStyle={{ borderRadius: 4}} 
                    source={OtherImage}
                    >
                        <Text style={S.textItem}>Outros...</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={S.imageContainer} onPress={() => navigator.navigate("Playlist Screen")}>
                    <ImageBackground 
                    style={S.item8} 
                    imageStyle={{ borderRadius: 4}} 
                    source={OtherImage}
                    >
                        <Text style={S.textItem}>Outros...</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default VariousSection;