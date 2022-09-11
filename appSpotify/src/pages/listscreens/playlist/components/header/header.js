import React from 'react';
import { View, Image, Text } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import S from './styled.js';

import TimeImage from './icons/timeicon.png';

const Background = ({children}) =>{
    return(
        <LinearGradient colors={['#905b55', '#121212']} style={{flex: 1, justifyContent: 'center', }} >
            {children}
        </LinearGradient>
    );
};

export default function HeaderSection(){
    return(
        <Background>
            <View style={S.container}>
                <View style={S.headerScreenOrientation}>
                    <View>
                        <LinearGradient style={S.headerImage} colors={['#ffb300', '#a35a00']}>
                            <Text style={S.textHeaderImage}>A</Text>
                        </LinearGradient>
                        <LinearGradient style={S.headerImage} colors={['#0073ff', '#002d63']}>
                            <Text style={S.textHeaderImage}>A</Text>
                        </LinearGradient>
                    </View>
                    <View>
                        <LinearGradient style={S.headerImage} colors={['#ff00d9', '#7d006a']}>
                            <Text style={S.textHeaderImage}>A</Text>
                        </LinearGradient>
                        <LinearGradient style={S.headerImage} colors={['#00d921', '#01470b']}>
                            <Text style={S.textHeaderImage}>A</Text>
                        </LinearGradient>
                    </View>
                </View>
                <View>
                    <View style={S.titleContainer}>
                        <Text style={S.titleStyle}>Nome da Playlist</Text>
                    </View>
                    <View style={S.userOrientation}>
                        <LinearGradient style={S.avatarStyle} colors={['#1500ff', '#06004a']}>
                            <Text style={S.avatarTextStyle}>U</Text>
                        </LinearGradient>
                        <Text style={S.nameUserStyle}>Ulisses Gonçalves</Text>
                    </View>
                    <View style={S.timeContainerOrientation}>
                        <Image style={S.timeImage} source={TimeImage}/>
                        <Text style={S.timeText}>1h 52min</Text>
                    </View>
                </View>
            </View>
        </Background>
    );
};

