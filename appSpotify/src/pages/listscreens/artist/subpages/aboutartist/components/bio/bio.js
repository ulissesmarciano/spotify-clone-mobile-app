import React from 'react';
import { View, Text } from 'react-native';

import S from './styled.js';

const BioSection = () =>{
    return(
        <View>
            <Text style={S.textStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisl diam, dictum eu massa ut, ornare volutpat nibh. Sed vitae nibh mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam et felis non sem rhoncus blandit at sit amet ante...</Text>
        </View>
    );
};

export default BioSection;