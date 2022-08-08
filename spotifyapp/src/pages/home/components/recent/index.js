import React from 'react';
import { View, Text, Image } from 'react-native';
import S from './styled';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/104742158?v=4';

const RecentContainer = ({title}) => {
    return (
        <View style={S.recentItem}>
            <Image style={S.imageContainer} source={{uri:imageProfileGithub}}/>
            <Text style={S.textBox}>{title}</Text>
        </View>
    );
};

const Recent = () => {
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
                    <RecentContainer title="teste"/>
                    <RecentContainer title="teste"/>
                    <RecentContainer title="teste"/>
                </View>
                <View>
                    <RecentContainer title="teste"/>
                    <RecentContainer title="teste"/>
                    <RecentContainer title="teste"/>
                </View>
            </View>
            <View>
                <Image source={{uri: imageProfileGithub}}/>
            </View>
        </View>
    </View>
    );
};
export default Recent;