import React from 'react';
import { SafeAreaView, View, FlatList, Text, Image, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import S from './styled';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/104742158?v=4';

const DATA = [
  {
    id: 1,
    title: 'Música',
    subtitle: 'Álbum - Artista',
  },
  {
    id: 2,
    title: 'Música',
    subtitle: 'Álbum - Artista',
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
    title: 'Música',
    subtitle: 'Álbum - Artista',
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
    title: 'Música',
    subtitle: 'Álbum - Artista',
  },
];


const Item = ({ title, subtitle }) => (
    <View style={S.item} >
      <Image style={S.image} source={{uri: imageProfileGithub}}/>
      <Text style={S.title}>{title}</Text>
      <Text style={S.subtitle}>{subtitle}</Text>    
    </View>
  );

const OldMusicsSection = () => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
      <TouchableOpacity onPress={() => navigation.navigate("Track Player")}>
        <Item title={item.title} subtitle={item.subtitle}/>
      </TouchableOpacity>
    );

  return(
      <View style={S.titleContainer}>
          <Text style={S.oMTitle}>Suas músicas estão com saudade</Text>        
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

export default OldMusicsSection;