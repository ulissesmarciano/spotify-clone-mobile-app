import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import S from './styled';

import { useNavigation } from '@react-navigation/native';


const mockedImage = 'https://avatars.githubusercontent.com/u/104742158?v=4';

const RecentContainer = ({title}) => {
    return (
        <View style={S.recentItem}>
            <Image style={S.imageContainer} source={{uri:mockedImage}}/>
            <Text style={S.textBox}>{title}</Text>
        </View>
    );
};

export default function RecentSection(){
    const navigation = useNavigation();

    return (
    <View>
        <View >
            <View style={S.headContainer}>
                <Text style={S.titleRcent}>Boa Noite</Text>
                 <View style={S.iconsHeader}>
                    <Image style={S.iconSize} source={require('./icons/sino.png')}/>
                    <Image style={S.iconSize} source={require('./icons/historico.png')}/>
                    <Image style={S.iconSize} source={require('./icons/config.png')}/> 
                </View>  
            </View>
            <View style={S.boxContent}>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate("Track Player")}>
                        <RecentContainer title="teste"/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Track Player")}>
                        <RecentContainer title="teste"/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Track Player")}>
                        <RecentContainer title="teste"/>
                    </TouchableOpacity>                    
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate("Track Player")}>
                        <RecentContainer title="teste"/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Track Player")}>
                        <RecentContainer title="teste"/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Track Player")}>
                        <RecentContainer title="teste"/>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Image source={{uri: mockedImage}}/>
            </View>
        </View>
    </View>
    );
};
