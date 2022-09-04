import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import S from './styled';

const mockedImage = 'https://avatars.githubusercontent.com/u/104742158?v=4';

const RecentMusic = ({title}) => {
    return (
        <View style={S.itemOrientation}>
            <Image style={S.itemMusicImage} source={{uri:mockedImage}}/>
            <Text style={S.textBox}>{title}</Text>
        </View>
    );
};

const RecentPlaylist = ({title}) => {
    return (
        <View style={S.itemOrientation}>
            <View>
                <Image style={S.itemLeftTopPlaylistImage} source={{uri:mockedImage}}/>
                <Image style={S.itemLeftBotomPlaylistImage} source={{uri:mockedImage}}/>
            </View>
            <View>
                <Image style={S.itemPlaylistImage} source={{uri:mockedImage}}/>
                <Image style={S.itemPlaylistImage} source={{uri:mockedImage}}/>
            </View>            
            <Text style={S.textBox}>{title}</Text>
        </View>
    );
};

const RecentArtist = ({title}) => {
    return (
        <View style={S.itemOrientation}>
            <Image style={S.itemMusicImage} source={{uri:mockedImage}}/>
            <Text style={S.textBox}>{title}</Text>
        </View>
    );
};

const RecentPodcast = ({title}) => {
    return (
        <View style={S.itemOrientation}>
            <Image style={S.itemMusicImage} source={{uri:mockedImage}}/>
            <Text style={S.textBox}>{title}</Text>
        </View>
    );
};

const RecentAlbum = ({title}) => {
    return (
        <View style={S.itemOrientation}>
            <Image style={S.itemMusicImage} source={{uri:mockedImage}}/>
            <Text style={S.textBox}>{title}</Text>
        </View>
    );
};

export default function RecentSection(){
    const navigation = useNavigation();

    return (
    <View>
        <View >
            <View style={S.headContainer}>
                <Text style={S.title}>Boa Noite</Text>
                    <View style={S.iconsContainer}>
                        <TouchableOpacity>
                            <Image style={S.iconSize} source={require('./icons/sino.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity> 
                            <Image style={S.iconSize} source={require('./icons/historico.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={S.iconSize} source={require('./icons/config.png')}/>
                        </TouchableOpacity>
                    </View> 
            </View>
            <View>
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
                        <TouchableOpacity style={S.recentItemContainer} onPress={() => navigation.navigate("Podcast Player")}>
                            <RecentPodcast title="Podcast"/>
                        </TouchableOpacity>               
                </View>
                <View style={S.boxContent}>
                        <TouchableOpacity style={S.recentItemContainer} onPress={() => navigation.navigate("Track Player")}>
                            <RecentMusic title="Música"/>
                        </TouchableOpacity>
                        <TouchableOpacity style={S.recentItemContainer} onPress={() => navigation.navigate("Track Player")}>
                            <RecentPlaylist title="Playlist"/>
                        </TouchableOpacity>               
                </View>
            </View>
            <View>
                <Image source={{uri: mockedImage}}/>
            </View>
        </View>
    </View>
    );
};
