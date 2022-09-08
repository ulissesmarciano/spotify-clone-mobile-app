import React from "react";
import { SafeAreaView, View, FlatList, Text, Image } from 'react-native';
import S from './styled'

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/104742158?v=4';

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

const Item = ({ title }) => (
    <View style={S.item}>
      <Image style={S.image} source={{uri: imageProfileGithub}}/>
      <Text style={S.title}>{title}</Text>
    </View>
);

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