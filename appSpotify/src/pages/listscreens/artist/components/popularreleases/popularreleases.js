import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import S from './styled.js';

const mockedImage = 'https://avatars.githubusercontent.com/u/104742158?v=4';


const Item = ({title, subtitle}) => {
    return(
        <View style={S.itemContainer}>
            <View>
                <Image style={S.albumScreen} source={{uri: mockedImage}} />
            </View>
            <View style={S.titleContainer}>
                <Text style={S.itemTitle}>{title}</Text>
                <Text style={S.itemSubtitle}>{subtitle}</Text>
            </View>
        </View>
    );
};

export default function PopularReleasesSection (){
    return(
        <View>
            <Text style={S.titleSection}>Lançamentos populares</Text>
            <Item title="Nome do Álbum" subtitle="Último lançamento - Álbum"/>
            <Item title="Nome do Álbum" subtitle="2019 - Álbum"/>
            <Item title="Nome do Álbum" subtitle="2018 - Álbum"/>
            <Item title="Nome do Álbum" subtitle="2012 - Álbum"/>
        <TouchableOpacity style={S.buttonAlbunContainer}>
            <Text style={S.albunsButton}>Ver discografia</Text>
        </TouchableOpacity>
        </View>

    );
};