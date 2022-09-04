import React, {useState} from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import S from './styled.js';

import Like from './icons/like.png';
import Liked from './icons/liked.png';
import Download from './icons/download.png';
import Downloaded from './icons/downloadfoc.png';
import OptionsIcon from './icons/optionsicon.png';
import Random from './icons/randomicon.png';
import RandomFoc from './icons/randomiconfoc.png';
import Play from './icons/playicon.png';
import Pause from './icons/pauseicon.png';


const ControllListSection = () => {

    const [alternateLikeButton, setAlternateLikeButton] = useState(true);
    const changeLikeButton = () => {
        setAlternateLikeButton (previoustate => !previoustate);
    };

    const [alternateDownloadButton, setAlternateDownloadButton] = useState(true);
    const changeDownloadButton = () => {
        setAlternateDownloadButton (previoustate => !previoustate);
    };

    const [alternateRandomButton, setAlternateRandomButton] = useState(true);
    const changeRandomButton = () => {
        setAlternateRandomButton(previousState => !previousState);
    };

    const[alternatePlayButton, setPlayButton] = useState(true);
    const changePlayButton = () => {
        setPlayButton(previousState => !previousState);
    };

    return(
        <View style={S.container}>
            <View style={S.leftIconsContainer}>
                <TouchableOpacity onPress={changeLikeButton}>
                    {alternateLikeButton && <Image style={S.iconsLeft} source={Like}/>}
                    {!alternateLikeButton && <Image style={S.iconsLeft} source={Liked}/>}
                </TouchableOpacity>
                <TouchableOpacity onPress={changeDownloadButton}>
                    {alternateDownloadButton && <Image style={S.iconsLeft} source={Download}/>}
                    {!alternateDownloadButton && <Image style={S.iconsLeft} source={Downloaded}/>}
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={S.iconsLeft} source={OptionsIcon}/>
                </TouchableOpacity>
            </View>
            <View style={S.rightIconsContainer}>
                <TouchableOpacity onPress={changeRandomButton}>
                    {alternateRandomButton && <Image style={S.randomIconStyle} source={Random}/>}
                    {!alternateRandomButton && <Image style={S.randomIconStyle} source={RandomFoc}/>}
                </TouchableOpacity>                
                <TouchableOpacity onPress={changePlayButton}>
                    {alternatePlayButton && <Image style={S.playIconStyle} source={Play}/>}
                    {!alternatePlayButton && <Image style={S.playIconStyle} source={Pause}/>}
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ControllListSection;