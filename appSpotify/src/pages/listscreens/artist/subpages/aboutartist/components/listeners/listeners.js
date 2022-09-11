import React from 'react';
import { View, Text } from 'react-native';

import S from './styled.js';

const ListenerSection = () => {
    return(
        <View style={S.container}>
            <View style={S.titleContainer}>
                <Text style={S.titleStyle}>21.094.336</Text>
                <Text style={S.subtitleStyle}>OUVINTES MENSAIS</Text>
            </View>
            <View style={S.numbersContainer}>
                <Text style={S.numbersTitle}>176</Text>
                <Text style={S.numbersSubtitle}>no mundo</Text>
            </View>
        </View>
    );
};

export default ListenerSection;
