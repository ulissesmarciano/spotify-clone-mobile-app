import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import S from './styled.js';

const ResumeTracklistSection = () => {

    const navigator = useNavigation();
    
    return(
        <View style={S.container}>
            <Text style={S.resumeText}>17 de maio de 2019</Text>
            <Text style={S.resumeText}>11 músicas - 39min46s</Text>
            <TouchableOpacity style={S.artistContainer} onPress={() => navigator.navigate("Artist Screen")}>
                <LinearGradient style={S.avatarStyle} colors={['#367bd6', '#073c82']}>
                    <Text style={S.textAvatarStyle}>U</Text>
                </LinearGradient>
                <Text style={S.resumeText}>Ulisses Gonçalves</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ResumeTracklistSection;