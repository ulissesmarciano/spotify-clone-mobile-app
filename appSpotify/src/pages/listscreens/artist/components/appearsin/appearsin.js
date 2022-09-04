import React from 'react';
import { SafeAreaView, View, FlatList, Text, Image, TouchableOpacity } from 'react-native';

import S from './styled.js';

const mockedImage = 'https://avatars.githubusercontent.com/u/104742158?v=4';

const DATA = [
  {
    id: '1',
    title: 'Playlist ',
    subtitle: '2012',
  },
  {
    id: '2',
    title: 'Album',
    subtitle: '2017',
  },
  {
    id: '3',
    title: 'Album',
    subtitle: '2014',
  },
  {
    id: '4',
    title: 'Playlist',
    subtitle: '2010',
  },
  {
    id: '5',
    title: 'Playlist',
    subtitle: '2013',
  },
  {
    id: '6',
    title: 'Playlist',
    subtitle: '2011',
  },
  {
    id: '7',
    title: 'Playlist',
    subtitle: '2015',
  },
];

const Item = ({ title, subtitle }) => (
  <View style={S.item}>
    <Image style={S.itemImage} source={{uri: mockedImage}}/>
    <Text style={S.title}>{title}</Text>
    <Text style={S.subtitle}>{subtitle}</Text>
  </View>
);

export default function AppearsInSection () {
  const renderItem = ({ item }) => (
    <TouchableOpacity>
        <Item title={item.title} subtitle={item.subtitle} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={S.container}>
        <Text style={S.titleSection}>Aparece em</Text>
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