import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import S from './styled.js';

import AddIcon from './icons/adicicon.png';
import Download from './icons/download.png';
import Downloaded from './icons/downloadfoc.png';
import OptionsIcon from './icons/optionsicon.png';
import Play from './icons/playicon.png';
import Pause from './icons/pauseicon.png';

export default function LastEpisodeSection (){

    const [alternateDownloadButton, setAlternateDownloadButton] = useState(true);
    const changeDownloadButton = () => {
        setAlternateDownloadButton(previouState => !previouState);
    };

    const [alternatePlayButton, setAlternatePlayButton] = useState(true);
    const changePlayButton = () => {
        setAlternatePlayButton(previouState => !previouState)
    };

    const navigator = useNavigation();

    return(
        <View style={S.container}>
            <Text style={S.subtitle}>Último episódio</Text>
            <TouchableOpacity onPress={() => navigator.navigate("Podcast Player")}>
                <Text style={S.title}>UMG165 - Opiniões IMPOPULARES sobre FILMES</Text>
            </TouchableOpacity>
            <Text style={S.subtitle}>Reunimos três mulas e duas antas num podcast e colocamos todas elas pra conversar. O resultado foi e...</Text>
            <Text style={S.subtitle}>Qui - 1h 50min</Text>
            <View style={S.controllContainer}>
                <View style={S.leftIconsContainer}>
                    <TouchableOpacity>
                        <Image style={S.leftIcons} source={AddIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={changeDownloadButton}>
                        {alternateDownloadButton && <Image style={S.leftIcons} source={Download} />}
                        {!alternateDownloadButton && <Image style={S.leftIcons} source={Downloaded} />}
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={S.leftIcons} source={OptionsIcon} />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={changePlayButton}>
                        {alternatePlayButton && <Image style={S.playIcon} source={Play} />}
                        {!alternatePlayButton && <Image style={S.playIcon} source={Pause} />}
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};