import React from "react";
import { SafeAreaView, View, FlatList, Text, Image } from 'react-native';
import S from './styled'

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/104742158?v=4';

const DATA = [
  {
    id: 1,
    title: 'Artist, Artist1, Artist2, Artist3...',
  },
  {
    id: 2,
    title: 'Artist, Artist1, Artist2, Artist3...',
  },
  {
    id: 3,
    title: 'Artist, Artist1, Artist2, Artist3...',
  },

  {
    id:4,
    title: 'Artist, Artist1, Artist2, Artist3...',
  },

  {
    id:5,
    title: 'Artist, Artist1, Artist2, Artist3...',
  },

  {
    id:6,
    title: 'Artist, Artist1, Artist2, Artist3...',
  },

  {
    id:7,
    title: 'Artist, Artist1, Artist2, Artist3...',
  },

  {
    id:8,
    title: 'Artist, Artist1, Artist2, Artist3...',
  },
];

const Item = ({ title }) => (
    <View style={S.item}>
      <Image style={S.image} source={{uri: imageProfileGithub}}/>
      <Text style={S.title}>{title}</Text>
    </View>
);

const MixSugestionSection = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );


    return(
        <View style={S.titleContainer}>
            <Text style={S.oMTitle}>Seus mixes mais ouvidos</Text>        
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

export default MixSugestionSection;