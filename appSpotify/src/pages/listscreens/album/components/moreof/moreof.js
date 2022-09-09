import React from 'react';
import { SafeAreaView, View, FlatList, Text, TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import S from './styled.js';


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

const Item = ({ title }) => {

  const navigator = useNavigation();

  return(
    <TouchableOpacity style={S.item} onPress={() => navigator.navigate("Playlist Screen")}>
      <LinearGradient style={S.itemImage} colors={['#f249ae', '#8f0357']}>
        <Text style={S.imageTextStyle}>M</Text>
      </LinearGradient>
      <Text style={S.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default function MoreOfSection () {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={S.container}>
        <Text style={S.titleSection}>Mais que talvez você goste</Text>
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