import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import S from './styled.js';

export default function ControllListSection(){
    return(
        <View style={S.container}>
            <View style={S.controllContainer}>
                <TouchableOpacity>
                    <Text style={S.buttonStyle}>Episódios</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={S.buttonStyle}>Artistas parecidos</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};