import React from 'react';
import { SafeAreaView, View, FlatList, Text, Image, TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import S from './styled.js';


const DATA = [
  {
    id: '1',
    title: 'This is Artista',
  },
  {
    id: '2',
    title: 'Radio do Artista',
  },
  {
    id: '3',
    title: 'Sucessos Gospel',
  },
  {
    id: '4',
    title: 'Outras Playlists',
  },
  {
    id: '5',
    title: 'Outras Playlists',
  },
  {
    id: '6',
    title: 'Outras Playlists',
  },
  {
    id: '7',
    title: 'Outras Playlists',
  },
];

const Item = ({ title }) => {

  const navigator = useNavigation();

  return(
    <TouchableOpacity style={S.item} onPress={() => navigator.navigate("Playlist Screen")}>
      <LinearGradient style={S.itemImage} colors={['#43536e', '#051c40']}>
      <Text style={S.textItemImage}>P</Text>  
      </LinearGradient> 
      <Text style={S.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default function ParticipatePlaylistSection () {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={S.container}>
        <Text style={S.titleSection}>Inclui 'Nome do Artista'</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}


