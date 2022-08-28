import React from 'react';
import { View } from 'react-native';

import S from './styled.js';

const PlayerScreen = () => {
    return(
        <View>
            <View style={S.screenContainer}>
                <View style={S.coverScreen} ></View>
            </View>
            <View style={S.buttonPlayerContainer}>
                <View style={S.buttonPlayerScreen} ></View>
            </View>
            <View style={S.lyricsContainer}>

            </View>
        </View>
    );
};

export default PlayerScreen;
