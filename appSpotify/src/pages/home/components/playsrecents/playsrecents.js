import React from "react";
import { SafeAreaView, View, FlatList, Text, Image } from 'react-native';
import S from './styled.js'

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/104742158?v=4';

const DATA = [
  {
    id: 1,
    title: 'Música',
  },
  {
    id: 2,
    title: 'Música',
  },
  {
    id: 3,
    title: 'Música',
  },

  {
    id:4,
    title: 'Música',
  },

  {
    id:5,
    title: 'Música',
  },

  {
    id:6,
    title: 'Música',
  },

  {
    id:7,
    title: 'Música',
  },

  {
    id:8,
    title: 'Música',
  },
];

const Item = ({ title }) => (
    <View style={S.item}>
      <Image style={S.image} source={{uri: imageProfileGithub}}/>
      <Text style={S.title}>{title}</Text>
    </View>
);

const PlayRecents = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title}/> || <Item2 title={item2.title}/>
      );

    return(
        <View style={S.titleContainer}>
            <Text style={S.oMTitle}>Tocados recentemente</Text>        
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

export default PlayRecents;