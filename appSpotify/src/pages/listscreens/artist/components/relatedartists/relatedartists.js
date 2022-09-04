import React from 'react';
import { SafeAreaView, View, FlatList, Text, Image } from 'react-native';

import S from './styled.js';

const mockedImage = 'https://avatars.githubusercontent.com/u/104742158?v=4';

const DATA = [
  {
    id: '1',
    title: 'Artista 1',
  },
  {
    id: '2',
    title: 'Artista 2',
  },
  {
    id: '3',
    title: 'Artista 3',
  },
  {
    id: '4',
    title: 'Artista 4',
  },
  {
    id: '5',
    title: 'Artista 5',
  },
  {
    id: '6',
    title: 'Artista 6',
  },
  {
    id: '7',
    title: 'Artista 7',
  },
];

const Item = ({ title }) => (
  <View style={S.item}>
    <Image style={S.itemImage} source={{uri: mockedImage}}/>
    <Text style={S.title}>{title}</Text>
  </View>
);

export default function RelatedArtistsSection () {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={S.container}>
        <Text style={S.titleSection}>Os fãs também curtem</Text>
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


