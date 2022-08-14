import React from 'react';
import { View, ImageBackground, Text, Image } from 'react-native';
import S from './styled.js';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/104742158?v=4';
const imagePlayIcon = './icons/playlistplayicon.png';

const PodcastSection = () => {
    return (
        <View style={S.podcastStyle}>
                <ImageBackground 
                source={{uri: imageProfileGithub}} 
                style={S.backImage}
                imageStyle={{ borderRadius: 4, opacity: 0.6}}>
            <View style={S.textIcon}>
                <View style={S.allText}>
                        <Text style={S.descriptionPodcast}>Podcast em vídeo</Text>
                        <Text style={S.titlePodcast} >Podcast do Ulisses</Text>
                        <Text style={S.descriptionPodcast}>Ouça o melhor podcast sobre desenvolvimento de software</Text>                    
                </View>
                    <Image style={ S.playIcon} source={require(imagePlayIcon)}/>
            </View>            
                </ImageBackground>
        </View>
    );
};

export default PodcastSection;