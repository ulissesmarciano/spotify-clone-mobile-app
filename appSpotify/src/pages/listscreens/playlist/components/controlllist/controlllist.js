import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import S from './styled.js';

import Download from './icons/download.png';
import Downloaded from './icons/downloadfoc.png';
import AddUser from './icons/adicuser.png';
import Options from './icons/optionsicon.png';
import RandomIcon from './icons/randomicon.png';
import RandomFoc from './icons/randomiconfoc.png';
import Play from './icons/playicon.png';
import Pause from './icons/pauseicon.png';

export default function ControllListSection(){
    const [alternatePlayButton, setAlternatePlayButton] = useState(true);
    const changePlayButton = () => {
        setAlternatePlayButton(previousState => !previousState);
    };
    const [alternateRandomButton, setAlternateRandomButton] = useState(true);
    const changeRandomButton = () => {
        setAlternateRandomButton(previousState => !previousState);
    };

    const[alternateDownloadButton, setAlternateDownloadButton] = useState(true);
    const changeDownloadButton = () => {
        setAlternateDownloadButton(previousState => !previousState)
    };
    return(
        <View >
            <View style={S.container}>
                <TouchableOpacity style={S.buttonContainer}>
                    <Text style={S.textButon}>Enriquecer</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={changeDownloadButton}>
                    {alternateDownloadButton && <Image style={S.leftButton} source={Download}/>}
                    {!alternateDownloadButton && <Image style={S.leftButton} source={Downloaded}/>}
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={S.leftButton} source={AddUser}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={S.leftButton} source={Options}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={changeRandomButton}>
                    {alternateRandomButton && <Image style={S.leftButton} source={RandomIcon}/>}
                    {!alternateRandomButton && <Image style={S.leftButton} source={RandomFoc}/>}
                </TouchableOpacity>
                <TouchableOpacity onPress={changePlayButton}>
                    {alternatePlayButton && <Image style={S.playButton} source={Play}/>}
                    {!alternatePlayButton && <Image style={S.playButton} source={Pause}/>}
                </TouchableOpacity>
            </View>
            <View style={S.buttonAddContainer}>
                <TouchableOpacity style={S.buttonAddStyle}>
                    <Text style={S.textButtonAdd}>Adicionar músicas</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};