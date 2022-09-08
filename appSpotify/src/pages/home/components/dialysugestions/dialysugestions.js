import React from 'react';
import { SafeAreaView, View, FlatList, Text, Image, TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import S from './styled';


const DATA = [
  {
    id: 1,
    title: 'That mix of pop with...',
  },
  {
    id: 2,
    title: 'Suggestion of artist or musical style...',
  },
  {
    id: 3,
    title: 'That mix of pop with...',
  },

  {
    id:4,
    title: 'That mix of pop with...',
  },

  {
    id:5,
    title: 'Suggestion of artist or musical style...',
  },

  {
    id:6,
    title: 'Suggestion of artist or musical style...',
  },

  {
    id:7,
    title: 'That mix of pop with...',
  },

  {
    id:8,
    title: 'Suggestion of artist or musical style...',
  },
];

const Item = ({ title }) => {
  const navigator = useNavigation();
  return(
    <TouchableOpacity style={S.item} onPress={() => navigator.navigate("Playlist Screen")}>
      <LinearGradient style={S.itemScreen} colors={['#05f545', '#004011']}>
          <Text style={S.textImageStyle}>A</Text>
      </LinearGradient>
      <Text style={S.title}>{title}</Text>
    </TouchableOpacity>
 );
};

const DiscoverSection = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );


    return(
        <View style={S.titleContainer}>
            <Text style={S.oMTitle}>Sugestões para você</Text>        
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

export default DiscoverSection;