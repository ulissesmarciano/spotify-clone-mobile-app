import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import Slider from '@react-native-community/slider';

import TrackVel from './icons/1x.png';
import TrackVelDb from './icons/2x.png';

import Back from './icons/fw15.png';
import Forward from './icons/ff15.png';

import Play from './icons/playicon.png';
import Pause from './icons/pauseicon.png';

import TimeSleep from './icons/timesleep.png';

import PlayersIcon from './icons/playersicon.png';
import ShareIcon from './icons/shareicon.png';
import ListIcon from './icons/listicon.png';

import S from './styled.js';

const mockedImage = 'https://avatars.githubusercontent.com/u/104742158?v=4';


export default function PlayerScreen(){

    const [alternatePlayButton, setAlternatePlayButton] = useState(true);
    const changePlayButton = () => {
        setAlternatePlayButton(previousState => !previousState);
    };

    const [alternateTrackVelButton, setAlternateTrackVelButton] = useState(true);
    const changeTrackVelButton = () => {
        setAlternateTrackVelButton(previousState => !previousState);
    };

    const[segundos, setSegundos] = useState(0);

    return(
        <View>
        <View style={S.coverContainer} >
            <Image style={S.coverScreen} source={{uri: mockedImage}} />
        </View>
        <View style={S.controllContainer}>
            <View style={S.titleContainer}>
                <Text style={S.podcastTitle}>Título do Podcast</Text>
                <Text style={S.podcastSubtitle}>Podcast</Text>
            </View>
            <Slider 
                minimumValue={0}
                maximumValue={100}
                thumbTintColor="#FFFFFF"
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#BBBBBB"
                value={segundos}
                step={1}
                onValueChange={(value) => {setSegundos(value);
                }}                
            />
            <View style={S.timerContainer}>
                <Text style={S.time}>{segundos}</Text>
                <Text style={S.time} >1:05:25</Text>
            </View>
            <View style={S.buttonsContainer}>
                <TouchableOpacity onPress={changeTrackVelButton}>
                    {alternateTrackVelButton && <Image style={S.marginIcon} source={TrackVel} />}
                    {!alternateTrackVelButton && <Image style={S.marginIcon} source={TrackVelDb} />}
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={S.setTimeIcon} source={Back} />
                </TouchableOpacity>
                <TouchableOpacity onPress={changePlayButton}>
                    {alternatePlayButton && <Image style={S.playIcon} source={Play} />}
                    {!alternatePlayButton && <Image style={S.playIcon} source={Pause} />}
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={S.setTimeIcon} source={Forward} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={S.marginIcon} source={TimeSleep} />
                </TouchableOpacity>
            </View>
            <View style={S.buttonBottomContainer}>
                <View style={S.bottomIconPlayersContainer}>
                    <TouchableOpacity>
                        <Image style={S.bottomIcon} source={PlayersIcon} />
                    </TouchableOpacity>
                </View>
                <View style={S.botomIconOrientation}>
                    <TouchableOpacity>
                        <Image style={S.bottomIcon} source={ShareIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={S.bottomIcon} source={ListIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </View>
    );
};

