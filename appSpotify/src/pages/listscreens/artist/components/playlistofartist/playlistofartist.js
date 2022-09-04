import React from 'react';
import { SafeAreaView, View, FlatList, Text, Image } from 'react-native';

import S from './styled.js';

const mockedImage = 'https://avatars.githubusercontent.com/u/104742158?v=4';

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

const Item = ({ title }) => (
  <View style={S.item}>
    <Image style={S.itemImage} source={{uri: mockedImage}}/>
    <Text style={S.title}>{title}</Text>
  </View>
);

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


