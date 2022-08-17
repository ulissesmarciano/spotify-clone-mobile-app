import React from "react";
import { SafeAreaView, View, FlatList, Text, Image } from 'react-native';
import S from './styled';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/104742158?v=4';


const DATA = [
  {
    id: 1,
    title: 'Artista1, Artista2, Artista 3, Artista4..',
  },
  {
    id: 2,
    title: 'Artista1, Artista2, Artista 3, Artista4..',
  },
  {
    id: 3,
    title: 'Artista1, Artista2, Artista 3, Artista4..',
  },

  {
    id:4,
    title: 'Artista1, Artista2, Artista 3, Artista4..',
  },
  {
    id: 5,
    title: 'Artista1, Artista2, Artista 3, Artista4..',
  },
  {
    id: 6,
    title: 'Artista1, Artista2, Artista 3, Artista4..',
  },
  {
    id: 7,
    title: 'Artista1, Artista2, Artista 3, Artista4..',
  },

  {
    id:8,
    title: 'Artista1, Artista2, Artista 3, Artista4..',
  },  
];  


const Item = ({ title, subtitle }) => (
    <View style={S.item}>
      <Image style={S.image} source={{uri: imageProfileGithub}}/>
      <Text style={S.title}>{title}</Text>
      <Text style={S.subtitle}>{subtitle}</Text>    
    </View>
);

const BestOfArtistsSection = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    return(
        <View style={S.titleContainer}>
            <Text style={S.headTitle}>O melhor de cada artista</Text>        
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

export default BestOfArtistsSection;