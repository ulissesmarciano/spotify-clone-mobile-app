import React from 'react';
import { View, Image, Text } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import S from './styled.js';

import TimeImage from './icons/timeicon.png';

const mockedImage = 'https://avatars.githubusercontent.com/u/104742158?v=4';

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
                        <Image style={S.headerImage} source={{uri: mockedImage}}/>
                        <Image style={S.headerImage} source={{uri: mockedImage}}/>
                    </View>
                    <View>
                        <Image style={S.headerImage} source={{uri: mockedImage}}/>
                        <Image style={S.headerImage} source={{uri: mockedImage}}/>
                    </View>
                </View>
                <View>
                    <View style={S.titleContainer}>
                        <Text style={S.titleStyle}>Nome da Playlist</Text>
                    </View>
                    <View style={S.userOrientation}>
                        <Image style={S.avatarStyle} source={{uri: mockedImage}}/>
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

