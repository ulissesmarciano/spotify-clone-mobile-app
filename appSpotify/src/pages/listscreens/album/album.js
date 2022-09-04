import React from 'react';
import { ScrollView, View } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const Background = ( {children} ) => {
    return (
        <LinearGradient colors={['#6d6d6d','#121212', '#121212']} style={{flex:1}}>
            {children}
        </LinearGradient>
    );
};

const Botton = () => {
    return(
        <View style={{height: 60}} />
    );
};

export default function AlbumScreen(){
    return(
        <Background>
            <ScrollView>
                <Botton/>
            </ScrollView>
        </Background>
    );
}; 