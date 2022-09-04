import React from 'react';
import { View, Text, Image} from 'react-native';

import S from './styled.js';

const mockedImage = 'https://avatars.githubusercontent.com/u/104742158?v=4';


const ResumeTracklistSection = () => {
    return(
        <View style={S.container}>
            <Text style={S.resumeText}>17 de maio de 2019</Text>
            <Text style={S.resumeText}>11 músicas - 39min46s</Text>
            <View style={S.artistContainer}>
                <Image style={S.avatarStyle} source={{uri: mockedImage}}/>
                <Text style={S.resumeText}>Ulisses Gonçalves</Text>
            </View>
        </View>
    );
};

export default ResumeTracklistSection;