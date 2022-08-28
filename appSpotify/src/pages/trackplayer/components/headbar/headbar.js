import React from 'react';
import { Image, View, Text, SafeAreaView } from 'react-native';

import S from './styled.js'

const HeadBar = () => {
    return(
        <SafeAreaView>
            <View style={S.container}>
                <View style={S.imageContainer} >
                    <Image style={S.image} source={require('./icons/arrowicon.png')}/>
                </View>
                <View style={S.midleText}>
                    <Text style={S.title}>TOCANDO DA PLAYLIST</Text>
                    <Text style={S.subtitle} >Nome da Playlist</Text>
                </View>
                <View style={S.imageContainer}>
                    <Image style={S.image} source={require('./icons/optionsicon.png')}/>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default HeadBar;