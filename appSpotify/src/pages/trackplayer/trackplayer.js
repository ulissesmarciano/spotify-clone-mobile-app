import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import HeadBar from './components/headbar/headbar';

import LinearGradient from 'react-native-linear-gradient';


export default function TrackPlayer (){
    return(
        <LinearGradient colors={['#48685d','#121212']} style={{flex:1}}>
            <SafeAreaView>
            <StatusBar barStyle="light-content" translucent={true} backgroundColor= "#rgba(1, 1, 1, 0.3)"/>
            <ScrollView>
                    <HeadBar />
            </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
};


