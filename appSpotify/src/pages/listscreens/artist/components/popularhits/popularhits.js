import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import S from './styled.js';

const mockedImage = 'https://avatars.githubusercontent.com/u/104742158?v=4';


const Item = ({title, subtitle, id}) =>{
    return(
    <View style={S.itemContainer}>
        <Text style={S.idStyle}>{id}</Text>
            <TouchableOpacity style={S.buttonOrientation}>
                <View >
                    <Image style={S.imageMusic} source={{uri: mockedImage}}/>
                </View>
                <View style={S.titleContainer}>
                    <Text style={S.titleItem}>{title}</Text>
                    <Text style={S.subtitleItem}>{subtitle}</Text>
                </View>
            </TouchableOpacity>
        <TouchableOpacity>
            <Image style={S.optionsMusic} source={require('./icons/optionsicon.png')}/>
        </TouchableOpacity>
    </View>
    );    
};

export default function PopularHitsSection (){
    return(
        <View>
            <Text style={S.titleSection}>Popular</Text>
            <Item id={'1'} title={'Música 1'} subtitle={'1.000.000'}/>
            <Item id={'2'} title={'Música 1'} subtitle={'981.136'}/>
            <Item id={'3'} title={'Música 1'} subtitle={'2.456.632'}/>
            <Item id={'4'} title={'Música 1'} subtitle={'825.632'}/>
            <Item id={'5'} title={'Música 1'} subtitle={'1.163.632'}/>
        </View>
    );
};