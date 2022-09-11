import React from 'react';
import { SafeAreaView, View, FlatList, Text, TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import S from './styled.js';

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

const Item = ({ title }) => {
  const navigator = useNavigation();
  return(
    <TouchableOpacity style={S.item} onPress={() => navigator.navigate("Playlist Screen")}>
      <LinearGradient style={S.itemImage} colors={['#ff00e6', '#380032']}>
        <Text style={S.itemTextImage}>A</Text>
      </LinearGradient>
      <Text style={S.title}>{title}</Text>
    </TouchableOpacity>
  );
};

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


