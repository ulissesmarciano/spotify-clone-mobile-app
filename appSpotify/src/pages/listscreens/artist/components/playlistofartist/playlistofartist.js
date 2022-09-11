import React from 'react';
import { SafeAreaView, View, FlatList, Text, TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import S from './styled.js';

const DATA = [
  {
    id: '1',
    title: 'Playlist 1',
  },
  {
    id: '2',
    title: 'Playlist 2',
  },
  {
    id: '3',
    title: 'Playlist 3',
  },
  {
    id: '4',
    title: 'Playlist 4',
  },
  {
    id: '5',
    title: 'Playlist 5',
  },
  {
    id: '6',
    title: 'Playlist 6',
  },
  {
    id: '7',
    title: 'Playlist 7',
  },
];

const Item = ({ title }) => {
  const navigator = useNavigation();
  return(
    <TouchableOpacity style={S.item} onPress={() => navigator.navigate("Playlist Screen")}>
      <LinearGradient style={S.itemImage} colors={['#03fc03', '#004f00']}>
        <Text style={S.itemTextImage}>A</Text>
      </LinearGradient>
      <Text style={S.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default function PlaylistOfArtistSection () {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={S.container}>
        <Text style={S.titleSection}>Playlists do artista</Text>
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


