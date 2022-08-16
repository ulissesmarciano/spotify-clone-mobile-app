import React from "react";
import { SafeAreaView, View, FlatList, Text, Image } from 'react-native';
import S from './styled'

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/104742158?v=4';

const DATA = [
  {
    id: 1,
    title: 'Título da playlist',
    subtitle: 'Playlist',
  },
  {
    id: 2,
    title: 'Grupo de playlists',
    subtitle: 'Playlist',
  },
  {
    id: 3,
    title: 'Título da playlist',
    subtitle: 'Playlist',
  },

  {
    id:4,
    title: 'Título da playlist',
    subtitle: 'Playlist',
  },

  {
    id:5,
    title: 'Grupo de playlists',
    subtitle: 'Playlist',
  },

  {
    id:6,
    title: 'Título da playlist',
    subtitle: 'Playlist',
  },

  {
    id:7,
    title: 'Título da playlist',
    subtitle: 'Playlist',
  },

  {
    id:8,
    title: 'Grupo de playlists',
    subtitle: 'Playlist',
  },
  
];

const Item = ({ title, subtitle }) => (
    <View style={S.item}>
      <Image style={S.image} source={{uri: imageProfileGithub}}/>
      <Text style={S.title}>{title}</Text>
      <Text style={S.subtitle}>{subtitle}</Text>
    </View>
);

const Item2 = ({ title, subtitle }) => (
    <View style={S.item2}>
      <View style={S.imageOrientation}>
        <Image style={S.image2} source={{uri: imageProfileGithub}}/>
        <Image style={S.image2} source={{uri: imageProfileGithub}}/>
      </View>
      <View style={S.imageOrientation}>
        <Image style={S.image2} source={{uri: imageProfileGithub}}/>
        <Image style={S.image2} source={{uri: imageProfileGithub}}/>
      </View>      
      <Text style={S.title}>{title}</Text>
      <Text style={S.subtitle}>{subtitle}</Text>
    </View>
);

const MyPlaylistsSection = () => {
    const renderItem = ({ item }) => {
      if(item.title == 'Grupo de playlists'){
        return <Item2 title={item.title} subtitle={item.subtitle}/>
      } else return <Item title={item.title} subtitle={item.subtitle}/>
    };

    return(
        <View style={S.titleContainer}>
            <Text style={S.oMTitle}>Suas playlists</Text>        
        <SafeAreaView style={S.container}>
        <FlatList
          data={DATA}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
      </View>
    )
};

export default MyPlaylistsSection;