import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import S from './styled.js';

const mockedImage = 'https://avatars.githubusercontent.com/u/104742158?v=4';

export default function AboutArtistSection () {
    const navigator = useNavigation();
    return(
        <View>
            <Text style={S.titleSection}>Sobre</Text>
            <TouchableOpacity>
            <LinearGradient style={S.backgroundItemImage} colors={['#rgba(255, 217, 0, 0.6)', '#rgba(125, 106, 0, 0.6)']}>
                <View style={S.verifiedContainer}>
                    <Image style={S.verifiedIcon} source={require('./icons/verifiedIcon.png')}/>
                    <Text style={S.virifiedTitle}>ARTISTA VERIFICADO</Text>
                </View>
                <View>
                    <Text style={S.imageTextStyle}>S</Text>
                </View>
                <View>
                <View style={S.dataContainer}>
                    <View>
                        <View style={S.numberListenerOrientation}>
                            <Text style={S.monthlyListenerNumber}>1.807.251</Text>
                            <Text style={S.monthlyListenerText}>OUVINTES MENSAIS</Text>
                        </View>
                        <View style={S.aboutContainer} > 
                            <Text style={S.aboutArtistText}>Ulisses é um músico, cantor e compositor. Antes de se dedicar de forma excl...</Text>
                        </View>
                    </View>
                    <Image style={S.arrouButton} source={require('./icons/arrobutton.png')}/>
                </View>
                </View>
            </LinearGradient>
            </TouchableOpacity>
        </View>
    );
};