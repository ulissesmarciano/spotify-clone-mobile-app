import React, {useState} from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import S from './styled.js';

import Reminder from './icons/remindericon.png';
import ReminderFoc from './icons/remindericonfoc.png';
import Config from './icons/configicons.png';
import Options from './icons/optionsicon.png';


const Background = ({children}) => {
    return(
        <LinearGradient colors={['#aa5986', '#121212']}>
            {children}
        </LinearGradient>
    );
};

export default function HeaderSection(){

    const [alternateFollowButton, setAlternateFollowButton] = useState(true);
    const changeFollowButton = () => {
        setAlternateFollowButton(previousState => !previousState);
    };

    const [alternateReminderButton, setAlternateReminderButton] = useState(true);
    const changeReminderButton = () => {
        setAlternateReminderButton(previousState => !previousState);
    };

    return(
        <Background>
            <View style={S.container}>
                <View style={S.headContainer}>
                    <LinearGradient style={S.podcastHeaderImage} colors={['#aa5986', '#121212']}>
                        <Text style={S.textHeaderImage}>E</Text>
                    </LinearGradient>
                    <View style={S.titleContainer}>
                        <Text style={S.title}>Nome do Podcast</Text>
                        <Text style={S.subtitle}>Canal do Podcast</Text>
                    </View>
                </View>
                <View style={S.controllContainer}>
                    <TouchableOpacity style={S.followButtonStyle} onPress={changeFollowButton}>
                        {alternateFollowButton && <Text style={S.followButtonText}>Seguir</Text>}
                        {!alternateFollowButton && <Text style={S.followButtonText}>Seguindo</Text>}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={changeReminderButton}>
                        {alternateReminderButton && <Image style={S.controllIcon} source={Reminder} />}
                        {!alternateReminderButton && <Image style={S.controllIcon} source={ReminderFoc} />}
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={S.controllIcon} source={Config} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={S.controllIcon} source={Options} />
                    </TouchableOpacity>
                </View> 
            </View>
        </Background>
    );
};