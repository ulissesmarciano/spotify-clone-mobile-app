import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Recent from './components/recent/index.js';
import  S from './styled.js'

const statusBcolor = 'black';

const Home = () => {
    return (
        <SafeAreaView style={S.container}>
            <StatusBar backgroundColor = {statusBcolor} barStyle = "light-content"/>
            <Recent/>
        </SafeAreaView>
    );
};

export default Home;