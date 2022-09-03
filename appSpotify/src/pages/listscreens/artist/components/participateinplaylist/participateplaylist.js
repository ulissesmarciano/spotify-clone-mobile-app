import React from 'react';
import { SafeAreaView, View, FlatList, Text, Image } from 'react-native';

import S from './styled.js';

const mockedImage = 'https://avatars.githubusercontent.com/u/104742158?v=4';

const DATA = [
  {
    id: '1',
    title: 'This is Ulisses Gonçalves',
  },
  {
    id: '2',
    title: 'Ulisses Gonçalves Radio',
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

const Item = ({ title }) => (
  <View style={S.item}>
    <Image style={S.itemImage} source={{uri: mockedImage}}/>
    <Text style={S.title}>{title}</Text>
  </View>
);

export default function ParticipatePlaylistSection () {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={S.container}>
        <Text style={S.titleSection}>Inclui Ulisses Gonçalves</Text>
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


