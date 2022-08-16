import React from "react";
import { SafeAreaView, View, FlatList, Text, Image } from 'react-native';
import S from './styled'

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/104742158?v=4';

const DATA = [
  {
    id: 1,
    title: 'Artista',
  },
  {
    id: 2,
    title: 'Artista',
  },
  {
    id: 3,
    title: 'Música',
    subtitle: 'Álbum - Artista',
  },

  {
    id:4,
    title: 'Música',
    subtitle: 'Álbum - Artista',
  },

  {
    id:5,
    title: 'Artista',
  },

  {
    id:6,
    title: 'Música',
    subtitle: 'Álbum - Artista',
  },

  {
    id:7,
    title: 'Música',
    subtitle: 'Álbum - Artista',
  },

  {
    id:8,
    title: 'Artista',
  },
];

const Item = ({ title, subtitle }) => (
    <View style={S.item}>
      <Image style={S.image} source={{uri: imageProfileGithub}}/>
      <Text style={S.title}>{title}</Text>
      <Text style={S.subtitle}>{subtitle}</Text>    
    </View>
);

const Item2 = ({ title }) => (
    <View style={S.item}>
        <Image style={S.image2} source={{uri: imageProfileGithub}}/>
        <Text style={S.title}>{title}</Text>
    </View>
);

const DiscoverSection = () => {
    const renderItem = ({ item }) => {
        if (item.title == 'Música'){
            return <Item title={item.title} subtitle={item.subtitle}/>
        } else return <Item2 title={item.title}/>
    };


    return(
        <View style={S.titleContainer}>
            <Text style={S.oMTitle}>Descubra algo novo pra você</Text>        
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