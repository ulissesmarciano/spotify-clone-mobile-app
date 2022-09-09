import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { useNavigation } from '@react-navigation/native';

import S from './styled.js';


const RecentMusic = ({title}) => {
    return (
        <View style={S.itemOrientation}>
            <LinearGradient style={S.itemScreen} colors={['#85caff','#06538f']}>
                <Text style={S.itemImageContent}>M</Text>
            </LinearGradient>
            <Text style={S.textBox}>{title}</Text>
        </View>
    );
};

const RecentPlaylist = ({title}) => {
    return (
        <View style={S.itemOrientation}>
            <LinearGradient style={S.itemScreen} colors={['#ff8075','#8f1106']}>
                <Text style={S.itemImageContent}>P</Text>
            </LinearGradient>
            <Text style={S.textBox}>{title}</Text>
        </View>
    );
};

const RecentArtist = ({title}) => {
    return (
        <View style={S.itemOrientation}>
            <LinearGradient style={S.itemScreen} colors={['#7dff69','#0f6901']}>
                <Text style={S.itemImageContent}>A</Text>
            </LinearGradient>
            <Text style={S.textBox}>{title}</Text>
        </View>
    );
};

const RecentPodcast = ({title}) => {
    return (
        <View style={S.itemOrientation}>
            <LinearGradient style={S.itemScreen} colors={['#bb93e6','#4d0996']}>
                <Text style={S.itemImageContent}>P</Text>
            </LinearGradient>
            <Text style={S.textBox}>{title}</Text>
        </View>
    );
};

const RecentAlbum = ({title}) => {
    return (
        <View style={S.itemOrientation}>
            <LinearGradient style={S.itemScreen} colors={['#F0CD42','#F2961E']}>
                <Text style={S.itemImageContent}>A</Text>
            </LinearGradient>
            <Text style={S.textBox}>{title}</Text>
        </View>
    );
};

export default function RecentSection(){
    const navigation = useNavigation();

    return (
        <View style={S.container}>
            <View style={S.boxContent}>
                    <TouchableOpacity style={S.recentItemContainer} onPress={() => navigation.navigate("Track Player")}>
                        <RecentMusic title="Música"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={S.recentItemContainer} onPress={() => navigation.navigate("Album Screen")}>
                        <RecentAlbum title="Album"/>
                    </TouchableOpacity>               
            </View>
            <View style={S.boxContent}>
                    <TouchableOpacity style={S.recentItemContainer} onPress={() => navigation.navigate("Artist Screen")}>
                        <RecentArtist title="Artista"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={S.recentItemContainer} onPress={() => navigation.navigate("Podcast Screen")}>
                        <RecentPodcast title="Podcast"/>
                    </TouchableOpacity>               
            </View>
            <View style={S.boxContent}>
                    <TouchableOpacity style={S.recentItemContainer} onPress={() => navigation.navigate("Playlist Screen")}>
                        <RecentPlaylist title="Playlist"/>
                    </TouchableOpacity>               
                    <TouchableOpacity style={S.recentItemContainer} onPress={() => navigation.navigate("Track Player")}>
                        <RecentMusic title="Música"/>
                    </TouchableOpacity>
            </View>
        </View>
    );
};
