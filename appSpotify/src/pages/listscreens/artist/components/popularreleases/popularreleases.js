import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import S from './styled.js';

const Item = ({title, subtitle}) => {
    const navigator = useNavigation();
    return(
        <TouchableOpacity style={S.itemContainer} onPress={() => navigator.navigate("Album Screen")}>
            <View>
                <LinearGradient style={S.albumScreen} colors={['#ffea00', '#ff9100']}>
                    <Text style={S.textImageStyle}>M</Text>
                </LinearGradient>
            </View>
            <View style={S.titleContainer}>
                <Text style={S.itemTitle}>{title}</Text>
                <Text style={S.itemSubtitle}>{subtitle}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default function PopularReleasesSection (){

    const navigator = useNavigation();

    return(
        <View>
            <Text style={S.titleSection}>Lançamentos populares</Text>
            <Item title="Nome do Álbum" subtitle="Último lançamento - Álbum"/>
            <Item title="Nome do Álbum" subtitle="2019 - Álbum"/>
            <Item title="Nome do Álbum" subtitle="2018 - Álbum"/>
            <Item title="Nome do Álbum" subtitle="2012 - Álbum"/>
        <TouchableOpacity style={S.buttonAlbunContainer} onPress={() => navigator.navigate("Discography Screen")}>
            <Text style={S.albunsButton}>Ver discografia</Text>
        </TouchableOpacity>
        </View>

    );
};