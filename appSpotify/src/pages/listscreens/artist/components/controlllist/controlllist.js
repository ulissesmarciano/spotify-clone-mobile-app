import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import S from './styled.js';

import Play from './icons/playicon.png';
import Pause from './icons/pauseicon.png';
import Random from './icons/randomicon.png';
import RandomFoc from './icons/randomiconfoc.png';

export default function ControlListSection () {

    const [alternatePlayButton, setAlternatePlayButton] = useState(true);
    const changePlayButton = () => {
        setAlternatePlayButton(previousState => !previousState);
    };
    
    const [alternateRandomButton, setAlternateRandomButton] = useState(true);
    const changeRandomButton = () => {
        setAlternateRandomButton(previousState => !previousState);
    };

    const [alternateFollowButton, setAlternateFollowButton] = useState(true);
    const changeFollowButton = () => {
        setAlternateFollowButton(previousState => !previousState);
    };

    return(
        <View style={S.container}>
            <Text style={S.listenedContent}>1.807.251 ouvintes mensais</Text>
            <View style={S.controllContainer}>
                <View style={S.leftControllerOrientation}>
                    <TouchableOpacity style={S.buttonStyle} onPress={changeFollowButton}>
                        {alternateFollowButton && <Text style={S.textButtonStyle}>Seguir</Text>}
                        {!alternateFollowButton && <Text style={S.textButtonStyle}>Seguindo</Text>}
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={S.optionIconStyle} source={require('./icons/optionsicon.png')} />
                    </TouchableOpacity>
                </View>
                <View style={S.rightControllerOrientation}>
                    <TouchableOpacity onPress={changeRandomButton}>
                        {alternateRandomButton && <Image style={S.optionIconStyle} source={Random} />}
                        {!alternateRandomButton && <Image style={S.optionIconStyle} source={RandomFoc} />}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={changePlayButton}>
                        {alternatePlayButton && <Image style={S.optionPlayIconStyle} source={Play} />}
                        {!alternatePlayButton && <Image style={S.optionPlayIconStyle} source={Pause} />}
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};