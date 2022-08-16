import React from "react";
import { SafeAreaView, View, FlatList, Text, Image } from 'react-native';
import S from './styled'

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/104742158?v=4';

const DATA = [
  {
    id: 1,
    title: 'Confira os lançamentos do...',
    subtitle: 'Playlist',
  },
  {
    id: 2,
    title: 'Música',
    subtitle: 'Single - Album',
  },
  {
    id: 3,
    title: 'Música',
    subtitle: 'Single - Album',
  },

  {
    id:4,
    title: 'Música',
    subtitle: 'Single - Album',
  },

  {
    id:5,
    title: 'Música',
    subtitle: 'Single - Album',
  },

  {
    id:6,
    title: 'Música',
    subtitle: 'Single - Album',
  },

  {
    id:7,
    title: 'Música',
    subtitle: 'Single - Album',
  },

  {
    id:8,
    title: 'Música',
    subtitle: 'Single - Album',
  },
  
];

const Item = ({ title }) => (
    <View style={S.item}>
      <Image style={S.image} source={{uri: imageProfileGithub}}/>
      <Text style={S.title2}>{title}</Text>
    </View>
);

const Item2 = ({ title, subtitle }) => (
    <View style={S.item}>
      <Image style={S.image} source={{uri: imageProfileGithub}}/>           
      <Text style={S.title}>{title}</Text>
      <Text style={S.subtitle}>{subtitle}</Text>
    </View>
);

const NewReleasesSection = () => {
    const renderItem = ({ item }) => {
      if(item.title == 'Música'){
        return <Item2 title={item.title} subtitle={item.subtitle}/>
      } else return <Item title={item.title} subtitle={item.subtitle}/>
    };

    return(
        <View style={S.titleContainer}>
            <Text style={S.oMTitle}>Novos lançamentos para você</Text>        
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

export default NewReleasesSection;